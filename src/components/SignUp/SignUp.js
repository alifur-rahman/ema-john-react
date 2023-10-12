import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import fireBaseAuth from '../../firebase.init';
import googleIcon from '../../images/imgs/google.svg';
import './SignUp.css';


const SignUp = () => {
    const [showError, setError] = useState('');
    const [showSuccess, setSuccess] = useState('');
    const [Email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [conPassword, setconPassword] = useState('');
    const navigate = useNavigate();
     
    const auth = fireBaseAuth;

   
    const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword (auth);
    const [signInWithGoogle,] = useSignInWithGoogle(auth);
    const handalEmailBlur = (e) =>{
        setEmail(e.target.value);
    }
    const handalPasswBlur = (e) =>{
        setPassword(e.target.value);
    }
    const handalConPasswordBlue = (e) =>{
        setconPassword(e.target.value);
    }
    if(user){
        navigate('/home');
    }
    const createUserEmailPassword = (e) =>{
        e.preventDefault();
        if(Email.length == 0){
            setError('Email is required');
            return;
        }
        if(password.length < 6){
            setError('Password need minimum 6 digit');
            return;
        }
        if(password !== conPassword){
            setError('Confrim password not match');
            return;
        }
        createUserWithEmailAndPassword(Email,password);
        if(loading){
            setSuccess('Loading...')
        }
        if(error){
            setError(error.message);
            return;
        }
      
    
       
    }
    const SignInWithGoogleHandler = () =>{
        signInWithGoogle();
    }

 

    return (
        <div className="auth_from_container">
            <form onSubmit={createUserEmailPassword} className='auth_from'>
                <h3>Sign Up</h3>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input onBlur={handalEmailBlur} id='email' type="email" required />
                </div>
                <div className="form-group">
                    <label htmlFor="np">Password</label>
                    <input onBlur={handalPasswBlur} id='np' type="password" required />
                </div>
                <div className="form-group">
                    <label htmlFor="cp">Confirm Password</label>
                    <input id='cp' onBlur={handalConPasswordBlue} type="password" required />
                </div>
           
            
              <p className='show_error'>{showError}</p>
              <p className='show_success'>{showSuccess}</p>
               
              
                <div className="form-group">
                    <input type="submit" className='al_btn btn-orenge-light' value="Sign Up" />
                    <p className='switch_text'>Already have an account?<Link to="/login"> Login</Link></p>
                </div>
            </form>
            <div className="al_block_divider">
                <span></span>
                <p>or</p>
                <span></span>
            </div>
            <div className="al-social-buttons">
                <button onClick={SignInWithGoogleHandler } className='al_btn al-google-btn'> <img src={googleIcon}  /> Continue with Google</button>
            </div>
        </div>
    );
};

export default SignUp;