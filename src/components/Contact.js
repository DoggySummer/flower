import './Contact.css';


function Contact(){
  return(
    <div className='contact-bg'>
      <div className='contact_container'>
        <div className='contact_title'>
          Contact Us
        </div>
          <div className='hello'>
            hello there!
          </div>
          <div className='contact_help'>
            how can We help you?
          </div>
          <div className='contact_info'>
          Drop us a message below and we'll get back to you soon!
          <br />
          For Customer Service enquiries call us at +65 6909 5933
          </div>
        <div className='contact_input'>
          <input type="text" className='name' placeholder='Name'></input>  
          <input type="text" className='name' placeholder='Email'></input>  
        </div>
        <textarea className='textarea' placeholder='Message'></textarea>
        <div className='send'>Send</div>
      </div>
    </div>
  )
}
export default Contact;