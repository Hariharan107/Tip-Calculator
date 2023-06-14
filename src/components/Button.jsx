import React from "react";

// eslint-disable-next-line react/prop-types
const Button = ({ children,onClick }) => {
  return <button className='button' onClick={onClick}>{children}</button>;
};

export default Button;
