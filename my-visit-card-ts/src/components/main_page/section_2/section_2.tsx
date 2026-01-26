import { NavLink } from 'react-router-dom';
import styles from './section_2.module.css'
import arrow_button from '/img/main_page/arrow_button.svg'
import photo_about_us_1 from '/img/main_page/photo_about_us_1.svg'
import photo_about_us_2 from '/img/main_page/photo_about_us_2.svg'

function SecondSection() {
	return(
		<section className={styles.about_section}>
			<div className={styles.about_title_mobile}>
				<h1>о нас</h1>
			</div>
			<div className={styles.about_content}>
				<div className={styles.about_image_container}>
						<img 
							className={`${styles.about_image} ${styles.mobileImage}`}
							src={photo_about_us_2} 
							alt="" />
				</div>
				<div className={styles.about_us_info}>
					<h1>о нас</h1>
					<p>Реализуем технически сложные<br/>
						объекты — быстро, качественно,<br/>
						в срок. На рынке с 2015 года. </p>
					<NavLink to="/about_us" className={styles.about_button}>О Нас <img className={styles.arrow} src={arrow_button} alt="" /></NavLink>
				</div>
			</div>
			<div className={styles.right_column}>
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
				<div className={styles.about_image_container}>
						<img 
							className={`${styles.about_image} ${styles.desktopImage}`}
							src={photo_about_us_1} 
							alt="" />
				</div>
			</div>
			
		</section>
	);
}
export default SecondSection;