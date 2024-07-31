// src/BingoCard.js
import React, { useState } from 'react';
import './BingoCard.css';

const BingoCard = ({ sentence }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div className={`bingo-card ${isClicked ? 'clicked' : ''}`} onClick={handleClick}>
      {sentence}
    </div>
  );
};

export default BingoCard;
