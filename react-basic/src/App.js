// 根组件
// app->index.js
import { useRef, useState, useContext, createContext } from "react";
import "./index.css";
// const count = 100;

const islogin = false;
const articletype = 1;
const msgctx = createContext();
const handleclickevent = (name, e) => {
  console.log("clicked", name, e);
};
const style = {
  color: "red",
  fontSize: "50px",
};
function getName() {
  return "jack";
}
function getarticle() {
  if (articletype === 0) {
    return <div>no pic</div>;
  } else if (articletype === 1) {
    return <div>one pic</div>;
  }
}
// 组件
function Button() {
  return <button>click me!</button>;
}
function Son(props) {
  return (
    <div>
      this is son {props.name} {props.children}
    </div>
  );
}
function Son2({ ongetsonmsg }) {
  return (
    <div>
      this is son
      <button onClick={() => ongetsonmsg("son msg")}>sent</button>
    </div>
  );
}
function A() {
  return (
    <div>
      A comp
      <B></B>
    </div>
  );
}
function B() {
  const msg = useContext(msgctx);
  return <div>B comp,{msg}</div>;
}

function App() {
  // 状态变量，count，会影响视图，usestate
  // 直接修改无法更新视图
  const list = [
    { id: 1001, name: "vue" },
    { id: 1002, name: "react" },
  ];
  const [form, setform] = useState({ name: "jack" });
  const changeform = () => {
    setform({
      // to do
      ...form,
      name: "jong",
    });
  };
  const [count, setCount] = useState(-1);
  const handleclick = (e) => {
    console.log("clicked", e);
    setCount(count + 1);
  };
  const inputref = useRef(null);
  const showdom = () => {
    console.log(inputref.current);
  };
  const name = "this is app name";
  const [msg, setmsg] = useState("");
  const getmsg = (msg) => {
    console.log(msg);
    setmsg(msg);
  };
  return (
    <div className="App">
      this is app shit
      {count}
      {getName()}
      <div style={{ color: "green" }}>hello</div>
      <ul>
        {list.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      {/* 二元运算 */}
      {!islogin && <span className="foo">this is a span</span>}
      {/* 三元运算 */}
      {islogin ? <span style={style}>logged in</span> : <span style={style}>logged out</span>}
      {/*  */}
      {getarticle()}
      {/* 事件绑定或传参数或都要 */}
      <button onClick={handleclick}>click me</button>
      <button onClick={() => handleclick("dick")}>{count}</button>
      <button onClick={(e) => handleclickevent("dick", e)}>click me</button>
      {/* 组件自闭和成对 */}
      <Button />
      <Button></Button>
      <button onClick={changeform}>{form.name}</button>
      <input value={count} onChange={(e) => setCount(e.target.value)} type="text" ref={inputref}></input>
      <button onClick={showdom}>access dom</button>
      {/* 父to子通信 */}
      <Son name={name}>haha</Son>
      {/* 子to父 */}
      {msg}
      <Son2 ongetsonmsg={getmsg}></Son2>
      <msgctx.Provider value={msg}>
        this is app
        <A></A>
      </msgctx.Provider>
    </div>
  );
}

export default App;
