import styles from './our_tech.module.css'
import Header from '../header/header';
import Footer from '../footer/footer';
import logo from '/img/our_tech/logo.svg'
import info from '/img/our_tech/info.svg'
import table from '/img/our_tech/table.svg'
function OurTech() {
	return (
		<div className={styles.container}>
			<Header />
			<main className={styles.main_container}>
				<div className={styles.title}>
					<h1>Огнестойкая кабельная линия (ОКЛ)</h1>
					
				</div>
				<div className={styles.logo_text}>
					<img src={logo} alt="" />
					<div className={styles.text_info}>
						<div className={styles.group_1}>
							<h3>Краткое описание</h3>
							<p>Огнестойкие кабельные линии (ОКЛ) — это готовое решение для защиты жизней при пожаре. Система включает кабель, крепёж и комплектующие, которые выдерживают высокую температуру и продолжают подавать питание на противопожарные системы.</p>
						</div>
						<div className={styles.group_2}>
							<h3>Пример применения</h3>
							<p>ОКЛ-ЮС-О — монтаж открытым способом. Кабель крепится к несущей поверхности с шагом до 500 мм. Подходит для одиночной и групповой прокладки. Проходки через стены заделываются пеной или мастикой. Разделка кабеля — через огнестойкие коробки или напрямую.</p>
						</div>
					</div>
					
				</div>
				<div className={styles.section_2}>
					<h1>Преимущества <br></br>перед аналогами</h1>
					<div className={styles.info_sec2}>
						<img src={info} alt="" />
						<div className={styles.notepad_text_sec2}>
							<p>1. Гибкость — выбирайте компоненты под свой бюджет <br />
							2. Выбор — десятки поставщиков и типов кабелей<br></br>
							3. Надёжность — огнестойкость до 180 минут<br></br>
							4. Экономия — сокращение затрат без потери качеств<br></br>
							5. Под ключ — готовое решение с сертификацией</p>
						</div>
						
					</div>
				</div>
				<div className={styles.table}>
					<img src={table} alt="" />
				</div>
			</main>
			<Footer />
		</div>
	);
}

export default OurTech;