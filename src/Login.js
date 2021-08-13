import { Button } from '@material-ui/core';
import React from 'react';
import "./Login.css";
import Logo from "./techohm.svg";
import { auth, provider } from "./firebase";
import { actionTypes } from "./reducer";
import { useStateValue } from "./StateProvider";
import { useEffect } from 'react';

function Login() {

const [state,dispatch] = useStateValue();

useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      dispatch({
        type: actionTypes.SET_USER,
        user: foundUser,
    });
    }
  }, []);

const signIn = async e => {
    e.preventDefault();
    console.log("Signing In...");
    auth.signInWithPopup(provider)
    .then((result)=>{
        localStorage.setItem('user', JSON.stringify(result.user));
        dispatch({
            type: actionTypes.SET_USER,
            user: result.user,
        });
    })
    .catch((error)=>{console.log(error);})
}

    return (
        <div className="login">
            <div className="login__logo">

                <img className="logo"
                    src={Logo}alt=""/>
                
            </div>
            <Button type="submit" onClick={signIn}>
                Sign In 
            </Button>

        </div>
    );
}

export default Login;
