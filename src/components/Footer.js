import './Footer.css';

const Footer = () => {
  return(
    <div className='footer'>
      <div className='footer-container'>
        {/* support */}
        <div className='footer-content'>
          <div className='footer-title'>
            Support
          </div>
          <div className='footer-link'>
            Contact Us
          </div>
        </div>

        {/* help */}
        <div className='footer-content'>
          <div className='footer-title'>
            Help
          </div>
          <div className='footer-link'>
            Shipping & Returns 
          </div>
          <div className='footer-link'>
            Store Policy
          </div>
          <div className='footer-link'>
            Customer Feedback
          </div>
        </div>

        {/* Follow Us */}
        <div className='footer-content'>
          <div className='footer-title'>
            Follow Us
          </div>
          <div className='footer-link'>
            Facebook
          </div>
          <div className='footer-link'>
            Instagram
          </div>
        </div>
      </div>
      <div className='rights'>
        @2022 by JGW, JSW. All Rights Reserved 
      </div>
    </div>
  )
}
export default Footer;