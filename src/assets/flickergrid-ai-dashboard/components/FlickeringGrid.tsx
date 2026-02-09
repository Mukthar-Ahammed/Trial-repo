
import React, { useRef, useEffect, useCallback } from 'react';

interface FlickeringGridProps {
  color?: string;
  maxOpacity?: number;
  flickerChance?: number;
  squareSize?: number;
  gridGap?: number;
  className?: string;
}

export const FlickeringGrid: React.FC<FlickeringGridProps> = ({
  color = "#6366f1",
  maxOpacity = 0.1,
  flickerChance = 0.1,
  squareSize = 4,
  gridGap = 4,
  className = "",
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const { width, height } = canvas;
    ctx.clearRect(0, 0, width, height);

    const step = squareSize + gridGap;
    const cols = Math.ceil(width / step);
    const rows = Math.ceil(height / step);

    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        if (Math.random() < flickerChance) {
          const opacity = Math.random() * maxOpacity;
          ctx.fillStyle = `${color}${Math.floor(opacity * 255).toString(16).padStart(2, '0')}`;
          ctx.fillRect(i * step, j * step, squareSize, squareSize);
        } else {
          // Keep some persistence or subtle base
          ctx.fillStyle = `${color}${Math.floor(maxOpacity * 0.1 * 255).toString(16).padStart(2, '0')}`;
          ctx.fillRect(i * step, j * step, squareSize, squareSize);
        }
      }
    }
  }, [color, maxOpacity, flickerChance, squareSize, gridGap]);

  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current;
      if (canvas) {
        canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
        canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    let animationFrameId: number;
    const render = () => {
      draw();
      animationFrameId = window.requestAnimationFrame(render);
    };
    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [draw]);

  return (
    <canvas 
      ref={canvasRef} 
      className={`block w-full h-full pointer-events-none ${className}`} 
    />
  );
};
