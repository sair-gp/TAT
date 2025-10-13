import { useEffect, useState, useRef } from "react";

interface useCountdownProps {
  duration: number;
  autoStart?: boolean;
}

export const useCountdown = ({ duration, autoStart }: useCountdownProps) => {
  const [timeLeft, setTimeLeft] = useState(duration);
  const [isRunning, setIsRunning] = useState(autoStart ?? false);
  // using a ref to ensure access to the interval id
  const intervalRef = useRef<number | undefined>(undefined);
  //const timeRef = useRef<ReturnType<typeof setInterval> | null>(null);

  //Changes the state to start or stop the timer by using the updater function (prev)
  const handleStartStop = () => {
    // Checks that the timer doesn't restart from zero. I mean, if its zero, then it'll do nothing
    if (timeLeft === 0) return;
    //interval cleanup (just in case)
    if (intervalRef.current) clearInterval(intervalRef.current);
    setIsRunning((prev) => !prev);
  };

  const handleReset = () => {
    // Interval cleanup. Necessary for reseting the timer
    if (intervalRef.current) clearInterval(intervalRef.current);
    setTimeLeft(duration);
    setIsRunning(true);
  };

  useEffect(() => {
    if (isRunning === false) {
      return;
    }
    intervalRef.current = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime === 0) {
          // Cleaning the interval and returning to ensure the timer stops at 0 and doesn't go down to -1
          clearInterval(intervalRef.current);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => {
      // Cleanup
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isRunning]); // isRunning is set as a dependency so useEffect is executed everytime isRunning's value is updated

  // Returns an object
  return { timeLeft, handleStartStop, handleReset, isRunning };
};
