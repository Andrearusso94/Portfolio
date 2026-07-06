/**
 * Dati segnaposto: nomi, tag e descrizioni sono quelli della bozza.
 * Verranno perfezionati in issue dedicate — non modificarli d'iniziativa.
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
    key: 'ineos',
    name: 'Studio Ineos',
    tag: 'Healthcare · AI Search',
    desc: 'Sito per poliambulatorio con ricerca AI integrata: i pazienti trovano specialisti e servizi in linguaggio naturale.',
    imgLabel: 'studio-ineos',
    bandToken: 'b',
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
    key: 'publish',
    name: 'Sync Publish (in sviluppo)',
    tag: 'SaaS · Publishing',
    desc: "Costruzione e pubblicazione simultanea del sito: un flusso che oggi nessuna AI offre davvero — dal build al deploy in un unico passo.",
    imgLabel: 'progetto in stealth',
    bandToken: 'd',
    link: '#',
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
