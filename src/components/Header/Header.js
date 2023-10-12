import React from 'react';
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import fireBaseAuth from '../../firebase.init';
import logo from '../../images/Logo.svg';
import './Header.css';



const Header = () => {
    const [user] = useAuthState(fireBaseAuth);
    const [signOut] = useSignOut(fireBaseAuth);
    const navigate = useNavigate();
    const handelLogOut  = () =>{
        const success =  signOut();
          if (success) {
            setTimeout(() => {
                navigate('/login');
            }, 1000);
          }
    }
    return (
        <nav className='header container'>
            <Link to='/shop'>
                <img src={logo} alt="Logo" />
            </Link>

            <div className='header_nav'>
                <NavLink to='/shop' >Shop</NavLink>
                <NavLink to='/orders' >Order Review</NavLink>
                <NavLink to='/inventory'>Manage Inventory</NavLink>
                <NavLink to='/about' >About</NavLink>
                {
                    user ?
                    <>
                        
                        <div className='showUserButton'>    
                            <img src={user.photoURL ? user.photoURL : 'https://templates.joomla-monster.com/joomla30/jm-news-portal/components/com_djclassifieds/assets/images/default_profile.png'}  />

                                <div className='userOptions'>
                                    <p>{user.displayName ? user.displayName : 'No Name'}</p>
                                    <button onClick={handelLogOut} className='signOutButton'>Sign Out</button>
                                </div>

                        </div>
                    </>
                       
                    :
                    <>
                        <NavLink to='/sign-up' >Sign Up</NavLink>
                        <NavLink to='/login' >Login</NavLink>
                    </>
                }
                
            </div>
        </nav>
    );
};

export default Header;