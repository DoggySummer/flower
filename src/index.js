import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import {createStore} from 'redux';


  // state 정의
  let defaultItems = [
    {id : 0, name : '몬트리얼', quan : 0, price : 5500, sum : 0, front_Image : "/images/1.png", back_Image : "/images/5.png"},
    {id : 1, name : '얼그레이', quan : 0, price : 5000, sum : 0, front_Image : "/images/2.png", back_Image : "/images/6.png"},
    {id : 2, name : '로즈마리', quan : 0, price : 4500, sum : 0, front_Image : "/images/3.png", back_Image : "/images/7.png"},
    {id : 3, name : '루이보스', quan : 0, price : 3500, sum : 0, front_Image : "/images/4.png", back_Image : "/images/8.png"},
    {id : 4, name : '잉글리시 브렉퍼스트', quan : 0, price : 3500, sum : 0, front_Image : "/images/1.png", back_Image : "/images/5.png"},
    {id : 5, name : '시나몬차', quan : 0, sum : 0, price : 5500, front_Image : "/images/2.png", back_Image : "/images/6.png"},
    {id : 6, name : '블론드오렌지', quan : 0, price : 5500, sum : 0, front_Image : "/images/3.png", back_Image : "/images/7.png"},
    {id : 7, name : '페퍼민트', quan : 0, price : 5500, sum : 0, front_Image : "/images/4.png", back_Image : "/images/8.png"},
    {id : 8, name : '차이 티', quan : 0, price : 6500, sum : 0, front_Image : "/images/1.png", back_Image : "/images/5.png"},
    {id : 9, name : '얼그레이 밀크 티', quan : 0, price : 4500, sum : 0, front_Image : "/images/2.png", back_Image : "/images/6.png"},
    {id : 10, name : '우롱 차 ', quan : 0, price : 4000, sum : 0, front_Image : "/images/3.png", back_Image : "/images/7.png"},
    {id : 11, name : '그레이프푸르츠', quan : 0, price : 3000, sum : 0, front_Image : "/images/4.png", back_Image : "/images/8.png"}
  ]

  // 액션 정의
  
  const ADD = "ADD";
  const MINUS = "MINUS";

  const add = () => ({
    type : ADD
  })

  const minus = () => ({
    type : MINUS
  })

  // reducer 생성
function reducer(state = defaultItems, action){

  // 장바구니 수량 늘리고 줄이기
	switch (action.type) {
    case ADD :
      return{
        ...state,
        quan: state[0].quan + 1,		
      };
      case MINUS :
      return{
        ...state,
        quan: state[0].quan - 1,		
      };
    default :
      return state;
  }
}

let store = createStore(reducer);
console.log(store.getState());

ReactDOM.render(
    <BrowserRouter>
      <Provider store = {store} >
        <App/>
      </Provider>
    </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();