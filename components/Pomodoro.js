
import { useState, useRef } from 'react'
import Head from 'next/head'
import styles from '../styles/Pomodoro.module.css'


function padTime(time) {
    return time.toString().padStart(2,'0')
  }
  
  export default function Pomodoro() {
    const [title, setTitle] = useState('Let the countdown begin!');
    const [timeLeft, setTimeLeft] = useState(25 * 60);
    const [isRunning, setIsRunning] = useState(false);
    const intervalRef = useRef(null);
  
    const minutes = padTime(Math.floor(timeLeft/60));
    const seconds = padTime(timeLeft - minutes*60);
  
    function startTimer() {
      if(intervalRef.current !== null) return;
  
      setTitle(`You're doing great!`)
      setIsRunning(true);
      intervalRef.current = setInterval(() => {
        setTimeLeft(timeLeft => {
          if(timeLeft>=1) return timeLeft - 1;
  
          resetTimer();
          return 0;
        })
      }, 1000)
    }
  
    function stopTimer() {
      if(intervalRef.current === null) return;
  
      setIsRunning(false);
      clearInterval(intervalRef.current);
      intervalRef.current = null;
      setTitle('Keep it up!');
    }
  
    function resetTimer() {
      setIsRunning(false);
      clearInterval(intervalRef.current);
      intervalRef.current = null;
      setTitle('Ready for another round?');
      setTimeLeft(25 * 60);
    }
  
    return (
      <div className={styles.container}>
        <Head>
          <title>Pomodoro Timer</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
        <main>
          <div className={styles.app}>
            <h2>{title}</h2>
  
            <div className={styles.timer}>
              <span>{minutes}</span>
              <span>:</span>
              <span>{seconds}</span>
            </div>
  
            <div className={styles.buttons}>
              {!isRunning && <button onClick={startTimer}>Start</button>}
              {isRunning && <button onClick={stopTimer}>Pause</button>}
              <button onClick={resetTimer}>Reset</button>
            </div>
          </div>
        </main>
      </div>
    )
  }