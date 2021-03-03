import React from 'react';
import './card.scss';
function Card({ setSynergy, isNotDisplayed, onClickClose }) {
  const handleOnCloseCard = () => {
    onClickClose();
    setSynergy();
  };

  return (
    !isNotDisplayed && (
      <section className='overlay'>
        <div className='card-container  swing-top-fwd '>
          <header className='header'>
            <button onClick={() => handleOnCloseCard()}>Close</button>
          </header>
          <article className='article'>
            <h1>
              <em>Success:</em>
            </h1>
            <p>
              {' '}
              Success is waking up every morning exited to live a new day !
            </p>
          </article>
        </div>
      </section>
    )
  );
}

export default Card;
