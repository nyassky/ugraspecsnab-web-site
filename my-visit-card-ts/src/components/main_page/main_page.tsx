import Header from "../header/header";
import Footer from "../footer/footer";
import FirstSection from "./section_1/section_1";
import SecondSection from "./section_2/section_2";
import background from '/img/main_page/background_main_page.svg'
import background_2 from '/img/main_page/background_main_page_2.svg'
import styles from '../../styles/main.module.css'
import ThirdSection from "./section_3/section_3";


function MainPage(){
	return(
		<div className={styles.container}>

			<img src={background} alt="" className={styles.backgroundImage}/>
			<Header />

			<main>
				<FirstSection />
				
				<SecondSection />

				<ThirdSection />
				
				
			</main>
			<img src={background_2} alt="" className={styles.backgroundImage_2}/>
			<Footer />
		</div>
	);
	
	
	
}
export default MainPage;