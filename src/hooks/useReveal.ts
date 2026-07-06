import { useEffect, useRef, useState } from 'react';

/**
 * Scroll-reveal one-shot: restituisce un ref da agganciare all'elemento
 * e un booleano `visible` che diventa true quando l'elemento entra nel
 * viewport (threshold 0.15, come nella bozza originale).
 *
 * In ambienti senza IntersectionObserver (es. jsdom nei test) l'elemento
 * è considerato subito visibile, così i test di fumo vedono il contenuto.
 */
export function useReveal<T extends HTMLElement>(options?: { immediate?: boolean }) {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(options?.immediate ?? false);

  useEffect(() => {
    if (visible) return;

    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true);
      return;
    }

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        }
      },
      { threshold: 0.15 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [visible]);

  return { ref, visible } as const;
}
