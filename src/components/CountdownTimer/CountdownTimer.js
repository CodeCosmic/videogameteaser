import './CountdownTimer.css'
import { useState } from 'react';
import { useEffect } from 'react';
import { getRemainingTimeUntilMSTimestamp } from './Utils/CountdownTimerUtils';

const defaultRemainingTime = {
    seconds: '00',
    minutes: '00',
    hours: '00',
    days: '00'
}

const CountdownTimer = ({countdownTimeStampMS}) => {
    const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);

    useEffect(() => {
        const intervalId =setInterval(() => {
            updateRemainingTime(countdownTimeStampMS);
        }, 1000);
        return () => clearInterval(intervalId)
    }, [countdownTimeStampMS])

    function updateRemainingTime(countdown) {
        setRemainingTime(getRemainingTimeUntilMSTimestamp(countdown));
    }

    return (
       <div className='countdown-timer'>
        <span>{remainingTime.days}</span>
        <span>days</span>
        <span className='two-numbers'>{remainingTime.hours}</span>
        <span>hours</span>
        <span className='two-numbers'>{remainingTime.minutes}</span>
        <span>minutes</span>
        <span className='two-numbers'>{remainingTime.seconds}</span>
        <span>seconds</span>
       </div>
    );
}

export default CountdownTimer;