import { useReveal } from '../../hooks/useReveal';
import { projects } from '../../data/projects';
import { ProjectCard } from './ProjectCard';
import styles from './Projects.module.css';

export function Projects() {
  const header = useReveal<HTMLDivElement>();

  return (
    <section id="progetti" className={styles.section}>
      <div
        ref={header.ref}
        className={`${styles.header} reveal ${header.visible ? 'is-visible' : ''}`}
      >
        <div className={styles.kicker}>01 — Progetti</div>
        <h2 className={styles.title}>Selected Work</h2>
        <p className={styles.subtitle}>
          Un mix di prodotti reali e progetti sperimentali, dall'AI applicata al pubblico alla
          didattica.
        </p>
      </div>

      <div className={styles.grid}>
        {projects.map((p, i) => (
          <ProjectCard key={p.key} project={p} index={i} />
        ))}
      </div>
    </section>
  );
}
