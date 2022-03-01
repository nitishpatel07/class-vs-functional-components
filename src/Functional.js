import React from "react";
import Number from "./number";

const Functional = () => {
  const [number, setNumber] = React.useState(0);
  const [show, setShow] = React.useState(true);

  React.useEffect(() => {
    console.log("component is mounted");
  }, []);

  React.useEffect(() => {
    console.log("component is updated");
  }, [number]);
  return (
    <div>
      <button onClick={() => setNumber(number + 1)}>increase</button>
      <button onClick={() => setNumber(number - 1)}>decrease</button>
      <button onClick={() => setShow(!show)}>{show ? "remove" : "show"}</button>
      {show ? <Number num={number} show={show} /> : null}
    </div>
  );
};

export default Functional;
