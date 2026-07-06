import type { CSSProperties } from 'react';
import { useReveal } from '../../hooks/useReveal';
import type { Project } from '../../data/projects';
import styles from './Projects.module.css';

const BAND_CLASS: Record<Project['bandToken'], string> = {
  a: styles.bandA,
  b: styles.bandB,
  c: styles.bandC,
  d: styles.bandD,
};

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const { ref, visible } = useReveal<HTMLAnchorElement>();
  const patternId = `stripe-card-${project.key}`;

  return (
    <a
      ref={ref}
      href={project.link}
      className={`${styles.card} ${visible ? styles.isVisible : ''}`}
      style={{ '--card-delay': `${index * 0.08}s` } as CSSProperties}
      data-testid={`project-card-${project.key}`}
    >
      <div className={`${styles.band} ${BAND_CLASS[project.bandToken]}`}>
        <svg className={styles.bandPattern} aria-hidden="true">
          <defs>
            <pattern
              id={patternId}
              width="18"
              height="18"
              patternTransform="rotate(45)"
              patternUnits="userSpaceOnUse"
            >
              <rect width="9" height="18" fill="rgba(255,255,255,0.03)" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill={`url(#${patternId})`} />
        </svg>
        <span className={styles.bandLabel}>{project.imgLabel}</span>
      </div>
      <div className={styles.body}>
        <div className={styles.meta}>
          <span className={styles.tag}>{project.tag}</span>
          <span className={styles.arrow} aria-hidden="true">
            ↗
          </span>
        </div>
        <h3 className={styles.name}>{project.name}</h3>
        <p className={styles.desc}>{project.desc}</p>
      </div>
    </a>
  );
}
