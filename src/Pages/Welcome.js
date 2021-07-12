import React from 'react'
import { Jumbotron,Button } from 'reactstrap'
import Signup from './Signup'
import { Link } from 'react-router-dom'
import "../App.css"

const Welcome = () => {
    
    return (
        <div>
            <Jumbotron className="p-5">
                <h1 className="display-3">Hey there!</h1>
                <p className="lead">This is a simple react router application to search github users.</p>
                <hr className="my-2" />
                <p>It uses the concept of react-routing for routing between different web pages.
                It also uses firebase to deal with the login and signup cases.
                <br/>
                Just signup or login and get going!
                </p>
                <p className="lead" >
                <Link to="/Signup" id="signup" className="btn btn-primary">SignUp</Link>
                <Link to="/Signin" outline className="btn btn-outline-primary m-1">Login</Link>
                </p>



                
            </Jumbotron>
            
        </div>
    )
}

export default Welcome
