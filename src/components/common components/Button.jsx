import React from "react";

const Button = ({ btncontent, btnDesign }) => {
  return <button className={btnDesign}> {btncontent || "Nei"}</button>;
};

export default Button;
