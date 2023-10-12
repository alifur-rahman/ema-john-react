import React, { useState } from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import fireBaseAuth from '../../firebase.init';
import googleIcon from '../../images/imgs/google.svg';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showError, setError] = useState('');
    const [showSuccess, setSuccess] = useState('');
    const [SignInWithGoogle,] = useSignInWithGoogle(fireBaseAuth);
    const [SignInWithEmailAndPassword,user,loading,error] = useSignInWithEmailAndPassword(fireBaseAuth);
    const navigate = useNavigate();
    const handalEmailBlur = e =>{
        setEmail(e.target.value);
    }
    const handalPasswBlur = e =>{
        setPassword(e.target.value);
    }
    const LoginWithUserPassword = event =>{
        event.preventDefault();
        SignInWithEmailAndPassword(email,password);
       
    }
    const SignInWithGoogleHandler = () =>{
        SignInWithGoogle();
    }
    if(user){
        navigate('/shop');

    }
   
    return (
        <div className="auth_from_container">
        <form onSubmit={LoginWithUserPassword} className='auth_from'>
            <h3>Login</h3>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input onBlur={handalEmailBlur} id='email' type="email" required />
            </div>
            <div className="form-group">
                <label htmlFor="np">Password</label>
                <input onBlur={handalPasswBlur} id='np' type="password" required />
            </div>
           
       
        
          <p className='show_error'>{error?.message}</p>
          <p className='show_error'>{loading ?? "loading.."}</p>
          <p className='show_success'>{showSuccess}</p>
           
          
            <div className="form-group">
                <input type="submit" className='al_btn btn-orenge-light' value="Login" />
                <p className='switch_text'>Already have an account?<Link to="/sign-up"> Sign Up</Link></p>
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

export default Login;