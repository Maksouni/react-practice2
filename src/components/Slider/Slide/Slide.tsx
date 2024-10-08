import React from "react"
import './styles.scss'

type SlideProps = {
    startup: string,
    title: string,
    text: string
}

export default function Slide({startup, title, text}: SlideProps){
    return(
        <div className="slide">
            <div className="startup">{startup}</div>
            <div className="title">{title}</div>
            <div className="text">{text}</div>
        </div>
    )
}

