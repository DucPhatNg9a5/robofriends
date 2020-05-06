import React from "react";

const Scroll = (props) => {
  return (<div style={{overflow: "auto", border: "2px solid black", height: "565px"}}>{props.children}</div>);
}

export default Scroll;
