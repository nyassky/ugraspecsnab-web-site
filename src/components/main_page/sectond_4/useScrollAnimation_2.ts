import { useEffect } from "react";
import styles from './section_4.module.css';

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

    const elements = document.querySelectorAll(`
      .${styles.our_tech_text}, 
      .${styles.ugraspecsnab_text}, 
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