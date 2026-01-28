import { useEffect } from "react";
import styles from './about_us.module.css';

export const useScrollAnimationCards = () => {
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
      .${styles.left_cards}, 
      .${styles.right_cards}
    `);

    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, []);
};