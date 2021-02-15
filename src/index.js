import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

number.innerText = 0;

//action을 통해 countModifier 에게 메시지를 보낼 수 있음
const countModifier = (count = 0, action) => {
  if (action.type === "ADD") {
    return count + 1;
  } else if (action.type === "MINUS") {
    return count - 1;
  } else {
    return count;
  }
};

const countStore = createStore(countModifier);

const onChange = () => {
  number.innerText = countStore.getState();
};

//store에 있는 data가 변경될 때 마다 onChange를 출력함
countStore.subscribe(onChange);

//button에 action 붙이기
add.addEventListener("click", () => countStore.dispatch({ type: "ADD" }));
minus.addEventListener("click", () => countStore.dispatch({ type: "MINUS" }));
