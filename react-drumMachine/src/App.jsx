import Toggle from './components/Toggle.jsx';
import React, { useEffect } from 'react';


function App() {

  // Play Sound onclick event for the drum-pad buttons
  const playSound = (event) => {
    const audio = event.currentTarget.firstChild;
    audio.currentTime = 0;
    audio.play();
  };

  const handleKeyPress = (event) => {
    const key = event.key.toUpperCase();
    let audio;
    switch (key) {
      case 'Q':
        audio = document.getElementById('Q');
        break;
      case 'W':
        audio = document.getElementById('W');
        break;
      case 'E':
        audio = document.getElementById('E');
        break;
      case 'A':
        audio = document.getElementById('A');
        break;
      case 'S':
        audio = document.getElementById('S');
        break;
      case 'D':
        audio = document.getElementById('D');
        break;
      case 'Z':
        audio = document.getElementById('Z');
        break;
      case 'X':
        audio = document.getElementById('X');
        break;
      case 'C':
        audio = document.getElementById('C');
        break;
      default:
        return; // Exit the function if the key is not handled
    }
    audio.currentTime = 0;
    audio.play();
  };
  
   // Add the event listener when the component mounts
  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  return (
    <div className='flex flex-col justify-center items-center h-screen'>
      {/* <h1 className='text-slate-700 text-5xl text-center font-bold'>Test</h1> */}
      <div id='drum-machine'>
        <div className='gap-4 grid grid-cols-3 w-full max-w-sm' id='display'>
          <div className='drum-pad' id='Heater-1' onClick={playSound}>
            <audio className='clip' id='Q' src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"></audio>
            Q
          </div>
          <div className='drum-pad' id='Heater-2' onClick={playSound}>
            <audio className='clip' id='W' src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"></audio>
            W
          </div>
          <div className='drum-pad' id='Heater-3' onClick={playSound}>
            <audio className='clip' id='E' src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"></audio>
            E
          </div>
          <div className='drum-pad' id='Heater-4' onClick={playSound}>
            <audio className='clip' id='A' src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"></audio>
            A
          </div>
          <div className='drum-pad' id='Clap' onClick={playSound}>
            <audio className='clip' id='S' src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"></audio>
            S
          </div>
          <div className='drum-pad' id='Open-HH' onClick={playSound}>
            <audio className='clip' id='D' src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"></audio>
            D
          </div>
          <div className='drum-pad' id="Kick-n'-Hat" onClick={playSound}>
            <audio className='clip' id='Z' src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"></audio>
            Z
          </div>
          <div className='drum-pad' id='Kick' onClick={playSound}>
            <audio className='clip' id='X' src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"></audio>
            X
          </div>
          <div className='drum-pad' id='Close-HH' onClick={playSound}>
            <audio className='clip' id='C' src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"></audio>
            C
          </div>
        </div>
        <Toggle />
      </div>
    </div>
  )
}

export default App
