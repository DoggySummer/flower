import {INCREMENT, DECREMENT} from '../actions/ActionTypes';


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

const CounterReducer = (state = defaultItems, action) => {
	switch (action.type) {
		case INCREMENT:
			state[action.idx].quan++
			return state;
			
			case DECREMENT:
			state[action.idx].quan--
			return state;
				
			default: 
			return state;
			}
		}

export default CounterReducer;