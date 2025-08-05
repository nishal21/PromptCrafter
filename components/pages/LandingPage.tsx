import React, { useEffect, useRef } from 'react';
import { ArrowRightIcon } from '../icons/ArrowRightIcon';

interface LandingPageProps {
  onStartCrafting: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onStartCrafting }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    const mouse = { x: -1000, y: -1000, radius: 60 };

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();

    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', (event) => {
        mouse.x = event.clientX;
        mouse.y = event.clientY;
    });
     window.addEventListener('mouseout', () => {
        mouse.x = -1000;
        mouse.y = -1000;
    });

    class Particle {
      x: number;
      y: number;
      size: number;
      baseX: number;
      baseY: number;
      density: number;
      color: string;

      constructor(x: number, y: number, color: string) {
        this.x = x;
        this.y = y;
        this.size = 1.5;
        this.baseX = this.x;
        this.baseY = this.y;
        this.density = (Math.random() * 30) + 1;
        this.color = color;
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
      }

      update() {
        if (!ctx) return;
        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        let forceDirectionX = dx / distance;
        let forceDirectionY = dy / distance;
        let maxDistance = mouse.radius;
        let force = (maxDistance - distance) / maxDistance;
        let directionX = forceDirectionX * force * this.density;
        let directionY = forceDirectionY * force * this.density;

        if (distance < mouse.radius) {
          this.x -= directionX;
          this.y -= directionY;
        } else {
          if (this.x !== this.baseX) {
            let dx = this.x - this.baseX;
            this.x -= dx / 10;
          }
          if (this.y !== this.baseY) {
            let dy = this.y - this.baseY;
            this.y -= dy / 10;
          }
        }
      }
    }

    const init = () => {
      particles = [];
      const particleCount = (canvas.width * canvas.height) / 9000;
      const colors = ['#a855f7', '#3b82f6', '#ec4899', '#6366f1'];
      for (let i = 0; i < particleCount; i++) {
        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height;
        let color = colors[Math.floor(Math.random() * colors.length)];
        particles.push(new Particle(x, y, color));
      }
    };

    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
      }
      connect();
      animationFrameId = requestAnimationFrame(animate);
    };

    const connect = () => {
        if (!ctx) return;
        let opacityValue = 1;
        for (let a = 0; a < particles.length; a++) {
            for (let b = a; b < particles.length; b++) {
                let dx = particles[a].x - particles[b].x;
                let dy = particles[a].y - particles[b].y;
                let distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 90) {
                    opacityValue = 1 - (distance/90);
                    ctx.strokeStyle = `rgba(148, 163, 184, ${opacityValue})`;
                    ctx.lineWidth = 0.5;
                    ctx.beginPath();
                    ctx.moveTo(particles[a].x, particles[a].y);
                    ctx.lineTo(particles[b].x, particles[b].y);
                    ctx.stroke();
                }
            }
        }
    }

    init();
    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <div className="w-full h-full flex-grow flex items-center justify-center text-center -mt-16">
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full z-0 opacity-30 pointer-events-none" />
      <div className="relative z-10 flex flex-col items-center px-4">
        <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-500 leading-tight animated-gradient-text animate-slide-in-bottom" style={{ animationDelay: '0.1s' }}>
          Unlock AI's True Potential
        </h1>
        <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl animate-slide-in-bottom" style={{ animationDelay: '0.3s' }}>
          PromptCrafter AI transforms your raw ideas into expert-level prompts.
          Stop guessing, start creating with unparalleled precision and power.
        </p>
        <button
          onClick={onStartCrafting}
          className="mt-12 flex items-center gap-3 text-lg font-semibold text-white bg-gradient-to-r from-purple-600 to-blue-500 hover:opacity-90 transition-all duration-300 transform hover:scale-105 active:scale-100 shadow-lg hover:shadow-xl shadow-purple-500/20 hover:shadow-purple-500/30 py-4 px-8 rounded-full animate-slide-in-bottom" style={{ animationDelay: '0.5s' }}
        >
          Start Crafting Now
          <ArrowRightIcon className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default LandingPage;