import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

let defaultItems = [{id : 0, name : '몬트리얼', quan : 0, price : 5500}]

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
