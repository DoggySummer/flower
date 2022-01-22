import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

let defaultItems = [
  {id : 0, name : '몬트리얼', quan : 0, price : 5500},
  {id : 1, name : '얼그레이', quan : 0, price : 5000},
  {id : 2, name : '로즈마리', quan : 0, price : 4500},
  {id : 3, name : '루이보스', quan : 0, price : 3500},
  {id : 4, name : '잉글리시 브렉퍼스트', quan : 0, price : 3500},
  {id : 5, name : '시나몬차', quan : 0, price : 5500},
  {id : 6, name : '블론드오렌지', quan : 0, price : 5500},
  {id : 7, name : '페퍼민트', quan : 0, price : 5500},
  {id : 8, name : '차이 티', quan : 0, price : 6500},
  {id : 9, name : '얼그레이 밀크 티', quan : 0, price : 4500},
  {id : 10, name : '우롱 차 ', quan : 0, price : 4000},
  {id : 11, name : '그레이프푸르츠', quan : 0, price : 3000}
]

function reducer(state = defaultItems, action){

  // 장바구니 수량 늘리기
  if (action.type === 'add_1') {
    let copy = [...state];
    copy[0].quan++;
    return copy
  } 

  // 장바구니 수량 줄이기
  else if (action.type === 'subtract_1'){
  let copy = [...state];
  copy[0].quan++;
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
