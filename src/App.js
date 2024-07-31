// src/App.js
import React from 'react';
import './App.css';
import BingoCard from './BingoCard';

const sentences = [
  "Na és mikor jön a baba?",
  "Milyen öreg volt ez a marha?",
  "Pista bácsi elkezd politizálni",
  "Régen minden jobb volt",
  "Jó idő van, nem?",
  "Emlékszel, amikor...",
  "Megint lemaradtam a legjobb résznél",
  "A gyerekek olyan gyorsan nőnek",
  "Hogy megy a munka?",
  "Ezt nem hiszem el!",
  "Megint késik a busz.",
  "Képzeld el, mi történt!",
  "Ez a zene valami szörnyű.",
  "Ezért jöttem haza?",
  "Mi lesz a vacsora?",
  "Mikor érkezünk már meg?",
  "Ez egy vicc, ugye?",
  "A kedvenc sorozatom épp most kezdődik."
];

const getRandomSentences = (arr, num) => {
  const shuffled = arr.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, num);
};

const App = () => {
  const randomSentences = getRandomSentences(sentences, 9);

  return (
    <div className="App">
      <h1>Bingo Game</h1>
      <div className="bingo-grid">
        {randomSentences.map((sentence, index) => (
          <BingoCard key={index} sentence={sentence} />
        ))}
      </div>
    </div>
  );
};

export default App;
