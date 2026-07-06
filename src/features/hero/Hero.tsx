import { useEffect, useState } from 'react';
import { Skyline } from './Skyline';
import styles from './Hero.module.css';

export function Hero() {
  // Nella bozza la hero si rivela al mount, non allo scroll.
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.glow} />
      <div className={`${styles.content} reveal ${mounted ? 'is-visible' : ''}`}>
        <div className={styles.eyebrow}>
          <span className={styles.dot} />
          <span className={styles.eyebrowText}>Frontend Developer — Portfolio 2026</span>
        </div>
        <h1 className={styles.title}>
          Costruisco
          <br />
          interfacce
          <br />
          <span className={styles.titleAccent}>che funzionano.</span>
        </h1>
        <p className={styles.lede}>
          Sviluppo web front-end, tra sperimentazione e prodotti reali — dall'intelligenza
          artificiale applicata alla ricerca clinica, alla storia in 3D.
        </p>
        <div className={styles.actions}>
          <a href="#progetti" className={styles.primaryCta}>
            Guarda i progetti <span aria-hidden="true">→</span>
          </a>
          <a href="#contatti" className={styles.secondaryCta}>
            Contatti
          </a>
        </div>
      </div>

      <Skyline className={styles.skyline} />

      <div className={styles.scrollHint} aria-hidden="true">
        <span className={styles.scrollHintText}>Scroll</span>
        <div className={styles.scrollHintLine} />
      </div>
    </section>
  );
}
