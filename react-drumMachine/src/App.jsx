import Toggle from './components/Toggle.jsx';
import Slider from './components/Slider.jsx';
import React, { useEffect, useState } from 'react';


function App() {


  const [displayText, setDisplayText] = useState('');

  const playSound = (event) => {
    const audio = event.currentTarget.firstChild;
    audio.currentTime = 0; // This line resets the audio playback to the start
    audio.play();
    setDisplayText(event.currentTarget.id); // Set the display text to the id of the clicked div
  };

  const handleKeyPress = (event) => {
    const key = event.key.toUpperCase();
    let audio;
    let text;
    switch (key) {
      case 'Q':
        audio = document.getElementById('Q');
        text = 'Heater 1';
        break;
      case 'W':
        audio = document.getElementById('W');
        text = 'Heater 2';
        break;
      case 'E':
        audio = document.getElementById('E');
        text = 'Heater 3';
        break;
      case 'A':
        audio = document.getElementById('A');
        text = 'Heater 4';
        break;
      case 'S':
        audio = document.getElementById('S');
        text = 'Clap';
        break;
      case 'D':
        audio = document.getElementById('D');
        text = 'Open HH';
        break;
      case 'Z':
        audio = document.getElementById('Z');
        text = "Kick n' Hat";
        break;
      case 'X':
        audio = document.getElementById('X');
        text = 'Kick';
        break;
      case 'C':
        audio = document.getElementById('C');
        text = 'CLose HH';
        break;
      default:
        return; // Exit the function if the key is not handled
    }
    audio.currentTime = 0;
    audio.play();
    setDisplayText(text);
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
      <div id='drum-machine' className='flex'>
        <div className='gap-4 grid grid-cols-3 w-full max-w-[30rem]'>
          <div className='drum-pad' id='Heater 1' onClick={playSound}>
            <audio className='clip' id='Q' src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"></audio>
            Q
          </div>
          <div className='drum-pad' id='Heater 2' onClick={playSound}>
            <audio className='clip' id='W' src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"></audio>
            W
          </div>
          <div className='drum-pad' id='Heater 3' onClick={playSound}>
            <audio className='clip' id='E' src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"></audio>
            E
          </div>
          <div className='drum-pad' id='Heater 4' onClick={playSound}>
            <audio className='clip' id='A' src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"></audio>
            A
          </div>
          <div className='drum-pad' id='Clap' onClick={playSound}>
            <audio className='clip' id='S' src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"></audio>
            S
          </div>
          <div className='drum-pad' id='Open HH' onClick={playSound}>
            <audio className='clip' id='D' src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"></audio>
            D
          </div>
          <div className='drum-pad' id="Kick n' Hat" onClick={playSound}>
            <audio className='clip' id='Z' src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"></audio>
            Z
          </div>
          <div className='drum-pad' id='Kick' onClick={playSound}>
            <audio className='clip' id='X' src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"></audio>
            X
          </div>
          <div className='drum-pad' id='Close HH' onClick={playSound}>
            <audio className='clip' id='C' src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"></audio>
            C
          </div>
        </div>
        <div className='flex flex-col items-center justify-center gap-8 pl-8 w-[5rem] lg:w-[30rem]'>
          {/* On/Off Toggle */}
          <Toggle />
          {/* Display Container */}
          <div className="bg-slate-200 w-[8rem] h-12 flex items-center justify-center rounded-md font-bold" id='display'>
            {displayText}
          </div>
          {/* Volume Slider */}
          <Slider />
        </div>
      </div>
    </div>
  )
}

export default App
