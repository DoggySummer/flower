import React from 'react';
import './Cart.css';
const Cart = () => {
  return (
    <div>
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
    </div>
  );
};

export default Cart;