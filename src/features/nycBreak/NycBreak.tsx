import styles from './NycBreak.module.css';

/**
 * Interludio visivo NYC (stile gotham/noir). Al momento è un placeholder
 * pattern + testo, come nella bozza: la foto reale arriverà con una issue
 * dedicata agli asset.
 */
export function NycBreak() {
  return (
    <section className={styles.break} aria-label="Interludio visivo NYC">
      <svg className={styles.pattern} aria-hidden="true">
        <defs>
          <pattern
            id="stripe-gotham"
            width="20"
            height="20"
            patternTransform="rotate(45)"
            patternUnits="userSpaceOnUse"
          >
            <rect width="10" height="20" fill="rgba(59,130,246,0.05)" />
          </pattern>
          <linearGradient id="gothamVignette" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(5,5,7,0.4)" />
            <stop offset="100%" stopColor="rgba(5,5,7,0.95)" />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="#0a0d14" />
        <rect width="100%" height="100%" fill="url(#stripe-gotham)" />
        <rect width="100%" height="100%" fill="url(#gothamVignette)" />
      </svg>
      <div className={styles.placeholderWrap}>
        <span className={styles.placeholderText}>
          {'// placeholder — foto NYC, stile gotham/noir, bianco e nero o blu scuro'}
        </span>
      </div>
    </section>
  );
}
