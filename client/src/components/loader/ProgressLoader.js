import React from 'react';
import '../../assets/stylesheets/Loader.css';

const ProgressLoader = props => {
  const loadingPhrases = [
    'Preheating the oven...',
    'Pouring the sugar...',
    'Pouring the milk...',
    'Mixing the eggs...'
  ];

  const randomPhrase = loadingPhrases[Math.floor(Math.random() * loadingPhrases.length)];

  return (
    <div className="pizza-loader-container">
      <div className="pizza-loader-wrapper">
        <img src="/images/loader/pizza_loader.gif" alt="Loading spinner" />
      </div>

      <p>{props.type === 'loading' ? randomPhrase : 'Oops, looks like something went wrong! \n Please try again later.'}</p>
    </div>
  );
};

export default ProgressLoader;