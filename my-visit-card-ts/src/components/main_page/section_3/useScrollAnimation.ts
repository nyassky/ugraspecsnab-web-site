import { useEffect } from "react";
import styles from './section_3.module.css';

export const useScrollAnimation = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = entry.target;
            const delayAttr = element.getAttribute('data-delay');
            const delay = delayAttr ? parseInt(delayAttr) : 0;
            
            setTimeout(() => {
              element.classList.add(styles.animated);
            }, delay);
            
            observer.unobserve(element);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -10% 0px',
      }
    );

    // Наблюдаем за элементами
    const elements = document.querySelectorAll(`
      .${styles.title}, 
      .${styles.text}, 
      .${styles.photo_left}, 
      .${styles.photo_right}, 
      .${styles.about_button}
    `);

    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, []);
};