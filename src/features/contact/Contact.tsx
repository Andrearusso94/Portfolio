import { useReveal } from '../../hooks/useReveal';
import { ContactForm } from './ContactForm';
import styles from './Contact.module.css';

const CONTACT_EMAIL = 'andrea.r.4845@gmail.com';

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
        <ContactForm />
        <div className={styles.socials}>
          <a
            href="https://github.com/Andrearusso94"
            className={styles.socialLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/andrea-russo-8570a122b/"
            className={styles.socialLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
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
