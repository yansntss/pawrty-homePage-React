import styles from "./styles.module.scss";

import logo from "../../assets/Logo.svg";
import aranha from "../../assets/Aranha.png";
import teiaHeader from "../../assets/TeiaHeader.svg";

export function Header() {
  return (
    <header className={styles.header}>
      <img className={styles.logo} src={logo} alt="logo" />
      <img className={styles.aranha} src={aranha} alt="aranha" />

      <nav className={styles.list}>
        <ul>
          <li>Pawrty</li>
          <li>Pricing</li>
          <li>About us</li>
          <li>Reviews</li>
        </ul>
      </nav>

      <section className={styles.groupRigth}>
        <button>Reserve</button>
        <img src={teiaHeader} alt="teia" className={styles.teiaHeader} />
      </section>
    </header>
  );
}
