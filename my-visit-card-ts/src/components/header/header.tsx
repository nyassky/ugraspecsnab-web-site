import logo from "/img/header/logo.svg"
import burger_menu from "/img/header/burger_menu.svg"
import close_burger_menu from "/img/header/close_burger_menu.svg"
import styles from '../../styles/header.module.css'
import {Link} from 'react-router-dom'
import {useState} from 'react'
function Header(){
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	return(
		<header className={styles.header}>
			<div className={styles.header__content}>
				<Link to={'/'}>
					<img src={logo} alt="ЮГРАСПЕЦСНАБ" className={styles.logo}/>
				</Link>
			</div>
			<button
				className={styles.burger}
				onClick={() => setIsMenuOpen(!isMenuOpen)}
			>
				<img 
					src={isMenuOpen ? close_burger_menu : burger_menu} 
					alt={isMenuOpen ? "Close" : "Menu"} 
					className={styles.burgerIcon}
				/>
			</button>
			
			<nav className={`${styles.header__nav} ${isMenuOpen ? styles.navOpen : ''}`}>
				<ul>
					{isMenuOpen ? <li><a href="#">Главная</a></li> : ''}
					<li><a href="#">О нас</a></li>
					<li><a href="#">Проекты</a></li>
					<li><a href="#">Собственные Технологии</a></li>
				</ul>
			</nav>
			{isMenuOpen && (
				<div
					className={`${styles.overlay} ${isMenuOpen ? styles.active : ''}`}
					onClick={() => setIsMenuOpen(false)}
				/>
			)}
		</header>
	);
}
export default Header;