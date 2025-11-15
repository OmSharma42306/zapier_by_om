// using layout effect///////////////////////////////
"use client";

import { useLayoutEffect, useRef, useState } from "react";

export default function ZapCanvas({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);

  const [isPanning, setIsPanning] = useState(false);
  const [origin, setOrigin] = useState({ x: 0, y: 0 });

  // Start centered instantly (no flicker)
  const [translate, setTranslate] = useState({ x: -9999, y: -9999 });

  // Center BEFORE first paint
  useLayoutEffect(() => {
    const vw = window.innerWidth;
    const vh = window.innerHeight;

    const flowWidth = 380; // approximate Zap flow width

    setTranslate({
      x: vw / 2 - flowWidth / 2,
      y: vh / 4,
    });
  }, []);

  function onMouseDown(e: any) {
    setIsPanning(true);
    setOrigin({ x: e.clientX - translate.x, y: e.clientY - translate.y });
  }

  function onMouseMove(e: any) {
    if (!isPanning) return;
    const x = e.clientX - origin.x;
    const y = e.clientY - origin.y;
    setTranslate({ x, y });
  }

  function onMouseUp() {
    setIsPanning(false);
  }

  return (
    <div
      ref={containerRef}
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseUp}
      className="relative w-full h-screen overflow-hidden cursor-grab active:cursor-grabbing"
    >
      {/* Infinite dotted background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, #d1d1d1 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />

      {/* Moveable wrapper */}
      <div
        style={{
          transform: `translate(${translate.x}px, ${translate.y}px)`,
        }}
        className="absolute top-0 left-0"
      >
        {children}
      </div>
    </div>
  );
}
