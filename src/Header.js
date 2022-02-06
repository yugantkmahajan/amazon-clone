import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from "@mui/icons-material/AddShoppingCart";
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function Header() {
    
    const [{ basket, user }, dispatch] = useStateValue();

    const handleAuthentication =()=>{
        if(user){
            auth.signOut()
        }
    }

    return (
        <div className='header'>
            <Link to='/'>
                <img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" className='header-logo' alt="/#"></img>
            </Link>
            <div className='header_search'>
                <input
                    className='header_searchinput' type="text" />
                <SearchIcon className='header_searchIcon'></SearchIcon>
            </div>
            <div className='header_nav'>
                <Link to={!user && '/login'}>
                <div onClick={handleAuthentication} className='header_option'>
                    <span className='header_optionline1'>
                        Hello, {!user?'guest' : user?.email}
                    </span>
                    <span className='header_optionline2'>
                        {user? 'Sign Out' : 'Sign In'}
                    </span>
                </div>
                  </Link>
                <div className='header_option'>
                    <span className='header_optionline1'>
                        Retuerns
                    </span>
                    <span className='header_optionline2'>
                        & Orders
                    </span>
                </div>

                <div className='header_option'>
                    <span className='header_optionline1'>
                        Your
                    </span>
                    <span className='header_optionline2'>
                        Prime
                    </span>

                </div>
                <Link to="/checkout">
                    <div className='header_optionBasket'>
                        <ShoppingBasketIcon />
                        <span className='header_optionline2 header_basketCount'>{basket?.length}</span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Header

//line no. 51
// ? mark is a optional chaining when you have not a correct value for basket it is not freak out it just terminate and handle the error
