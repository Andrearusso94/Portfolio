/**
 * Solo i link di `jarvis` e `atlante` restano segnaposto (`#`):
 * verranno aggiornati con issue dedicate — non modificarli d'iniziativa.
 */
export interface Project {
  key: string;
  name: string;
  tag: string;
  desc: string;
  imgLabel: string;
  /** Token della fascia gradiente della card, definito in tokens.css */
  bandToken: 'a' | 'b' | 'c' | 'd';
  link: string;
}

export const projects: Project[] = [
  {
    key: 'jarvis',
    name: 'Jarvis TacticsAI',
    tag: 'AI · Full-stack',
    desc: 'Piattaforma di assistenza tattica basata su AI: analisi in tempo reale e supporto decisionale per scenari complessi.',
    imgLabel: 'jarvis-tacticsAI',
    bandToken: 'a',
    link: '#',
  },
  {
    key: 'atlante',
    name: 'Atlante Sincronico 3D',
    tag: 'Education · WebGL',
    desc: 'Progetto didattico di storia: una timeline tridimensionale e sincronica per esplorare eventi ed epoche nello spazio.',
    imgLabel: 'atlante-storico-3d',
    bandToken: 'c',
    link: '#',
  },
  {
    key: 'avelights',
    name: 'Ave Lights',
    tag: 'Business · Web Design',
    desc: "Sito per uno studio di tatuaggi e piercing a Roma: identità visiva, prenotazioni e blog per portare online un'attività reale.",
    imgLabel: 'avelights.com',
    bandToken: 'b',
    link: 'https://www.avelights.com/',
  },
  {
    key: 'boschetti',
    name: 'Simone Boschetti',
    tag: 'Portfolio · Web Design',
    desc: 'Sito personale per un tatuatore specializzato in calligrafia e fineline: galleria lavori, prenotazioni e presenza online su misura.',
    imgLabel: 'simoneboschetti.com',
    bandToken: 'd',
    link: 'https://www.simoneboschetti.com/',
  },
];

export const skills: string[] = [
  'React',
  'JavaScript / TypeScript',
  'CSS avanzato',
  'AI Integration',
  'Three.js',
  'UX / Prototyping',
];
