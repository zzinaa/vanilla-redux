import { createStore } from "redux";
import { configureStore, createAction, createReducer } from "@reduxjs/toolkit";

const addToDo = createAction("ADD");
const deleteToDo = createAction("DELETE");

//위의 것을 아래처럼 바꿀 수 있음(switch, case 없이)
//아래 처럼 쓰면 state를 수정(mutate) 하기 쉽게 만들어줌
const reducer = createReducer([], {
  [addToDo]: (state, action) => {
    state.push({ text: action.payload, id: Date.now() }); //mutate
  }, //return 하지 않음 (방법 1. return 하지 않고 state를 mutate 한다)
  [deleteToDo]: (state, action) =>
    state.filter((toDo) => toDo.id !== action.payload),
  //return 함 (방법 2. return 하여 state를 새로 만든다 - 원래 toolkit 쓰기 전처럼)
});

const store = configureStore({ reducer });

export const actionCreators = {
  addToDo,
  deleteToDo,
};

export default store;
