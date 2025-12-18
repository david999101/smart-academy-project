// export default function Footer() {}
import Navbar from "../navbar/Navbar";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      this is footer!
      <Navbar />
    </footer>
  );
};

export default Footer;
