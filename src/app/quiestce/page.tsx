'use client';
import React, { useState } from 'react';

import styles from './quiestce.module.css';
import { SelectedUserOnPage } from '@/modules/user/SelectedUserOnPage';

export default function Photo() {
  const [selectedCard, setSelectedCard] = useState(-1);
  const [responseDisplayed, setResponseDisplayed] = useState(false);

  const handleSelection: React.ComponentProps<'select'>['onChange'] = (e) => {
    const cardId = parseInt(e.target.value);
    setSelectedCard(cardId);
    setResponseDisplayed(false);
  };

  return (
    <article className={styles.container}>
      <SelectedUserOnPage />
      <h1 className={styles.title}>Qui est-ce ?</h1>
      <section className={styles.intro}>
        <p style={{ color: 'var(--yellow)' }}>Voici les cartes du jeu qui-est-ce.</p>
        <p style={{ color: 'var(--blue)' }}>Selectionnez le numéro affiché sur votre carton pour commencer.</p>
      </section>
      <section className={styles.selection}>
        <select defaultValue={-1} onChange={handleSelection} className={styles.select}>
          <option value={-1} disabled style={{ fontStyle: 'italic' }}>
            Numéro du carton
          </option>
          {Array.from({ length: 16 }).map((_, index) => (
            <option key={index} value={index + 1}>
              Carton {index + 1}
            </option>
          ))}
        </select>
        {selectedCard !== -1 && (
          <div className={styles.imageContainer}>
            <button className={styles.button} onClick={() => setResponseDisplayed(!responseDisplayed)}>
              {responseDisplayed ? 'Masquer les réponses' : 'Afficher les réponses'}
            </button>
            {responseDisplayed ? (
              <img className={styles.image} src={`/quiestce/card_${selectedCard}.jpg`} alt={`Réponse du carton ${selectedCard}`} />
            ) : (
              <img className={styles.image} src={`/quiestce/card_${selectedCard}_empty.jpg`} alt={`Carton ${selectedCard}`} />
            )}
          </div>
        )}
      </section>
    </article>
  );
}
