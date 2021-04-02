import { Button } from '@material-ui/core';
import React from 'react';
import '../css/Login.css';
import { auth, provider } from '../firebase';
import { actionTypes } from './reducer';
import { useStateValue } from './StateProvider';

function Login() {
    const [, dispatch] = useStateValue();

    const signIn = () => {
        //sign-in...
        auth.signInWithPopup(provider)
        .then(result => {
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user
            });
        })
        .catch(error => alert(error.message));
    };

    return (
        <div className='login'>
            <div className="login__logo">
                <img 
                    src="https://i.imgur.com/0C6eXqX.png" 
                    alt=""
                />
                <h1>Birdbook</h1>
            </div>
            <Button type="submit" onClick={signIn}>
                Sign In
            </Button>
        </div>
    )
}

export default Login
