/* eslint-disable react/prop-types */

import { useState } from "react";
import styles from "./Button.module.css";

export default function Button(props) {
  const [isHovered, setIsHovered] = useState(false);

  const buttonStyle = {
    transform: isHovered ? 'scale(1.1)' : 'scale(1) translateY(0)',
    backgroundColor: isHovered ? "#FFFFFF4D" : props.color || "#482BE7",
    transition: 'transform 0.3s ease, background-color 0.3s ease',
    width: props.width || "auto",
    borderWidth: props.border || "0",
  };

  const handleMouseEnter = () =>{
    setIsHovered(true)
  }

  const handleMouseLeave = () =>{
    setIsHovered(false)
  }

  return (
    <button
      className={styles.button}
      style={buttonStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {props.text || 'Button'}
    </button>
  );
}
