/* eslint-disable react/prop-types */
 
import { useState } from 'react'
import styles from './NavBar.module.css'

export default function NavBar(){
    const [selectedLink, setSelectedLink] = useState(null);

    const handleClick = (label) =>{
        setSelectedLink(label);
    };

    return(
        <ul className={styles.navbar}>
            <li>
                <Link
                    label='Home'
                    href=''
                    isSelected={selectedLink === 'Home'}
                    onClick={(e) => {
                        e.preventDefault();
                        handleClick('Home');
                    }}
                />
            </li>
            <li>
                <Link
                    label='Features'
                    href=''
                    isSelected={selectedLink === 'Features'}
                    onClick={(e) => {
                        e.preventDefault();
                        handleClick('Features');
                    }}
                />
            </li>
            <li>
            <Link
                    label='Pricing'
                    href=''
                    isSelected={selectedLink === 'Pricing'}
                    onClick={(e) => {
                        e.preventDefault();
                        handleClick('Pricing');
                    }}
                />
            </li>
            <li>
            <Link
                    label='Blog'
                    href=''
                    isSelected={selectedLink === 'Blog'}
                    onClick={(e) => {
                        e.preventDefault();
                        handleClick('Blog');
                    }}
                />
            </li>
            <li>

            </li>
            <li>

            </li>
        </ul>
    )
}


function Link({ label, href, isSelected, onClick }){
    return(
        <a 
            href={href}
            className={`${styles.link} ${isSelected ? styles.selected : ''}`}
            onClick={onClick}
        >
            {label}
        </a>
    )
}