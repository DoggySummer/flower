import './Navbar.css'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faBars } from  "@fortawesome/free-solid-svg-icons";

const Navbar = (props) => {


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
        <div className='icons'>
          <button className='icon_1' onClick={props.cartClick}>
            <FontAwesomeIcon icon={ faShoppingCart } className='cart_icon'/>
            <FontAwesomeIcon icon={ faBars } className='bar_icon'/>
          </button>
        </div>
      </header>
      <div className='empty'></div>
    </div>
  )
}
export default Navbar;
