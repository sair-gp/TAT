import { Timer } from "lucide-react";
import React from "react";

interface TatTimerProps {
  duration: number;
  onComplete?: () => void;
  autoStart?: boolean;
  showControls?: boolean;
  color?: string;
  background?: string;
}

const TatTimer = () => {
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
      <div>
        <Timer />
      </div>
    </div>
  );
};

export default TatTimer;
