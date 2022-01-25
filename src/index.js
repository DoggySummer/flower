import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

let defaultItems = [
  {id : 0, name : '몬트리얼', quan : 0, price : 5500, front_Image : "/images/blog-1.jpeg", back_Image : "/images/1.png"},
  {id : 1, name : '얼그레이', quan : 0, price : 5000, front_Image : "/images/blog-1.jpeg", back_Image : "/images/2.png"},
  {id : 2, name : '로즈마리', quan : 0, price : 4500, front_Image : "/images/blog-1.jpeg", back_Image : "/images/3.png"},
  {id : 3, name : '루이보스', quan : 0, price : 3500, front_Image : "/images/blog-1.jpeg", back_Image : "/images/4.png"},
  {id : 4, name : '잉글리시 브렉퍼스트', quan : 0, price : 3500, front_Image : "/images/blog-1.jpeg", back_Image : "/images/5.png"},
  {id : 5, name : '시나몬차', quan : 0, price : 5500, front_Image : "/images/blog-1.jpeg", back_Image : "/images/6.png"},
  {id : 6, name : '블론드오렌지', quan : 0, price : 5500, front_Image : "/images/blog-1.jpeg", back_Image : "/images/7.png"},
  {id : 7, name : '페퍼민트', quan : 0, price : 5500, front_Image : "/images/blog-1.jpeg", back_Image : "/images/8.png"},
  {id : 8, name : '차이 티', quan : 0, price : 6500, front_Image : "/images/blog-1.jpeg", back_Image : "/images/1.png"},
  {id : 9, name : '얼그레이 밀크 티', quan : 0, price : 4500, front_Image : "/images/blog-1.jpeg", back_Image : "/images/1.png"},
  {id : 10, name : '우롱 차 ', quan : 0, price : 4000, front_Image : "/images/blog-1.jpeg", back_Image : "/images/1.png"},
  {id : 11, name : '그레이프푸르츠', quan : 0, price : 3000, front_Image : "/images/blog-1.jpeg", back_Image : "/images/1.png"}
]

let onCart = []

function reducer(state = defaultItems, action){

  // 장바구니 수량 늘리기
  if (action.type === 'add_0') {
    if (onCart.id==0 ){
      console('no');
      return onCart[0].quan++
    }
    else {
    let copy = [...state];
    copy[0].quan++;
    onCart.push(defaultItems[0]);
    alert(onCart);
    console.log(onCart);
    return copy}
  } 
  else if (action.type === 'add_1') {
    let copy = [...state];
    copy[1].quan++;

    return copy
  } 
  else if (action.type === 'add_2') {
    let copy = [...state];
    copy[2].quan++;

    return copy
  } 
  else if (action.type === 'add_3') {
    let copy = [...state];
    copy[3].quan++;

    return copy
  } 
  else if (action.type === 'add_4') {
    let copy = [...state];
    copy[4].quan++;

    return copy
  } 
  else if (action.type === 'add_5') {
    let copy = [...state];
    copy[5].quan++;

    return copy
  } 
  else if (action.type === 'add_6') {
    let copy = [...state];
    copy[6].quan++;

    return copy
  } 
  else if (action.type === 'add_7') {
    let copy = [...state];
    copy[7].quan++;

    return copy
  } 
  else if (action.type === 'add_8') {
    let copy = [...state];
    copy[8].quan++;

    return copy
  } 
  else if (action.type === 'add_9') {
    let copy = [...state];
    copy[9].quan++;

    return copy
  } 
  else if (action.type === 'add_10') {
    let copy = [...state];
    copy[10].quan++;

    return copy
  } 
  else if (action.type === 'add_11') {
    let copy = [...state];
    copy[11].quan++;
    return copy
  } 

  // 장바구니 수량 줄이기
  else if (action.type === 'subtract_1'){

    if (state[0].quan>0){
      alert('목록에서 제거하였습니다')
      let copy = [...state];
      copy[0].quan--;
      return copy
    }
    else {
      return [...state[0].quan]
    }
      



    }
  else if (action.type === 'subtract_2'){
    let copy = [...state];
    copy[1].quan--;
    return copy
    }
    else {
      return state
    }
}

let store = createStore(reducer);




ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store = {store} >
        <App/>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();