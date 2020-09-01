import React from "react";
import "./boxes.css";

export const Box = (props) => {
  const handleClick = (e) => {
    props.onClick(e.target.value);
  };

  return (
    <div className='box' onClick={handleClick} style={{ background: `${props.color}` }}>
      box
    </div>
  );
};
