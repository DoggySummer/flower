import './Contact.css';
import { useCallback } from 'react'; 
import useInput from './useInput'; 
import emailjs from 'emailjs-com'; 
import styled from 'styled-components';


const Form = styled.form` margin: 0 auto; 
padding: 20px; 
width: 350px; 
text-align: center;
input { padding: 5px 10px; 
        width: 100%; 
        border: 1px solid #666; & + input, & + textarea { margin-top: 20px; } 
      } 
textarea { padding: 5px 10px; 
           width: 100%; 
           min-height: 200px; 
           outline: none; 
           resize: none; 
           IME-MODE: auto; 
           }
button { margin-top: 20px; 
         padding: 5px 15px; 
         background: #fff; 
         border: 1px solid #666; 
         cursor: pointer; 
        } `;



const Contact = () => {
  const [name, onChangeName] = useInput(''); 
  const [email, onChangeEmail] = useInput(''); 
  const [text, onChangeText] = useInput(''); 
  
  const onSubmit = useCallback((e) => {
  e.preventDefault(); 
  const inputNum = e.target.childElementCount - 1; 
  const data = new FormData(e.target); 
  const entries = data.entries(); 
  let failNum = 0; for (let i = 0; i < inputNum; i++) { 
  const next = entries.next(); const key = next.value[0]; 
  const value = next.value[1]; if (!value) { failNum++; alert(`${key} 비어있습니다.`); break; } } 
  if (!failNum) { emailjs.sendForm( 'neul0129', 'neul0129', e.target, 'user_WGCq6VtvX8EjaJUa33KFA')
  .then((result) => { alert("보내기 완료!")}, (error) => { console.log(error.text); }); } }, []);
  

  return(
    <div className='contact_bg'>
			<div className='contact_container'>
			<p className='contact_title'>Contact Us</p>
      <Form onSubmit={onSubmit}> 
      <input type="text" name="name" placeholder="이름" value={name} onChange={onChangeName} /> 
      <input type="text" name="email" placeholder="이메일" value={email} onChange={onChangeEmail} /> 
      <textarea name="text" placeholder="메세지" value={text} onChange={onChangeText} /> 
      <button type="submit"> 발송 </button> 
      </Form>
			</div>
    </div>
  )
}
export default Contact;