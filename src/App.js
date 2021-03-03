import './App.scss';
import React from 'react';
import Network from './components/Network';
import Card from './components/Card';

function App() {
  const [sky, setSky] = React.useState(true);
  const [synergy, setSynergy] = React.useState(false);
  const handleOnClickSynergy = () => {
    setSynergy(!synergy);
    setTimeout(() => setSky(false), 3000);
  };
  return (
    <>
      <button id="synergy" onClick={() => handleOnClickSynergy()}>Synergy!</button>
      <Network synergy={synergy} setSynergy={() => setSynergy(!synergy)} skyDisplayed={sky} />
      <Card setSynergy={() => setSynergy(!synergy)} isNotDisplayed={sky} onClickClose={() => setSky(true)} />
    </>
  );
}

export default App;
