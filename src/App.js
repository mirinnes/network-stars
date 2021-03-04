import './App.scss';
import React from 'react';
import Network from './components/Network';
import Card from './components/Card';

function App() {
  const [sky, setSky] = React.useState(true);
  const [synergy, setSynergy] = React.useState(false);
  const [showButton, setshowButton] = React.useState(false)
  const handleOnClickSynergy = () => {
    if (!synergy) {
      setSynergy(!synergy);
      setSky(false)
    }
  };
  const handleOnClose = () => {
    setSky(true);
    setshowButton(false);
    setSynergy(!synergy);
  }
  const handleShowButton = () => {
    setTimeout(() => {
      setshowButton(true)
    }, 3000);
  }


  return (
    <>
      <button
        id="synergy"
        style={{ display: `${showButton ? 'inline-block' : 'none'}` }}
        onClick={() => handleOnClickSynergy()}
        className="puff-in-hor"
      >
        Synergy!
        </button>
      <Network
        synergy={synergy}
        setShowButton={() => handleShowButton()}
      />
      <Card
        isNotDisplayed={sky}
        onClickClose={() => handleOnClose()} />
    </>
  );
}

export default App;
