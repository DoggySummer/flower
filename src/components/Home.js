import './Home.css';
import { Link } from 'react-router-dom';
const Home = () => {
  
  return(
    
	<div className='home'>
    <div className='home_container'>

      {/* 시작 이미지11 */}
      <div className='home_main'>
        <img className="background-img" alt='bg-img' src="./images/teapod.jpg"></img>
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
          <Link to="/Menu"><button className='card-btn'>Go to menu</button></Link>
        </div>
        <div className='home_card'>
          <div className='card_blend'>classic blends</div>
          <img src='./images/2.png' className='card-img' alt='about_image'></img>
          <div className='card_title'>Rooibos</div>
          <Link to="/Menu"><button className='card-btn'>Go to menu</button></Link>
        </div>
        <div className='home_card'>
          <div className='card_blend'>classic blend</div>
          <img src='./images/3.png' className='card-img' alt='about_image'></img>
          <div className='card_title'>Earl Grey</div>
          <Link to="/Menu"><button className='card-btn'> Go to menu</button></Link>
        </div>
      </div>

      {/* 리뷰 */}
      <div className='testimonial'>
          <img src='./images/testimonial-2.jpg' alt='about_image'></img>
      </div>
      <div className='carousel-ball'>
      </div>
    </div>
	</div>	
  )
} 

export default Home;