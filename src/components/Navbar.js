import './Navbar.css'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faBars } from  "@fortawesome/free-solid-svg-icons";
import {faAlignJustify} from  "@fortawesome/free-solid-svg-icons";
import { useState } from 'react';

const Navbar = (props) => {
  {console.log(window.outerWidth)}
  const menuToggle = () => {
    if(ulAppear == 1){
      document.querySelector('header').className = 'header_open';
      document.querySelector('ul').className = 'ul_open';
      document.querySelector('#empty').className = 'empty_open';
			setUlAppear(2);
		}
		if(ulAppear == 2){
      document.querySelector('header').className = 'header_close';
      document.querySelector('ul').className = 'ul_close';
      document.querySelector('#empty').className = 'empty_close';
			setUlAppear(1);
		}
  }
  
  

  const [ulAppear,setUlAppear] = useState(1);
  return (
    <div>
      <header className='header'> 
        <div className='logo'>
					<Link to="/" className='LinkHome'><img src='./images/SOF-logo.png' /></Link>
        </div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/About">About</Link></li>
          <li><Link to="/Menu">Menu</Link></li>
          <li><Link to="/Contact">Contact</Link></li>
        </ul>
        <div className="icons">
        <Link to="/Cart" className='icon_cart'>
          <button className='icon_1'>
            <FontAwesomeIcon icon={ faShoppingCart } className='cart_icon'/>
          </button>
        </Link>
          <button className='icon_2' onClick={menuToggle}>
            <FontAwesomeIcon icon={ faAlignJustify } className='mediaMenu'/>
          </button> 
          </div>
      </header>
      <div id='empty' className='empty' />
    </div>
  )
}
export default Navbar;
