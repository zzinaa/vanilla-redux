import { React, useState } from "react";
import { connect } from "react-redux";

function Home({ toDos }) {
  const [text, setText] = useState("");
  function onChange(e) {
    setText(e.target.value);
  }
  function onSubmit(e) {
    e.preventDefault();
    setText("");
  }
  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange}></input>
        <button>Add</button>
      </form>
      <ul>{JSON.stringify(toDos)}</ul>
    </>
  );
}

//여기서 return 하는 모든 것들은 home의 props 로 전달됨
//state를 toDos 라는 이름으로 Home component의 props로 전달함
function mapStateToProps(state) {
  return { toDos: state };
}

export default connect(mapStateToProps)(Home);
