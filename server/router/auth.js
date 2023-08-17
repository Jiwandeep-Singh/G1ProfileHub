const express = require('express');
const router = express.Router()
const bscript = require('bcryptjs')
const jwt = require('jsonwebtoken')
const authenticate = require('../middleware/authenticate')
const cookieParser = require("cookie-parser");
router.use(cookieParser());

require('../db/conn.js')




const User = require('../model/userSchema')



router.get('/', async (req, res) => {
  res.send(`Home`)



})
router.post('/signin', async (req, res) => {
  try {
    let token;
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: "plz filled the data" })
    }
    const userLogin = await User.findOne({ email: email })
    if (userLogin) {
      const isMatch = await bscript.compare(password, userLogin.password)
      token = await userLogin.createAuthToken();
      console.log(token);
      res.cookie("jwttoken", token, {
        expires: new Date(Date.now() + 50000000),
        httpOnly: true
      })


      if (!isMatch) {
        res.status(400).json({ error: "invalid login" });
      }
      else {
        res.status(301).json({ message: "User Signin successfully" })

      }
    } else {
      res.status(400).json({ error: "invalid login" });
    }
  } catch (err) {
    console.log(err)
  }
})






router.post('/register', async (req, res) => {
  const { name, email, phoneno, work, password, cpassword } = req.body;

  if (!name || !email || !phoneno || !work || !password || !cpassword) {
    return res.status(422).json({ error: "please fill form properly" })
  }
  try {

    const userExist = await User.findOne({ email: email })
    if (userExist) {
      return res.status(422).json({ error: "Email already exist" })
    } else if (password != cpassword) {
      return res.status(422).json({ error: "password not match" })
    } else {
      const user = new User({ name, email, phoneno, work, password, cpassword });
      await user.save();
      return res.status(301).json({ message: "regestratio successfull" })
    }

  }
  catch (err) {
    console.log(err)
  }

})

router.get('/about', authenticate, (req, res) => {

  res.send(req.rootUser)


})

// for contact us and home page
router.get('/getdata', authenticate, (req, res) => {
  res.send(req.rootUser)
})

router.post('/contact', authenticate, async (req, res) => {

  try {
    const { name, email, phoneno, message } = req.body;
    if (!name || !email || !phoneno || !message) {
      console.log("there is error in data")
      return res.status(401).json({ error: "please fill the contact form" })
    }
    const userContact = await User.findOne({ _id: req.userID })
    if (userContact) {
      const userMessage = await userContact.addMessage(name, email, phoneno, message);
      await userContact.save();
      res.status(201).json({ message: "user contact  message save successfully" })
    }

  } catch (err) {
    console.log(err)
  }


})

router.get('/logout', (req, res) => {
  console.log("hello logout page")
  res.clearCookie("jwttoken", { path: "/" })
  res.status(200).send("logout Done")
})
module.exports = router;