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

    {/* 카트 */}
      <div className='cart'>
        <div className='cart-header'>
          Cart
        </div>

    {/* 카트 내용 */}
        <ul>
          <li>
            <img src='./images/1.png' />
            <div className='item-info'>
              <div className='innerCart-cancel'>X</div>
              <div className='innerCart-title'>
                캐모마일
              </div>
            <div className='innerCart-price'>
              4500원
            </div>
              <button className='InnerCart-btn'>누르기</button>
            </div>
          </li>

          <li>
            <img src='./images/2.png' />
            <div className='item-info'>
              <div className='innerCart-cancel'>X</div>
              <div className='innerCart-title'>
                루이보스
              </div>
            <div className='innerCart-price'>
              4500원
            </div>
              <button className='InnerCart-btn'>누르기</button>
            </div>
          </li>

          <li>
            <img src='./images/3.png' />
            <div className='item-info'>
              <div className='innerCart-cancel'>X</div>
              <div className='innerCart-title'>
                얼그레이
              </div>
            <div className='innerCart-price'>
              4500원
            </div>
              <button className='InnerCart-btn'>누르기</button>
            </div>
          </li>
        </ul>

    {/* 총액 */}
        <div className='subtotal'>
          총 금액
          <br />
          15000원
        </div>
        <button className='ViewCart'>
          View Cart
        </button>
      </div>

      </header>
      <div className='empty'></div>
    </div>
  )
}
export default Navbar;