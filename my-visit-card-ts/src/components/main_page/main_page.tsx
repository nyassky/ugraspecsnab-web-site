import Header from "../header/header";
import Footer from "../footer/footer";
import background from '/img/main_page/background_main_page.svg'
import logo from '/img/main_page/logo_main_page.svg'
import styles from '../../styles/main.module.css'

function MainPage(){
	return(
		<div className={styles.container}>

			<img src={background} alt="" className={styles.backgroundImage}/>
			<Header />

			<main className={styles.content}>
				<div className={styles.left_column}>
					<p className={styles.title}>Торгово-сервисная компания</p>
					<h1>ЮГРАСПЕЦСНАБ</h1>
					<p className={`${styles.text} ${styles.mobileText}`}>
						Соблюдаем сроки, даём<br/>
						гарантии, сохраняем<br/>
						прозрачность.
					</p>
				</div>
				<div className={styles.right_column}>
					<img src={logo} alt="ЮГРАСПЕЦСНАБ" className={styles.logo}/>
					<p className={`${styles.text} ${styles.desktopText}`}>
						Соблюдаем сроки, даём<br/>
						гарантии, сохраняем<br/>
						прозрачность.
					</p>
				</div>
			</main>

			<Footer />
		</div>
	);
	
	
	
}
export default MainPage;