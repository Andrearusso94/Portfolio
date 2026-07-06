import styles from './Nav.module.css';

export function Nav() {
  return (
    <nav className={styles.nav} aria-label="Principale">
      <div className={styles.logo}>
        FE<span className={styles.logoDot}>.</span>
      </div>
      <div className={styles.links}>
        <a href="#progetti" className={styles.link}>
          Progetti
        </a>
        <a href="#about" className={styles.link}>
          About
        </a>
        <a href="#contatti" className={styles.cta}>
          Contattami
        </a>
      </div>
    </nav>
  );
}
