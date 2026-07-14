import { fireEvent, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { ContactForm } from './ContactForm';

function fillForm() {
  fireEvent.change(screen.getByLabelText('Nome'), { target: { value: 'Mario' } });
  fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'mario@example.com' } });
  fireEvent.change(screen.getByLabelText('Messaggio'), { target: { value: 'Ciao!' } });
}

describe('ContactForm', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('renderizza i 3 campi e il pulsante di invio', () => {
    render(<ContactForm />);
    expect(screen.getByLabelText('Nome')).toBeInTheDocument();
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
    expect(screen.getByLabelText('Messaggio')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /invia messaggio/i })).toBeInTheDocument();
  });

  it('mostra il messaggio di successo e svuota il form dopo un invio riuscito', async () => {
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue({ ok: true }));

    render(<ContactForm />);
    fillForm();
    fireEvent.click(screen.getByRole('button', { name: /invia messaggio/i }));

    expect(await screen.findByText('Messaggio inviato, grazie!')).toBeInTheDocument();
    expect(screen.getByLabelText('Nome')).toHaveValue('');
    expect(screen.getByLabelText('Email')).toHaveValue('');
    expect(screen.getByLabelText('Messaggio')).toHaveValue('');
  });

  it("mostra il messaggio di errore senza svuotare i campi se l'invio fallisce", async () => {
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue({ ok: false }));

    render(<ContactForm />);
    fillForm();
    fireEvent.click(screen.getByRole('button', { name: /invia messaggio/i }));

    expect(
      await screen.findByText('Invio non riuscito, riprova o scrivimi via email.'),
    ).toBeInTheDocument();
    expect(screen.getByLabelText('Nome')).toHaveValue('Mario');
    expect(screen.getByLabelText('Email')).toHaveValue('mario@example.com');
    expect(screen.getByLabelText('Messaggio')).toHaveValue('Ciao!');
  });
});
