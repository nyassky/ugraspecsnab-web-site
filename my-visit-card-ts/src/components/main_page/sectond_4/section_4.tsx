import last_pic from '/img/main_page/last_pic.svg'
import arrow_button from '/img/main_page/arrow_button.svg'
import styles from './section_4.module.css'
import { useScrollAnimation } from './useScrollAnimation_2'
function FourthSection() {
	useScrollAnimation();
	return(
		<div className={styles.container}>
			<div className={styles.main_text}>
				<h1 className={styles.our_tech_text}>Собственные технологии</h1>
				<h1 className={styles.ugraspecsnab_text}>юграспецснаб</h1>
			</div>
			<div className={styles.main_part}>
				<img className={styles.main_img} src={last_pic} alt="" />
				<button className={styles.about_button}>
            		Подробнее
            		<img className={styles.arrow} src={arrow_button} alt="" />
          		</button>
			</div>
		</div>
	);
}

export default FourthSection;