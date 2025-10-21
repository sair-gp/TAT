//import React from 'react'

//import { Timer } from "lucide-react";

import TatTimer from "./TatTimer";

const Home = () => {
  return (
    <section>
      <div className="grid grid-cols-2 sm:ml-16 mt-32">
        {/*Pomodoro timer */}
        <div className="grid grid-cols-1 border-2 border-green-400 shadow-[0_0_12px_rgba(0,255,0,0.4)] rounded-sm transition duration-300 ease-in-out hover:scale-105">
          <div className="flex flex-col">
            <div className="flex flex-col px-2">
              <h1 className="text-2xl terminal-text">TAT Timer</h1>
            </div>
            <div className="flex flex-col justify-start items-start">
              <div className="flex flex-row">
                <TatTimer />
                <h1 className=" text-2xl"></h1>
              </div>
            </div>
          </div>
        </div>
        {/**something else */}
      </div>
    </section>
  );
};

export default Home;
