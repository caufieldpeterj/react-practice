import React, { useState } from 'react';
// useState is a function from react
// all hooks start with use and need to be within function or component body
// components need to be uppercase


const UseStateBasics = () => {
  // pass in a default value to useState
  // once we invoke useState, we get an array with 2 values which is the value we pass into useState and a functiont that controls that value
  const [text, setText] = useState('random title')

  const handleClick = () => {
    if (text === 'random title') {
      setText('hello world');
    } else {
      setText('random title')
    }
  }
  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button className="btn" onClick={handleClick}>
        Change Title
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
