import styles from './project_card.module.css'

interface Card {
	id: number,
	title: string,
	first_img: string,
	second_img: string,
	type_of_work: string,
	deadline: string,
	text: string
}
function ProjectCard({title, first_img, second_img, type_of_work, deadline, text}: Card) {
	return (
		<div className={styles.container}>
			<div className={styles.imgs_container} data-deadline={deadline}>
				<img src={first_img} alt="" className={styles.first_img}/>
				<img src={second_img} alt="" className={styles.second_img}/>
			</div>

			<div className={styles.all_info_container}>
				<h3>{title}</h3>

				<div className={styles.important_info}>
					<div className={styles.row}>
						<span className={styles.label}>Вид работ</span>
						<span className={styles.value}>{type_of_work}</span>
					</div>
					<div className={styles.row}>
						<span className={styles.label}>Сроки выполнения</span>
						<span className={styles.value}>{deadline}</span>
					</div>
				</div>

				<div className={styles.text_info}>
					<p>{text}</p>
				</div>
			</div>
		</div>

	);

}
export default ProjectCard;