import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  // useEffect는 argument(독립변수) + dependency(의존, 지켜보는것)로 이루어짐


  // []빈배열 = 처음 실행(렌더)시, 딱 한번만 실행되고, 2번은 실행되지 않음
  useEffect(() => {
    console.log("I run only once.");
  }, []);

  // 처음 실행(렌더)시, 그리고 [keyword]의 값이 변할 때
  // useEffect(()=> {
  //   console.log("I run when 'keyword' changes.");
  // }, [keyword]);

  // 처음 실행(렌더)시, 그리고 [counter]의 값이 변할 때
  // useEffect (()=> {
  //   console.log("I run when 'counter' changes");
  // }, [counter]);

  // 처음 실행(렌더)시, 그리고 [keyword]값이 변하거나, [counter]의 값이 변할 때
  useEffect(() => {
    console.log("I run when 'keyword' & 'counter' changes.");
  }, [keyword, counter]);

  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="search here.."
      />

      <h1 className={styles.title}>{counter}</h1>
      {/* <Button text={"continue"}/> */}
      <button onClick={onClick}>click me!</button>
    </div>
  );
}

export default App;
