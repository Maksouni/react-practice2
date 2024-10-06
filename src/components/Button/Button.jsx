/* eslint-disable react/prop-types */

import styles from "./Button.module.css";

export default function Button(props) {
  const buttonStyle = {
    width: props.width || "auto",
    backgroundColor: props.color || "#482BE7",
    borderWidth: props.border || "0",
  };

  return (
    <button className={styles.button} style={buttonStyle}>
      {props.text || 'Button'}
    </button>
  );
}
