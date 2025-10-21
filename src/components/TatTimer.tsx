import { Pause, Play, TimerReset } from "lucide-react";
import { useCountdown } from "../hooks/useCountdown";

//import React from "react";

const TatTimer = () => {
  const {
    timeLeft,
    handleStartStop,
    handleReset,
    isRunning,
    handleTimeFormat,
  } = useCountdown({
    duration: 25 * 60,
    autoStart: false,
  });

  return (
    <div
      className="flex flex-col"
      style={{
        fontFamily: "'Courier New', monospace",
        padding: "2rem",
        borderRadius: "8px",
        width: "320px",
        textAlign: "center",
        boxShadow: "0 0 15px rgba(0,255,0,0.2)",
        border: "1px solid rgba(0,255,0,0.3)",
      }}
    >
      <div>
        <h2 style={{ marginBottom: "1rem", fontSize: "1.2rem" }}>
          <span style={{ color: "#00ff99" }}>tat@terminal</span>
          <span style={{ color: "#39FF14" }}>:~$ timer</span>
        </h2>
      </div>
      <div className="grid grid-cols-1">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-5xl" style={{ color: "#39FF14" }}>
            {handleTimeFormat(timeLeft)}
          </h1>
          <div className="grid grid-cols-2 gap-8">
            <button
              onClick={handleStartStop}
              className="terminal-text hover:cursor-pointer border-1 border-green-400 w-20 h-10"
            >
              {isRunning ? (
                <span className="grid grid-cols-2 gap-2">
                  {" "}
                  Pause <Pause />
                </span>
              ) : (
                <span className="grid grid-cols-2 gap-2">
                  {" "}
                  Play <Play />
                </span>
              )}
            </button>

            <button
              onClick={handleReset}
              className="text-orange-400 hover:cursor-pointer"
            >
              <TimerReset />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TatTimer;
