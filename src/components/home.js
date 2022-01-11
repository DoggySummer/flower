import './Home.css';
import { Link } from 'react-router-dom';

function Home(){
  return(
    <div>
      <div className='wording'>
        <div className='free-shipping'>
          Now Shipping Globally!
        </div>
        <img className="background" alt='bg-img' src="./images/teapod.jpg"></img>
        <Link to="/"><div className='background-btn'>Shop Now</div></Link>
      </div>
    </div>
  )
}

export default Home;