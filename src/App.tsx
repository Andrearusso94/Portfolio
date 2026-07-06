import { Nav } from './features/nav/Nav';
import { Hero } from './features/hero/Hero';
import { NycBreak } from './features/nycBreak/NycBreak';
import { Projects } from './features/projects/Projects';
import { About } from './features/about/About';
import { Contact } from './features/contact/Contact';

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <NycBreak />
        <Projects />
        <About />
        <Contact />
      </main>
    </>
  );
}
