import Header from "../header/header";
import Footer from "../footer/footer";
import background from '/img/main_page/background_main_page.svg'
import logo from '/img/main_page/logo_main_page.svg'
import styles from '../../styles/main.module.css'
import arrow_button from '/img/main_page/arrow_button.svg'
import photo_about_us_1 from '/img/main_page/photo_about_us_1.svg'

function MainPage(){
	return(
		<div className={styles.container}>

			<img src={background} alt="" className={styles.backgroundImage}/>
			<Header />

			<main>
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
				<section className={styles.about_section}>
					<div className={styles.about_content}>
						<div className={styles.about_us_info}>
							<h1>о нас</h1>
							<p>Реализуем технически сложные<br/>
							объекты — быстро, качественно,<br/>
							в срок. На рынке с 2015 года. </p>
							<button className={styles.about_button}>О нас <img className={styles.arrow} src={arrow_button} alt="" /></button>
						</div>
						<div className={styles.about_image_container}>
							<img 
								className={styles.about_image}
								src={photo_about_us_1} 
								alt="" />
						</div>
					</div>
					<div className={styles.about_stats}>
						<div className={styles.statLine}>
							<span className={styles.statNumber}>{'>'}50</span>
							<span className={styles.statText}>завершённых объектов</span>
							
						</div>
						
						<div className={styles.statLine}>
							<span className={styles.statNumber}>{'>'}20</span>
							<span className={styles.statText}>постоянных заказчиков</span>
							
						</div>
						
						<div className={styles.statLine}>
							<span className={styles.statNumber}>3+ года</span>
							<span className={styles.statText}>стаж инженеров</span>
							
						</div>
						
						<div className={styles.statLine}>
							<span className={styles.statNumber}>от 3</span>
							<span className={styles.statText}>лет гарантия на работу</span>
							
						</div>
						
					</div>
				</section>
				
			</main>

			<Footer />
		</div>
	);
	
	
	
}
export default MainPage;