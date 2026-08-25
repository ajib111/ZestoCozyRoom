import { useEffect, useRef, useState } from "react";

function Canvas() {
  const canvasRef = useRef(null);
  const isDrawing = useRef(false);
  const [hasDrawing, setHasDrawing] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    const resizeCanvas = () => {
      const { width, height } = canvas.getBoundingClientRect();
      const pixelRatio = window.devicePixelRatio || 1;

      canvas.width = width * pixelRatio;
      canvas.height = height * pixelRatio;
      context.scale(pixelRatio, pixelRatio);
      context.lineCap = "round";
      context.lineJoin = "round";
      context.strokeStyle = "#5b3a2e";
      context.lineWidth = 3;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    return () => window.removeEventListener("resize", resizeCanvas);
  }, []);

  const getPoint = (event) => {
    const bounds = canvasRef.current.getBoundingClientRect();

    return {
      x: event.clientX - bounds.left,
      y: event.clientY - bounds.top,
    };
  };

  const startDrawing = (event) => {
    const context = canvasRef.current.getContext("2d");
    const { x, y } = getPoint(event);

    event.currentTarget.setPointerCapture(event.pointerId);
    isDrawing.current = true;
    context.beginPath();
    context.moveTo(x, y);
  };

  const draw = (event) => {
    if (!isDrawing.current) return;

    const context = canvasRef.current.getContext("2d");
    const { x, y } = getPoint(event);

    context.lineTo(x, y);
    context.stroke();
    setHasDrawing(true);
  };

  const stopDrawing = () => {
    isDrawing.current = false;
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    context.clearRect(0, 0, canvas.width, canvas.height);
    setHasDrawing(false);
  };

  return (
    <main className="zesto-page-shell zesto-canvas-shell">
      <section className="w-full max-w-xl rounded-[1.75rem] border border-white/45 bg-[#fff6e4]/75 p-4 text-[#4e3029] shadow-[0_18px_45px_rgba(59,36,28,0.25)] backdrop-blur-sm animate-[zesto-page-enter_260ms_ease-out_both] sm:p-6">
        <div className="mb-4 flex items-center justify-between gap-4">
          <div>
            <p className="zesto-page-kicker mt-0">Canvas</p>
            <h1 className="mt-1 text-xl font-bold sm:text-2xl">Leave a little sketch.</h1>
          </div>
          <span className="text-3xl" aria-hidden="true">✏️</span>
        </div>

        <canvas
          ref={canvasRef}
          aria-label="Drawing canvas"
          onPointerDown={startDrawing}
          onPointerMove={draw}
          onPointerUp={stopDrawing}
          onPointerCancel={stopDrawing}
          className="h-72 w-full touch-none rounded-2xl border-2 border-dashed border-[#d8c3a5] bg-[#fffdf7] shadow-inner sm:h-80"
        />

        <div className="mt-4 flex items-center justify-between gap-3">
          <p className="text-sm text-[#755649]">Use your finger or mouse to draw.</p>
          <button
            type="button"
            onClick={clearCanvas}
            disabled={!hasDrawing}
            className="rounded-xl bg-[#8d624e] px-4 py-2 text-sm font-semibold text-white transition active:scale-95 disabled:cursor-not-allowed disabled:opacity-45"
          >
            Clear
          </button>
        </div>
      </section>
    </main>
  );
}

export default Canvas;
