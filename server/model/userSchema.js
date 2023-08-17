const mongoose = require('mongoose')
const bscript = require('bcryptjs')
const jwt = require('jsonwebtoken')
const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phoneno: {
        type: Number,
        required: true
    },
    work: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    cpassword: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    messages: [{
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        phoneno: {
            type: Number,
            required: true
        },
        message: {
            type: String,
            required: true
        }
    }],
    tokens: [{
        token: {
            type: String,
            required: true
        }
    }]
})

userSchema.pre('save', async function (next) {
    console.log("pre call ho gya")
    if (this.isModified('password')) {
        this.password = await bscript.hash(this.password, 12);
        this.cpassword = await this.password
        console.log(this.password)
    }
    next()
})

userSchema.methods.createAuthToken = async function () {
    try {
        let token = jwt.sign({ _id: this._id }, process.env.SECRET_KEY)  //secret key should have minimun 32 character
        this.tokens = this.tokens.concat({ token: token })
        await this.save();
        return token;
    }
    catch (err) {
        console.log(err)

    }
}

userSchema.methods.addMessage = async function (name, email, phoneno, message) {
    try {
        this.messages = this.messages.concat({ name, email, phoneno, message })
        await this.save();
        return this.messages;
    }
    catch (err) {
        console.log(err)

    }
}

const User = mongoose.model("USER", userSchema);
module.exports = User