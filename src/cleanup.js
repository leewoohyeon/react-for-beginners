import { useState, useEffect } from "react";

// cleanUp function 공부하기
// component가 삭제될 떄 사용됨

function Hello() {


  // useEffect(()=> {
  //   console.log("create");
  //   return() => console.log("destroyed");
  // },[]);
  // useEffect(() => {
  //   return <h1>hello!</h1>;
  // });

    // function effectFn() {
  //   console.log("created");
  // }
  // useEffect(effectFn, []);
  // return <h1>hello!</h1>;

  // function byFn() {
  //   console.log("bye");
  // }

  // function hiFn() {
  //   console.log("created");
  //   return byFn;
  // }

  // useEffect(hiFn, []);
  // return (
  //   <h1>Hello</h1>
  // );

  // useEffect(function() {
  //   console.log("hi");
  //   return function() {
  //     console.log("bye");
  //   };
  // },[]);

  useEffect(()=> {
    console.log("hi");
    return() => console.log("bye");
  },[]);
return(
  <h1>Hello</h1>
);
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);

  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
