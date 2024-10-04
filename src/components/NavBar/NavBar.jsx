import styles from './NavBar.module.css'

export default function NavBar(){
    return(
        <ul className={styles.navbar}>
            <li>Home</li>
            <li>Features</li>
            <li>Pricing</li>
            <li>Blog</li>
            <li>Icon</li>
            <li>lang</li>
        </ul>
    )
}