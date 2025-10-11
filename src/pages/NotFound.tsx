import { useEffect, useState } from "react";

export default function NotFound() {
  const messageLines = [
    `█████████████████████████████████████`,
    `ERROR 404: PAGE NOT FOUND`,
    `TAT SYSTEM MESSAGE:`,
    `The page you tried to access does not exist.`,
    `Tip: Return to the Dashboard or check the URL.`,
    `█████████████████████████████████████`,
  ];

  const [lines, setLines] = useState<string[]>([]);
  const [lineIndex, setLineIndex] = useState(0);

  // Typing effect
  useEffect(() => {
    if (lineIndex < messageLines.length) {
      const timer = setTimeout(() => {
        setLines((prev) => [...prev, messageLines[lineIndex]]);
        setLineIndex(lineIndex + 1);
      }, 400); // 400ms per line
      return () => clearTimeout(timer);
    }
  }, [lineIndex]);

  // Snake background
  const [snakePos, setSnakePos] = useState(0);
  useEffect(() => {
    const snakeTimer = setInterval(() => {
      setSnakePos((prev) => (prev + 1) % 50);
    }, 100);
    return () => clearInterval(snakeTimer);
  }, []);

  return (
    <div className="min-h-screen bg-black font-terminal text-terminal-green relative overflow-hidden flex flex-col items-center justify-center p-6">
      {/* Snake background */}
      <div className="absolute inset-0 opacity-20 text-green-700 text-lg">
        {Array.from({ length: 15 }).map((_, i) => (
          <div key={i}>{" ".repeat((snakePos + i * 4) % 50) + "⣿⣿"}</div>
        ))}
      </div>

      {/* Terminal panel */}
      <div className="relative z-10 bg-terminal-dark border border-green-600 rounded-lg p-6 shadow-lg w-full max-w-2xl">
        <div className="ascii-wrapper">
          {lines.map((line, idx) => (
            <div key={idx} className="terminal-line slide-left">
              {line}
              <span className="blink">_</span>
            </div>
          ))}
        </div>

        {/* Return button */}
        {lineIndex >= messageLines.length && (
          <div className="mt-6 flex justify-center">
            <button
              className="btn btn-green pulse"
              onClick={() => (window.location.href = "/dashboard")}
            >
              Go to Dashboard
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
