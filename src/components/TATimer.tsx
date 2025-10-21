import React, { useState, useEffect, useRef } from "react";

// ===============================
// 🕒 TerminalTimer Component
// ===============================
// Un temporizador con estilo terminal, configurable mediante props.
//
// Props:
// - duration: número total de segundos que dura el temporizador.
// - onComplete?: función que se ejecuta cuando el tiempo llega a 0.
// - autoStart?: si es true, el temporizador comienza automáticamente.
// - showControls?: muestra los botones Start/Pause/Reset.
// - color?: color del texto del temporizador (por defecto "lime").
// - background?: color de fondo estilo terminal (por defecto "#0c0c0c").
//
// Ejemplo de uso:
// <TerminalTimer duration={120} onComplete={() => alert("Tiempo terminado!")} />
//
type TerminalTimerProps = {
  duration: number;
  onComplete?: () => void;
  autoStart?: boolean;
  showControls?: boolean;
  color?: string;
  background?: string;
};

const TerminalTimer: React.FC<TerminalTimerProps> = ({
  duration,
  onComplete,
  autoStart = false,
  showControls = true,
  color = "lime",
  background = "#0c0c0c",
}) => {
  const [timeLeft, setTimeLeft] = useState(duration);
  const [isRunning, setIsRunning] = useState(autoStart);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Formatear tiempo (mm:ss)
  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60)
      .toString()
      .padStart(2, "0");
    const s = (seconds % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  };

  // Lógica principal del temporizador
  useEffect(() => {
    if (isRunning && timeLeft > 0) {
      timerRef.current = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    }

    // Cuando termina
    if (timeLeft === 0) {
      setIsRunning(false);
      onComplete?.();
    }

    // Limpieza
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isRunning, timeLeft, onComplete]);

  // Controles
  const handleStart = () => setIsRunning(true);
  const handlePause = () => setIsRunning(false);
  const handleReset = () => {
    setTimeLeft(duration);
    setIsRunning(autoStart);
  };

  return (
    <div
      style={{
        background,
        color,
        fontFamily: "'Courier New', monospace",
        padding: "2rem",
        borderRadius: "8px",
        width: "320px",
        textAlign: "center",
        boxShadow: "0 0 15px rgba(0,255,0,0.2)",
        border: "1px solid rgba(0,255,0,0.3)",
      }}
    >
      <h2 style={{ marginBottom: "1rem", fontSize: "1.2rem" }}>
        <span style={{ color: "#00ff99" }}>tat@terminal</span>:~$ timer
      </h2>

      <div
        style={{
          fontSize: "3rem",
          letterSpacing: "2px",
          marginBottom: "1.5rem",
        }}
      >
        {formatTime(timeLeft)}
      </div>

      {showControls && (
        <div style={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
          {!isRunning ? (
            <button onClick={handleStart} style={buttonStyle("#00ff99")}>
              Start
            </button>
          ) : (
            <button onClick={handlePause} style={buttonStyle("#ff5555")}>
              Pause
            </button>
          )}
          <button onClick={handleReset} style={buttonStyle("#ffaa00")}>
            Reset
          </button>
        </div>
      )}
    </div>
  );
};

// 🎨 Estilo reutilizable para botones
const buttonStyle = (color: string): React.CSSProperties => ({
  background: "transparent",
  border: `1px solid ${color}`,
  color,
  padding: "0.5rem 1rem",
  borderRadius: "4px",
  cursor: "pointer",
  fontFamily: "'Courier New', monospace",
  transition: "all 0.2s ease",
  textTransform: "uppercase",
  fontWeight: "bold",
  letterSpacing: "1px",
});

export default TerminalTimer;
