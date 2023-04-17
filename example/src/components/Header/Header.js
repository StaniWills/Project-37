import styles from './Header.module.css'

function Header(){
    return(
        <div className={styles.header_wrapper}>
            <div className={styles.logo}></div>
            <div className={styles.menu_wrapper}>
                <a href='/'>Home</a>
                <a href='/goods'>Goods</a>
                <a href='/about'>About</a>
                <a href='/contacts'>Contacts</a>
            </div>
        </div>
    )
}

export default Header