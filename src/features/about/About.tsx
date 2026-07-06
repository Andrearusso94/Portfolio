import { useReveal } from '../../hooks/useReveal';
import { skills } from '../../data/projects';
import styles from './About.module.css';

export function About() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="about" className={styles.section}>
      <div ref={ref} className={`${styles.inner} reveal ${visible ? 'is-visible' : ''}`}>
        <div className={styles.photo}>
          <svg className={styles.photoPattern} aria-hidden="true">
            <defs>
              <pattern
                id="stripe-about"
                width="16"
                height="16"
                patternTransform="rotate(45)"
                patternUnits="userSpaceOnUse"
              >
                <rect width="8" height="16" fill="rgba(59,130,246,0.06)" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#stripe-about)" />
          </svg>
          <span className={styles.photoLabel}>foto profilo</span>
        </div>
        <div>
          <div className={styles.kicker}>02 — About</div>
          <h2 className={styles.title}>
            Frontend developer,
            <br />
            mentalità da builder.
          </h2>
          <p className={styles.text}>
            Mi occupo di interfacce web, dal prototipo all'interfaccia in produzione. Mi piace
            lavorare su prodotti dove l'AI incontra esperienze reali — ricerca clinica, editoria,
            didattica — e su come renderli semplici da usare.
          </p>
          <div className={styles.skills}>
            {skills.map((s) => (
              <span key={s} className={styles.skill}>
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
