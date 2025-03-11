import React, { useRef } from "react";

const Body = () => {
  const numberA = 1;
  const numberB = 1;
  const strA = "Hello";
  const strB = "World";
  const boolA = true;
  const boolB = false;

  const objA = {
    a: 1,
    b: 2,
  };

  return (
    <React.Fragment>
      <h1>Body</h1>
      <h2>{strA + strB}</h2>
      <h2>{String(boolA || boolB)}</h2>
      <h1>{objA.b}</h1>
    </React.Fragment>
  );
};

export default Body;
