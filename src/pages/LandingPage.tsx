import { useEffect, useRef } from "react";

export default function LandingPage() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const size = 8;
    const numSnakes = 6; // cantidad de snakes en pantalla
    const snakes = Array.from({ length: numSnakes }, () => ({
      body: Array.from({ length: 10 }, (_, i) => ({
        x: Math.floor(Math.random() * (canvas.width / size)),
        y: Math.floor(Math.random() * (canvas.height / size)) + i,
      })),
      dir: randomDir(),
      color: randomGreen(),
      frameDelay: 3 + Math.random() * 8,
      frame: 0,
    }));

    function randomDir() {
      const dirs = [
        { x: 1, y: 0 },
        { x: -1, y: 0 },
        { x: 0, y: 1 },
        { x: 0, y: -1 },
      ];
      return dirs[Math.floor(Math.random() * dirs.length)];
    }

    function randomGreen() {
      const shades = ["#00ff6a", "#00e05a", "#00cc55", "#00ff99"];
      return shades[Math.floor(Math.random() * shades.length)];
    }

    function draw() {
      if (!ctx || !canvas) return;

      ctx.fillStyle = "rgba(0, 0, 0, 0.2)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      snakes.forEach((snake) => {
        ctx.fillStyle = snake.color;

        snake.body.forEach((seg, i) => {
          const alpha = 1 - i / snake.body.length;
          ctx.globalAlpha = alpha;
          ctx.fillRect(seg.x * size, seg.y * size, size - 1, size - 1);
        });

        ctx.globalAlpha = 1;
        snake.frame++;
        if (snake.frame > snake.frameDelay) {
          const head = {
            x: snake.body[0].x + snake.dir.x,
            y: snake.body[0].y + snake.dir.y,
          };

          if (Math.random() < 0.05) snake.dir = randomDir();

          if (head.x < 0) head.x = Math.floor(canvas.width / size);
          if (head.y < 0) head.y = Math.floor(canvas.height / size);
          if (head.x * size > canvas.width) head.x = 0;
          if (head.y * size > canvas.height) head.y = 0;

          snake.body.unshift(head);
          if (snake.body.length > 20) snake.body.pop();

          snake.frame = 0;
        }
      });

      requestAnimationFrame(draw);
    }

    draw();
  }, []);

  return (
    <div className="relative min-h-screen bg-black text-green-400 font-mono overflow-hidden">
      {/* Snake background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-30"
        width={900}
        height={700}
      />

      {/* Overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-pulse tracking-tight">
          TAT: Time Activation Terminal
        </h1>

        <p className="max-w-2xl text-lg md:text-xl text-green-300 mb-6 leading-relaxed">
          Boost your focus and motivation using techniques backed by cognitive
          science — <span className="text-green-400">Pomodoro</span>,{" "}
          <span className="text-green-400">Behavioral Activation</span>, and{" "}
          <span className="text-green-400">Cognitive Offloading</span>.
        </p>

        <button className="bg-green-500 text-black px-6 py-3 rounded-xl text-lg font-bold hover:bg-green-400 transition-transform hover:scale-105">
          Start (It's Free!)
        </button>

        <p className="mt-10 text-sm text-green-600">
          <span className="text-green-400">TAT</span> — scientifically designed
          to help you take back control of your time.
        </p>
      </div>
    </div>
  );
}
