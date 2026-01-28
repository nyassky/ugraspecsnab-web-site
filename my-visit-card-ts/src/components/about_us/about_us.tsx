import Header from "../header/header";
import Footer from "../footer/footer";
import styles from './about_us.module.css'
import photo from '/img/about_us/photo1_about_us.svg'
import frame25 from '/img/about_us/Frame 25.svg'
import frame26 from '/img/about_us/Frame 26.svg'
import frame27 from '/img/about_us/Frame 27.svg'
import frame28 from '/img/about_us/Frame 28.svg'
import info1 from '/img/about_us/info_about_us_part2.svg'
import info2 from '/img/about_us/info_about_us_part2_1.svg'
import { useScrollAnimationCards } from './useScrollAnimationCards'
function AboutUs() {
	useScrollAnimationCards();
	return(
		<div className={styles.container}>
			<Header />

			<main className={styles.main_container}>
				<div className={styles.photo_title}>
					<img src={photo} alt="" />
				</div>
				<div className={styles.main_info}>
					<div className={styles.left_column}>
						<h3>26 дек 2015</h3>
						<h3>12 сен 2018</h3>
						<h3>25 дек 2021</h3>
						<h3>12 окт 2024</h3>
					</div>
					<div className={styles.right_column}>
						<p>Начало в ХМАО с поставок оборудования<br /> “Роснефти”, “Газпрома” и “Транснефти”;</p>
						<p>Первый строительный проект: <br /> промышленные, коммерческие и частные<br /> объекты;</p>
						<p>Переезд в Санкт-Петербург и запуск новых<br /> направлений</p>
						<p>Разработка собственной огнестойкой<br /> кабельной линии (ОКЛ)</p>
					</div>
				</div>
				<div className={styles.part1}>
					<div className={styles.text_info}>
						<h3>1</h3>
						<p>Успех Юграспецснаб — это сильная команда и технологии собственной разработки </p>
					</div>
				</div>
				<div className={styles.cards}>
					<div className={styles.left_cards}>
						<img src={frame25} alt="" />
						<img src={frame27} alt="" />
					</div>
					<div className={styles.right_cards}>
						<img src={frame26} alt="" />
						<img src={frame28} alt="" />
					</div>
				</div>
				<div className={styles.part2}>
					<div className={styles.text_info}>
						<h3>2</h3>
						<p>Свой штат — гарантия качества</p>
					</div>
				</div>
				<div className={styles.part2_info}>
					<div className={styles.text_part2}>
						<p>Каждый специалист Юграспецснаб — это профессионал, прошедший строгий отбор и обучение. Мы работаем только с проверенными кадрами, чтобы обеспечить высочайший уровень исполнения проектов.</p>
					</div>
					<div className={styles.info_imgs_part2}>
						<img src={info1} alt="" />
						<img src={info2} alt="" />
					</div>
				</div>
				<div className={styles.marquee}>
					<h1>нас рекомендуют</h1>
				</div>
				<div className={styles.marqueeSeamless}>
					<div className={styles.marqueeContent}>
						<span>ООО “Сэтл Групп”</span>
						<span>ООО “Ланит-интеграция”</span>
						<span>АО “Северсталь”</span>
						<span>ООО “Мавис”</span>
						<span>ООО "Сэтл Групп"</span>
						<span>ООО "Ланит-интеграция"</span>
						<span>АО "Северсталь"</span>
						<span>ООО "Мавис"</span>
					</div>
				</div>
			</main>

			<Footer />
		</div>
	);
}

export default AboutUs;