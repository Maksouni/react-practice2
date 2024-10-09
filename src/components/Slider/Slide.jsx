/* eslint-disable react/prop-types */
import './styles.scss'

export default function Slide({startup, title, text}){
    return(
        <div className="slide">
            <div className="startup">{startup}</div>
            <div className="title">{title}</div>
            <div className="text">{text}</div>
        </div>
    )
}