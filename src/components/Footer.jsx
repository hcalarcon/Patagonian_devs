import styles from "./styles/footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faXTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={styles.mountains}
        viewBox="0 0 1000 320"
        preserveAspectRatio="xMidYMid slice"
        fillOpacity={0.9}
      >
        <path
          fill="#273036"
          d="M0,32L13.3,74.7C26.7,117,53,203,80,218.7C106.7,235,133,181,160,149.3C186.7,117,213,107,240,117.3C266.7,128,293,160,320,170.7C346.7,181,373,171,400,165.3C426.7,160,453,160,480,186.7C506.7,213,533,267,560,293.3C586.7,320,613,320,640,320C666.7,320,693,320,720,314.7C746.7,309,773,299,800,293.3C826.7,288,853,288,880,256C906.7,224,933,160,960,165.3C986.7,171,1013,245,1040,229.3C1066.7,213,1093,107,1120,64C1146.7,21,1173,43,1200,85.3C1226.7,128,1253,192,1280,181.3C1306.7,171,1333,85,1360,48C1386.7,11,1413,21,1427,26.7L1440,32L1440,320L1426.7,320C1413.3,320,1387,320,1360,320C1333.3,320,1307,320,1280,320C1253.3,320,1227,320,1200,320C1173.3,320,1147,320,1120,320C1093.3,320,1067,320,1040,320C1013.3,320,987,320,960,320C933.3,320,907,320,880,320C853.3,320,827,320,800,320C773.3,320,747,320,720,320C693.3,320,667,320,640,320C613.3,320,587,320,560,320C533.3,320,507,320,480,320C453.3,320,427,320,400,320C373.3,320,347,320,320,320C293.3,320,267,320,240,320C213.3,320,187,320,160,320C133.3,320,107,320,80,320C53.3,320,27,320,13,320L0,320Z"
        ></path>
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 00 1000 320"
        className={styles.mountains}
        preserveAspectRatio="xMidYMid slice"
      >
        <path
          fillOpacity="0.8"
          d="M0,224L180,96L360,128L540,192L720,160L900,128L1080,224L1260,128L1440,160L1440,320L1260,320L1080,320L900,320L720,320L540,320L360,320L180,320L0,320Z"
        ></path>
      </svg>

      <section className={styles.section}>
        <img src="./logo.svg" alt="" />
        <p>Developing the future</p>
      </section>
      <section className={styles.section}>
        <h4>Contacto</h4>
        <p>Email: hernaldo.alar@gmail.com</p>
        <p>Teléfono: +54 364 427 7105</p>
        <address>San Martín de los Andes</address>
        <address>Patagonia - Argentina</address>
      </section>
      <section className={styles.section}>
        <article>
          <p>&copy; 2024 PatagonianDevs</p>
          <p>Todos los derechos reservados</p>
        </article>

        <article>
          <h4>Seguinos</h4>
          <ul className={styles.socialLinks}>
            <li>
              <a href="https://www.facebook.com">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com">
                <FontAwesomeIcon icon={faXTwitter} size="2x" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
            </li>
          </ul>
        </article>
      </section>
    </footer>
  );
};

export default Footer;
