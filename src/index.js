import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

//data를 modify하는 함수
//어떤 값을 return 하더라도 state로서 store에 저장됨
const countModifier = (count = 0) => {
  console.log(count); // 0
  return count;
};

//data를 저장하는 공간, countStore에는 4가지의 function 있음
const countStore = createStore(countModifier);
console.log(countStore.getState()); // 0
