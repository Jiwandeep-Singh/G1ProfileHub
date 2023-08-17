import React, { createContext, useReducer } from 'react'
import { Routes,Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Contact from './components/Contact'
import About from './components/About'
import UserLogout from './components/UserLogout'
import Login from './components/Login'
import Signup from './components/Signup'
import ErrorPage from './components/ErrorPage'
import {reducer,initialState} from '../src/components/reducer/UseReducer'
import './App.css'

export const UserContext=createContext();
const Routing=()=>{
  return(
    
    <Routes>
    <Route exact path="/" element={<Home/>} />
    <Route path="/contact" element ={<Contact/>} />
    <Route path="/about" element={<About/>} />  
     <Route path="/login" element={<Login/>} />  
    <Route path="/signup" element={<Signup/>}/>
     <Route path="/logout" element={<UserLogout/>}/>
     <Route path="/*" element={<ErrorPage/>}/>
    </Routes>
    )
}
const App = () => {

  const [state,dispatch]=useReducer(reducer,initialState)
  return (
   
  <>
  <UserContext.Provider value={{state,dispatch}}>
    <Navbar/>
    <Routing/>
  </UserContext.Provider>
  </>
  )
}

export default App