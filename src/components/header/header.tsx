import logo from "/img/header/logo.svg"
import burger_menu from "/img/header/burger_menu.svg"
import close_burger_menu from "/img/header/close_burger_menu.svg"
import styles from '../../styles/header.module.css'
import {Link, NavLink} from 'react-router-dom'
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
					{isMenuOpen ? <li><NavLink to="/">Главная</NavLink></li> : ''}
					<li><NavLink to={'/about_us'}>О нас</NavLink></li>
					<li><NavLink to={'/projects'}>Проекты</NavLink></li>
					<li><NavLink to={'/our_tech'}>Собственные Технологии</NavLink></li>
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