import { useReveal } from '../../hooks/useReveal';
import styles from './Contact.module.css';

/** Email segnaposto: verrà sostituita con quella reale in una issue dedicata. */
const CONTACT_EMAIL = 'hello@nyc.dev';

export function Contact() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="contatti" className={styles.section}>
      <div className={styles.glow} />
      <div ref={ref} className={`${styles.inner} reveal ${visible ? 'is-visible' : ''}`}>
        <div className={styles.kicker}>03 — Contatti</div>
        <h2 className={styles.title}>
          Parliamo del
          <br />
          prossimo progetto.
        </h2>
        <p className={styles.subtitle}>Sempre aperto a nuove collaborazioni e idee.</p>
        <a href={`mailto:${CONTACT_EMAIL}`} className={styles.emailCta}>
          {CONTACT_EMAIL} <span aria-hidden="true">↗</span>
        </a>
        <div className={styles.socials}>
          <a href="#" className={styles.socialLink}>
            GitHub
          </a>
          <a href="#" className={styles.socialLink}>
            LinkedIn
          </a>
          <a href="#" className={styles.socialLink}>
            Twitter / X
          </a>
        </div>
      </div>

      <footer className={styles.footer}>
        <span className={styles.footerText}>© 2026 — Frontend Developer</span>
        <span className={styles.footerBrand}>DESIGN &amp; DEVELOPMENT</span>
      </footer>
    </section>
  );
}
