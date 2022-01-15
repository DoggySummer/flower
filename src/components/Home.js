import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return(
	<div className='home_background_img'>
    <div className='home_background_center'>
      {/* 시작 이미지 */}
      <div className='wording'>
        <h1 className='free-shipping'>
          Now Shipping Globally!
        </h1>
        <img className="background" alt='bg-img' src="./images/teapod.jpg"></img>
        <Link to="/"><div className='background-btn'>Shop Now</div></Link>
      </div>

      {/* 카드 앞 설명 */}
      <div className='card-def'>
        <h1>exclusively handcrafted teas</h1>
        <h4>he point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters
          <br /> as opposed to using 'Content here, content here'</h4>
      </div>

      {/* 카드 형식 */}
      <div className='home_card-container'>
        <div className='home_card'>
          <div className='card_blend'>classic blends</div>
          <img src='./images/1.png' className='card-img' alt='about_image'></img>
          <div className='card_title'>Chamomile</div>
          <button className='card-btn'>add to cart</button>
        </div>
        <div className='home_card'>
          <div className='card_blend'>classic blends</div>
          <img src='./images/2.png' className='card-img' alt='about_image'></img>
          <div className='card_title'>Rooibos</div>
          <button className='card-btn'>add to cart</button>
        </div>
        <div className='home_card'>
          <div className='card_blend'>classic blends</div>
          <img src='./images/3.png' className='card-img' alt='about_image'></img>
          <div className='card_title'>Earl Grey</div>
          <button className='card-btn'>add to cart</button>
        </div>
      </div>

      {/* 리뷰 */}
      <div className='testimonial'>
        <img src='./images/testimonial-1.jpg' alt='about_image'></img>
        <img src='./images/testimonial-2.jpg' alt='about_image'></img>
        <img src='./images/testimonial-3.jpg' alt='about_image'></img>
      </div>
      <div className='carousel-ball'>
      </div>
    </div>
	</div>	
  )
} 

export default Home;