import { Link } from '@mui/material'
import './login.css'
import React, { useState } from 'react'
import { auth } from './firebase'
import { useHistory } from 'react-router-dom'


function Login() {
    const history = useHistory();    //it programatcally change the url
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();     //it prevent the refreshing ,no refreshing in react


        auth
         .signInWithEmailAndPassword(email, password)
         .then((auth) => {

                 history.push('/')
             
         })
         .catch(error => alert(error.message))

    }

    const register = e => {
        e.preventDefault();

        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                 // it successfully created a new user with email and password
                
                //  console.log(auth);
                 if(auth){             //if auth object is returnd then go to home page
                     history.push('/')
                 }

            })
            .catch(error => alert(error.message))
    }

    return (
        <div className='login'>
            <Link to='/'>
                <img
                    className="login_logo"
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'
                />
            </Link>

            <div className='login_container'>
                <h1>Sign-in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

                    <button type='submit' onClick={signIn} className='login_signInButton'>Sign In</button>
                </form>

                <p>
                    By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>

                <button onClick={register} className='login_registerButton'>Create your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login
