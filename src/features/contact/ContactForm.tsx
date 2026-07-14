import { useState, type FormEvent } from 'react';
import styles from './ContactForm.module.css';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mgojqegj';

type Status = 'idle' | 'submitting' | 'success' | 'error';

export function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<Status>('idle');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('submitting');

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        setStatus('success');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  const submitting = status === 'submitting';

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <div className={styles.field}>
        <label className={styles.label} htmlFor="contact-name">
          Nome
        </label>
        <input
          className={styles.input}
          id="contact-name"
          name="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          disabled={submitting}
        />
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="contact-email">
          Email
        </label>
        <input
          className={styles.input}
          id="contact-email"
          name="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          disabled={submitting}
        />
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="contact-message">
          Messaggio
        </label>
        <textarea
          className={styles.textarea}
          id="contact-message"
          name="message"
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          disabled={submitting}
        />
      </div>

      <button className={styles.submit} type="submit" disabled={submitting}>
        {submitting ? 'Invio...' : 'Invia messaggio'}
      </button>

      {status === 'success' && (
        <p className={styles.statusSuccess} role="status" aria-live="polite">
          Messaggio inviato, grazie!
        </p>
      )}
      {status === 'error' && (
        <p className={styles.statusError} role="status" aria-live="polite">
          Invio non riuscito, riprova o scrivimi via email.
        </p>
      )}
    </form>
  );
}
