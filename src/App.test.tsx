import { render, screen, within } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import App from './App';
import { projects } from './data/projects';

/**
 * TEST DI FUMO — BASELINE DEL PROGETTO
 * Questi test devono SEMPRE passare su main. L'orchestratore (Jimmy)
 * si rifiuta di lavorare se falliscono: sono il contratto minimo
 * sull'integrità dell'app. Non indebolirli per far passare una PR.
 */
describe('App — smoke test', () => {
  it('monta senza errori e mostra il titolo della hero', () => {
    render(<App />);
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toHaveTextContent(/costruisco/i);
    expect(heading).toHaveTextContent(/che funzionano/i);
  });

  it('contiene le sezioni principali raggiungibili via ancora', () => {
    const { container } = render(<App />);
    for (const id of ['hero', 'progetti', 'about', 'contatti']) {
      expect(container.querySelector(`section#${id}`)).toBeInTheDocument();
    }
    // La nav punta alle sezioni giuste
    const nav = screen.getByRole('navigation', { name: /principale/i });
    expect(within(nav).getByRole('link', { name: /progetti/i })).toHaveAttribute(
      'href',
      '#progetti',
    );
    expect(within(nav).getByRole('link', { name: /contattami/i })).toHaveAttribute(
      'href',
      '#contatti',
    );
  });

  it('renderizza tutte le card progetto dai dati segnaposto', () => {
    render(<App />);
    for (const p of projects) {
      expect(screen.getByTestId(`project-card-${p.key}`)).toBeInTheDocument();
      expect(screen.getByRole('heading', { level: 3, name: p.name })).toBeInTheDocument();
    }
  });

  it('mostra la skyline SVG nella hero', () => {
    render(<App />);
    expect(screen.getByTestId('skyline')).toBeInTheDocument();
  });
});
