import styles from '../../styles/footer.module.css'
import email_footer from '/img/footer/email_footer.svg'
import phone_footer from '/img/footer/phone_footer.svg'
function Footer() {
	return(
		<footer className={styles.footer}>
			<div className={styles.footer__content}>
				<img src={email_footer} alt="email" />
				<p>ugraspec@gmail.com</p>
			</div>
			<div className={styles.footer__content}>
				<img src={phone_footer} alt="phone" />
				<p>+7 (921) - 793 - 33 - 33</p>
			</div>
		</footer>
	);
}

export default Footer;