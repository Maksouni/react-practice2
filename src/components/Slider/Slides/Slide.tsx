import React from "react";
import '../styles.scss'

export default function Slide({ data: { startup, title, text } }){
    return(
        <div className="slide">
            <div className="slide startup">{startup}</div>
            <div className="slide title">{title}</div>
            <div className="slide text">{text}</div>
        </div>
    )
}