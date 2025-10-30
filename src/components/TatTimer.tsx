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
    <div className="grid grid-cols-2 grid-rows-4 sm:ml-38 mt-18 w-128 h-56 sm:w-256 sm:h-128 border-2 border-green-400 shadow-[0_0_12px_rgba(0,255,0,0.4)] rounded-sm">
      {/* Pomodoro Timer */}
      <div className="col-start-1 row-start-1 row-span-2 px-4">
        <h1 className="text-2xl terminal-text mb-2"></h1>

        <div
          className="flex flex-col items-center justify-center mt-6 ml-4 w-96 p-4 rounded-lg text-center border border-[rgba(0,255,0,0.3)] shadow-[0_0_15px_rgba(0,255,0,0.2)] transition duration-300 ease-in-out hover:scale-105"
          style={{ fontFamily: "'Courier New', monospace" }}
        >
          <h2 className="mb-4 text-lg">
            <span style={{ color: "#00ff99" }}>tat@terminal</span>
            <span style={{ color: "#39FF14" }}>:~$ timer</span>
          </h2>

          <h1 className="text-5xl text-[#39FF14] mb-4">
            {handleTimeFormat(timeLeft)}
          </h1>

          <div className="flex gap-8">
            <button
              onClick={handleStartStop}
              className="terminal-text hover:cursor-pointer border border-green-400 w-25 h-10 flex items-center justify-center gap-2"
            >
              {isRunning ? (
                <>
                  <span>Pause</span>
                  <Pause />
                </>
              ) : (
                <>
                  <span>Play</span>
                  <Play />
                </>
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

      {/*Turn this into a component */}
      <div className="col-start-1 row-start-3 row-span-2">
        <div
          className="flex flex-col items-start justify-center ml-8 w-96 rounded border border-[rgba(0,255,0,0.3)] shadow-[0_0_15px_rgba(0,255,0,0.2)]"
          style={{ fontFamily: "'Courier New', monospace" }}
        >
          <h2 className="mb-4 text-sm">
            <span style={{ color: "#00ff99" }}>tat@terminal</span>
            <span style={{ color: "#39FF14" }}>:~$ quickActions</span>
          </h2>
          {/*Options */}
          <h2 className="text-sm">
            <span style={{ color: "#00ff99" }}>tat@terminal</span>
            <span style={{ color: "#39FF14" }}>
              $~ Start focus session? [y/n]: _
            </span>
          </h2>
        </div>
      </div>

      {/* Right column */}
      <div className="col-start-2 row-start-1 row-span-4">
        <div
          className="flex flex-col mt-6 items-center justify-center w-112 rounded border border-[rgba(0,255,0,0.3)] shadow-[0_0_15px_rgba(0,255,0,0.2)]"
          style={{ fontFamily: "'Courier New', monospace" }}
        >
          <h2 className="mb-4 text-lg">
            <span style={{ color: "#00ff99" }}>tat@terminal</span>
            <span style={{ color: "#39FF14" }}>:~$ missions</span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default TatTimer;
