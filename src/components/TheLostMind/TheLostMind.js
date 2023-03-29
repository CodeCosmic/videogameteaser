<<<<<<< HEAD
import React, { useState } from "react";
import {DIALOGUE} from "../../app/shared/DIALOGUE";
import './TheLostMind.css'


function TheLostMind() {
  const [currentScene, setCurrentScene] = useState('start');

  function handleOptionClick(option) {
    setCurrentScene(option);
  }

  if (currentScene === 'start') {
    return (
      <div className="textView" >
        <h1>The Lost Mind</h1>
        <p>{DIALOGUE[0].dialogue}</p>
        <button className="gameButton" onClick={() => handleOptionClick('standUp')}>Stand up</button>
      </div>
    );
  } else if (currentScene === 'standUp') {
    return (
      <div className="textView">
        <h1>{DIALOGUE[1].choiceName}</h1>
        <p>{DIALOGUE[1].dialogue}</p>
        <button onClick={() => handleOptionClick('lookOutTheWindow')}>Look out the window</button>
        <button onClick={() => handleOptionClick('checkTheDoor')}>Check the door</button>
      </div>
    );
  } else if (currentScene === 'lookOutTheWindow') {
    return (
      <div className="textView">
        <h1>{DIALOGUE[2].choiceName}</h1>
        <p>{DIALOGUE[2].dialogue}</p>
        <button onClick={() => handleOptionClick('checkTheDoor')}>Go check the door</button>
      </div>
    );
  } else if (currentScene === 'checkTheDoor') {
    return (
      <div className="textView">
        <h1>{DIALOGUE[3].choiceName}</h1>
        <p>{DIALOGUE[3].dialogue}</p>
        <button onClick={() => handleOptionClick('peekLeft')}>Peek left</button>
        <button onClick={() => handleOptionClick('peekRight')}>Peek right</button>
      </div>
    );
  } else if (currentScene === 'peekRight') {
    return (
      <div className="textView">
        <h1>{DIALOGUE[4].choiceName}</h1>
        <p>{DIALOGUE[4].dialogue}</p>
        <button onClick={() => handleOptionClick('peekLeft')}>Peek left</button>
      </div>
    );
  } else if (currentScene === 'peekLeft') {
    return (
      <div className="textView">
        <h1>{DIALOGUE[5].choiceName}</h1>
        <p>{DIALOGUE[5].dialogue}</p>
        <button onClick={() => handleOptionClick('go')}>GO!</button>
      </div>
    );
  } else if (currentScene === 'go') {
    return (
      <div className="textView">
        <h1>{DIALOGUE[6].choiceName}</h1>
        <p>{DIALOGUE[6].dialogue}</p>
        <button onClick={() => handleOptionClick('goOutTheDoor')}>Go out the door</button>
      </div>
    );
  } else if (currentScene === 'goOutTheDoor') {
    return (
      <div className="textView">
      <h1>{DIALOGUE[7].choiceName}</h1>
      <p>{DIALOGUE[7].dialogue}</p>
      <button onClick={() => handleOptionClick('takeLeftDoor')}>Take the left door</button>
      <button onClick={() => handleOptionClick('takeRightDoor')}>Take the right door</button>
      </div>
      )
  } else if (currentScene === 'takeLeftDoor') {
    return (
      <div className="textView">
      <h1>{DIALOGUE[8].choiceName}</h1>
      <p>{DIALOGUE[8].dialogue}</p>
      <button onClick={() => handleOptionClick('hideUnderDesk')}>Hide under Desk</button>
      <button onclick={() => handleOptionClick('tryPhoneAgain')}>Try the phone again</button>
      </div>
      )
  } else if (currentScene === 'hideUnderDesk') {
    return (
      <div className="textDead">
      <h1>{DIALOGUE[9].choiceName}</h1>
      <p>{DIALOGUE[9].dialogue}</p>
      <button onClick={() => handleOptionClick('start')}>Start over</button>
      </div>
      )
  } else if (currentScene === 'tryPhoneAgain') {
    return (
      <div className="textView">
      <h1>{DIALOGUE[10].choiceName}</h1>
      <p>{DIALOGUE[10].dialogue}</p>
      <button onClick={() => handleOptionClick('wakeUp')}>Jump through the wall</button>
      </div>
      )
  } else if (currentScene === 'takeRightDoor') {
    return (
      <div className="textView">
      <h1>{DIALOGUE[11].choiceName}</h1>
      <p>{DIALOGUE[11].dialogue}</p>
      <button onClick={() => handleOptionClick('runToWoods')}>Run into the woods</button>
      <button onClick={() => handleOptionClick('runToFacility')}>Run to the facility and hide</button>
      </div>
      )
  } else if (currentScene === 'runToWoods') {
    return (
      <div className="textDead">
      <h1>{DIALOGUE[12].choiceName}</h1>
      <p>{DIALOGUE[12].dialogue}</p>
      <button onClick={() => handleOptionClick('start')}>Start over</button>
      </div>
      )
  } else if (currentScene === 'runToFacility') {
    return (
      <div className="textView">
      <h1>{DIALOGUE[13].choiceName}</h1>
      <p>{DIALOGUE[13].dialogue}</p>
      <button onClick={() => handleOptionClick('wakeUp')}>Let go...</button>
      </div>
      )
  } else if (currentScene === 'wakeUp') {
    return (
      <div className="textView">
      <h1>{DIALOGUE[14].choiceName}</h1>
      <p>{DIALOGUE[14].dialogue}</p>
      <button onClick={() => handleOptionClick('pickUpHat')}>Pick up the hat</button>
      </div>
      )
  } else if (currentScene === 'pickUpHat') {
    return (
      <div className="bigWin">
        <h1>{DIALOGUE[15].choiceName}</h1>
        <p>{DIALOGUE[15].dialogue}</p>
      </div>
      )
    }
}
=======
import React, { useState } from "react";
import {DIALOGUE} from "../../app/shared/DIALOGUE";
import './TheLostMind.css'
import { Link } from "react-router-dom";


function TheLostMind() {
  const [currentScene, setCurrentScene] = useState('start');

  function handleOptionClick(option) {
    setCurrentScene(option);
  }
  

  if (currentScene === 'start') {
    return (
      <div className="textView" >
        <h1>The Lost Mind</h1>
        <p>{DIALOGUE[0].dialogue}</p>
        <button className="gameButton" onClick={() => handleOptionClick('standUp')}>Stand up</button>
      </div>
      
    );
  } else if (currentScene === 'standUp') {
    return (
      <div className="textView">
        <h1>{DIALOGUE[1].choiceName}</h1>
        <p>{DIALOGUE[1].dialogue}</p>
        <button className='btn1' onClick={() => handleOptionClick('lookOutTheWindow')}>Look out the window</button>
        <button onClick={() => handleOptionClick('checkTheDoor')}>Check the door</button>
      </div>
    );
  } else if (currentScene === 'lookOutTheWindow') {
    return (
      <div className="textView">
        <h1>{DIALOGUE[2].choiceName}</h1>
        <p>{DIALOGUE[2].dialogue}</p>
        <button onClick={() => handleOptionClick('checkTheDoor')}>Go check the door</button>
      </div>
    );
  } else if (currentScene === 'checkTheDoor') {
    return (
      <div className="textView">
        <h1>{DIALOGUE[3].choiceName}</h1>
        <p>{DIALOGUE[3].dialogue}</p>
        <button className='btn1' onClick={() => handleOptionClick('peekLeft')}>Peek left</button>
        <button onClick={() => handleOptionClick('peekRight')}>Peek right</button>
      </div>
    );
  } else if (currentScene === 'peekRight') {
    return (
      <div className="textView">
        <h1>{DIALOGUE[4].choiceName}</h1>
        <p>{DIALOGUE[4].dialogue}</p>
        <button onClick={() => handleOptionClick('peekLeft')}>Peek left</button>
      </div>
    );
  } else if (currentScene === 'peekLeft') {
    return (
      <div className="textView">
        <h1>{DIALOGUE[5].choiceName}</h1>
        <p>{DIALOGUE[5].dialogue}</p>
        <button onClick={() => handleOptionClick('go')}>GO!</button>
      </div>
    );
  } else if (currentScene === 'go') {
    return (
      <div className="textView">
        <h1>{DIALOGUE[6].choiceName}</h1>
        <p>{DIALOGUE[6].dialogue}</p>
        <button onClick={() => handleOptionClick('goOutTheDoor')}>Go out the door</button>
      </div>
    );
  } else if (currentScene === 'goOutTheDoor') {
    return (
      <div className="textView">
      <h1>{DIALOGUE[7].choiceName}</h1>
      <p>{DIALOGUE[7].dialogue}</p>
      <button className='btn1' onClick={() => handleOptionClick('takeLeftDoor')}>Take the left door</button>
      <button onClick={() => handleOptionClick('takeRightDoor')}>Take the right door</button>
      </div>
      )
  } else if (currentScene === 'takeLeftDoor') {
    return (
      <div className="textView">
      <h1>{DIALOGUE[8].choiceName}</h1>
      <p>{DIALOGUE[8].dialogue}</p>
      <button className='btn1' onClick={() => handleOptionClick('hideUnderDesk')}>Hide under Desk</button>
      <button onclick={() => handleOptionClick('tryPhoneAgain')}>Try the phone again</button>
      </div>
      )
  } else if (currentScene === 'hideUnderDesk') {
    return (
      <div className="textDead">
      <h1>{DIALOGUE[9].choiceName}</h1>
      <p>{DIALOGUE[9].dialogue}</p>
      <button onClick={() => handleOptionClick('start')}>Start over</button>
      </div>
      )
  } else if (currentScene === 'tryPhoneAgain') {
    return (
      <div className="textView">
      <h1>{DIALOGUE[10].choiceName}</h1>
      <p>{DIALOGUE[10].dialogue}</p>
      <button onClick={() => handleOptionClick('wakeUp')}>Jump through the wall</button>
      </div>
      )
  } else if (currentScene === 'takeRightDoor') {
    return (
      <div className="textView">
      <h1>{DIALOGUE[11].choiceName}</h1>
      <p>{DIALOGUE[11].dialogue}</p>
      <button className='btn1' onClick={() => handleOptionClick('runToWoods')}>Run into the woods</button>
      <button onClick={() => handleOptionClick('runToFacility')}>Run to the facility and hide</button>
      </div>
      )
  } else if (currentScene === 'runToWoods') {
    return (
      <div className="textDead">
      <h1>{DIALOGUE[12].choiceName}</h1>
      <p>{DIALOGUE[12].dialogue}</p>
      <button onClick={() => handleOptionClick('start')}>Start over</button>
      </div>
      )
  } else if (currentScene === 'runToFacility') {
    return (
      <div className="textView">
      <h1>{DIALOGUE[13].choiceName}</h1>
      <p>{DIALOGUE[13].dialogue}</p>
      <button onClick={() => handleOptionClick('wakeUp')}>Let go...</button>
      </div>
      )
  } else if (currentScene === 'wakeUp') {
    return (
      <div className="textView">
      <h1>{DIALOGUE[14].choiceName}</h1>
      <p>{DIALOGUE[14].dialogue}</p>
      <button onClick={() => handleOptionClick('pickUpHat')}>Pick up the hat</button>
      </div>
      )
  } else if (currentScene === 'pickUpHat') {
    return (
      <div className="bigWin">
      <h1>{DIALOGUE[15].choiceName}</h1>
      <p>{DIALOGUE[15].dialogue}</p>
      <Link to='/contact'><button className='btn1'>Contact</button></Link>
      </div>
      )
    }
}
>>>>>>> main
export default TheLostMind;