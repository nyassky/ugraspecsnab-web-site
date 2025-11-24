import arrow_button from '/img/main_page/arrow_button.svg'
import photo_right from '/img/main_page/photo_right_section_3.svg'
import photo_left from '/img/main_page/photo_left_section_3.svg'
import styles from './section_3.module.css'
import { useScrollAnimation } from './useScrollAnimation'

function ThirdSection() {
  useScrollAnimation();

  return (
    <section className={styles.third_section}>
      {/* Десктопная версия */}
      <div className={styles.desktop_version}>
        <div className={styles.left_column}>
          <div className={styles.title}>
            <h1>Реализованные <br></br>проекты</h1>
          </div>
          <div className={styles.text}>
            <p>Проекты под ключ. Гарантия на все <br></br>выполненные работы.</p>
          </div>
          <div className={styles.photo_left}>
            <img src={photo_left} alt="" />
          </div>
        </div>
        <div className={styles.right_column}>
          <div className={styles.photo_right}>
            <img src={photo_right} alt="" />
          </div>
          <button className={styles.about_button}>
            Смотреть
            <img className={styles.arrow} src={arrow_button} alt="" />
          </button>
        </div>
      </div>

      {/* Мобильная версия */}
      <div className={styles.mobile_version}>
        <div className={styles.header_row}>
          <div className={styles.title}>
            <h1>Реализованные <br></br>проекты</h1>
          </div>
          <button className={styles.about_button}>
            Смотреть
            <img className={styles.arrow} src={arrow_button} alt="" />
          </button>
        </div>
        <div className={styles.images_row}>
          <div className={styles.photo_left}>
            <img src={photo_left} alt="" />
          </div>
          <div className={styles.photo_right}>
            <img src={photo_right} alt="" />
          </div>
        </div>
        {/* Контейнер для кнопки под картинками */}
        <div className={styles.button_container}>
          <button className={styles.about_button}>
            Смотреть
            <img className={styles.arrow} src={arrow_button} alt="" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default ThirdSection;