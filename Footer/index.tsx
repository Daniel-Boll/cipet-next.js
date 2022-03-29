import Image from 'next/image';
import styles from './styles.module.css';

const Footer = () => {
  return (
    <footer id="contact" className={styles.footer}>
      <span>©CIPET - PETComp</span>
      <div className={styles.socialMediaLinks}>
        <span>
          <Image
            src="/icons/github.svg"
            width={20}
            height={20}
            alt="github icon"
          />{" "}
          /matozinho
        </span>
        <span>
          <Image
            src="/icons/instagram.svg"
            width={20}
            height={20}
            alt="instagram icon"
          />{" "}
          @lima_felipi
        </span>
        <span>
          <Image
            src="/icons/facebook.svg"
            width={20}
            height={20}
            alt="facebook icon"
          />{" "}
          /Felipi Lima Matozinho
        </span>
      </div>
    </footer>
  );
};

export default Footer;
