import logo from '/img/main_page/logo_main_page.svg'
import styles from './section_1.module.css'

function FirstSection() {
	return(
		<section className={styles.content}>
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
		</section>
	);
}

export default FirstSection;