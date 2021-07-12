import React, { useState } from 'react'

import "bootstrap/dist/css/bootstrap.min.css"

//react-router
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
   } from "react-router-dom"

//toast
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.min.css"

//firebase
import firebase from "firebase/app"
import "firebase/auth"

//components
import Home from './Pages/Home'
import Signin from './Pages/Signin'
import Signup from './Pages/Signup'
import PageNotFound from './Pages/PageNotFound'
import { UserContext } from './Context/UserContext'
import Footer from './Layout/Footer'
import Header from './Layout/Header'
import FirebaseConfig from "./Config/FirebaseConfig"

//init firebase
firebase.initializeApp(FirebaseConfig);
 
const App = () => {

  const [user, setUser] = useState(null)

  return (
    <Router>
      <ToastContainer />
      <UserContext.Provider value={{user,setUser}}> 
      <Header />
        <Switch>
           <Route exact path="/" component={Home} /> 
          <Route  path="/Signin" component={Signin} />
          <Route  path="/Signup" component={Signup} />
          <Route  path="*" component={PageNotFound} /> 
         </Switch>
         
       </UserContext.Provider> 
       <Footer />
    </Router>
  )
}

export default App
