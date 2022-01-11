import './Navbar.css'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faBars } from  "@fortawesome/free-solid-svg-icons";

function Navbar(){
  return (
    <div>
      <header className='header'> 
        <div className='logo'>
          <img src='./images/SOF-logo.png' />
        </div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/About">About</Link></li>
          <li><Link to="/Menu">Menu</Link></li>
          <li><Link to="/Contact">Contact</Link></li>
        </ul>
        <div className='icons'>
          <div className='icon_1'>
            <FontAwesomeIcon icon={ faShoppingCart } />
          <span>ㅣ</span>
          </div>
          <div className='icon_2'>
            <FontAwesomeIcon icon={ faBars } />
          </div>
        </div>

      <div className='cart'>
        <div className='cart-header'>
          <span>Cart</span>
        </div>
        <ul>
          <li>
            <img src='./images/1.png' />
            <div className='item-info'>
              제목
              <br />
              4500원
              <button>누르기</button>
            </div>
          </li>

          <li></li>
          <li></li>
          <li></li>
        </ul>


      </div>


      </header>
      <div className='empty'></div>
    </div>
  )
}
export default Navbar;