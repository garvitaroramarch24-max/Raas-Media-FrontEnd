'use client';

import { useEffect, useRef } from 'react';

export default function CinematicHero() {
  const stageRef = useRef<HTMLDivElement>(null);

  function runAnimation(stage: HTMLDivElement) {
    const get = (id: string) => stage.querySelector(`#${id}`) as HTMLElement;
    const ring = stage.querySelector('#ring') as SVGCircleElement;

    const leader    = get('leader');
    const countNum  = get('countNum');
    const spL       = get('sp-left');
    const spR       = get('sp-right');
    const flash     = get('flash');
    const scanline  = get('scanline');
    const reveal    = get('reveal');
    const badge     = get('badge');
    const tRaas     = get('tRaas');
    const tLine     = get('tLine');
    const tLine2    = get('tLine2');
    const tAmp      = get('tAmp');
    const tTag      = get('tTag');
    const replayBtn = get('replayBtn');

    // ── Reset ──────────────────────────────────────────────
    leader.style.cssText   = 'opacity:1;transition:none;';
    spL.style.cssText      = 'opacity:0;transition:none;';
    spR.style.cssText      = 'opacity:0;transition:none;';
    flash.style.cssText    = 'opacity:0;transition:none;';
    scanline.style.cssText = 'opacity:0;transform:translateY(-100%);transition:none;';
    reveal.style.cssText   = 'opacity:0;';
    reveal.classList.remove('rm-flicker');
    badge.style.cssText    = 'opacity:0;transition:none;';
    tRaas.style.cssText    = 'opacity:0;transform:translateY(20px);clip-path:inset(0 100% 0 0);transition:none;';
    tLine.style.cssText    = 'width:0;transition:none;';
    tLine2.style.cssText   = 'width:0;transition:none;';
    tAmp.style.cssText     = 'opacity:0;transform:scaleX(0);transition:none;';
    tTag.style.cssText     = 'opacity:0;transition:none;';
    replayBtn.style.cssText= 'opacity:0;transition:none;';
    countNum.style.opacity = '1';
    ring.style.strokeDashoffset = '0';
    ring.style.transition = 'none';
    countNum.textContent = '3';

    // ── Sprockets ─────────────────────────────────────────
    setTimeout(() => {
      spL.style.cssText = 'opacity:1;transition:opacity 0.3s;';
      spR.style.cssText = 'opacity:1;transition:opacity 0.3s;';
    }, 200);

    // ── Countdown tick ────────────────────────────────────
    function tick(n: number) {
      countNum.style.opacity = '0';
      setTimeout(() => {
        countNum.textContent = String(n);
        countNum.style.transition = 'opacity 0.05s';
        countNum.style.opacity = '1';
      }, 80);
      ring.style.transition = 'stroke-dashoffset 0.92s linear';
      ring.style.strokeDashoffset = '283';
      setTimeout(() => {
        ring.style.transition = 'none';
        ring.style.strokeDashoffset = '0';
      }, 970);
    }

    tick(3);
    setTimeout(() => tick(2), 1000);
    setTimeout(() => tick(1), 2000);

    // ── Cut + reveal ──────────────────────────────────────
    setTimeout(() => {
      countNum.style.opacity = '0';

      // Flash burst
      flash.style.transition = 'opacity 0.04s';
      flash.style.opacity = '0.9';
      setTimeout(() => { flash.style.opacity = '0.3'; }, 60);
      setTimeout(() => { flash.style.opacity = '0.8'; }, 90);
      setTimeout(() => { flash.style.opacity = '0'; flash.style.transition = 'opacity 0.3s'; }, 130);

      leader.style.transition = 'opacity 0.2s';
      leader.style.opacity = '0';

      setTimeout(() => {
        reveal.style.opacity = '1';
        reveal.classList.add('rm-flicker');

        // Scanline sweep
        scanline.style.opacity = '1';
        scanline.style.transition = 'transform 1.2s cubic-bezier(0.4,0,0.2,1)';
        scanline.style.transform = 'translateY(520px)';

        setTimeout(() => { badge.style.transition = 'opacity 0.6s'; badge.style.opacity = '1'; }, 200);

        setTimeout(() => {
          tRaas.style.transition = 'opacity 0.1s, transform 0.8s cubic-bezier(0.2,0,0,1), clip-path 0.9s cubic-bezier(0.2,0,0,1)';
          tRaas.style.opacity = '1';
          tRaas.style.transform = 'translateY(0)';
          tRaas.style.clipPath = 'inset(0 0% 0 0)';
        }, 400);

        setTimeout(() => { tLine.style.transition = 'width 0.6s ease-out'; tLine.style.width = '200px'; }, 800);

        setTimeout(() => {
          tAmp.style.transition = 'opacity 0.3s, transform 0.7s cubic-bezier(0.2,0,0,1)';
          tAmp.style.opacity = '1';
          tAmp.style.transform = 'scaleX(1)';
        }, 1000);

        setTimeout(() => { tLine2.style.transition = 'width 0.6s ease-out'; tLine2.style.width = '200px'; }, 1200);
        setTimeout(() => { tTag.style.transition = 'opacity 1s ease-out'; tTag.style.opacity = '1'; }, 1500);

        setTimeout(() => {
          reveal.classList.remove('rm-flicker');
          replayBtn.style.transition = 'opacity 1s';
          replayBtn.style.opacity = '1';
        }, 1800);
      }, 300);
    }, 3000);
  }

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;
    runAnimation(stage);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Cormorant+Garamond:wght@300;400&display=swap');

        #rm-stage {
          width: 100%;
          min-height: 520px;
          background: #0a0a08;
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        #rm-stage .rm-grain {
          position: absolute; inset: 0; pointer-events: none; z-index: 10; opacity: 0.07;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
        }
        #rm-stage .rm-vignette {
          position: absolute; inset: 0; pointer-events: none; z-index: 15;
          background: radial-gradient(ellipse at center, transparent 50%, #0a0a08 100%);
        }
        #rm-stage .rm-sprockets {
          position: absolute; top: 0; bottom: 0; width: 36px; z-index: 20;
          display: flex; flex-direction: column; justify-content: space-around; padding: 12px 0;
        }
        #rm-stage #sp-left  { left: 0;  background: #111; border-right: 1px solid #2a2a1a; }
        #rm-stage #sp-right { right: 0; background: #111; border-left:  1px solid #2a2a1a; }
        #rm-stage .rm-hole {
          width: 18px; height: 14px; background: #0a0a08;
          border: 1px solid #333; border-radius: 2px; margin: 0 auto;
        }

        /* Leader */
        #rm-stage #leader {
          position: absolute; inset: 0; z-index: 30; background: #0a0a08;
          display: flex; flex-direction: column; align-items: center; justify-content: center;
        }
        #rm-stage .rm-circle { position: relative; width: 240px; height: 240px; }
        #rm-stage .rm-circle svg { width: 100%; height: 100%; transform: rotate(-90deg); }
        #rm-stage .rm-ring-bg   { fill: none; stroke: #1a1a10; stroke-width: 3; }
        #rm-stage .rm-ring-fill {
          fill: none; stroke: #c9a227; stroke-width: 2;
          stroke-dasharray: 283; stroke-dashoffset: 0; stroke-linecap: round;
        }
        #rm-stage #countNum {
          position: absolute; inset: 0; display: flex; align-items: center; justify-content: center;
          font-family: 'Playfair Display', serif; font-size: 96px; font-weight: 900;
          color: #c9a227; line-height: 1;
        }
        #rm-stage .rm-cross { position: absolute; background: #c9a227; opacity: 0.2; }
        #rm-stage .rm-cross.h { top: 50%; left: 10%; right: 10%; height: 1px; transform: translateY(-50%); }
        #rm-stage .rm-cross.v { left: 50%; top: 10%; bottom: 10%; width: 1px; transform: translateX(-50%); }
        #rm-stage .rm-corner {
          position: absolute; width: 8px; height: 8px;
          border-color: #c9a227; border-style: solid; opacity: 0.5;
        }
        #rm-stage .rm-corner.tl { top: 20px;    left: 48px;  border-width: 1px 0 0 1px; }
        #rm-stage .rm-corner.tr { top: 20px;    right: 48px; border-width: 1px 1px 0 0; }
        #rm-stage .rm-corner.bl { bottom: 20px; left: 48px;  border-width: 0 0 1px 1px; }
        #rm-stage .rm-corner.br { bottom: 20px; right: 48px; border-width: 0 1px 1px 0; }
        #rm-stage .rm-leader-text {
          margin-top: 28px; font-family: 'Cormorant Garamond', serif;
          font-size: 11px; letter-spacing: 6px; color: #444; text-transform: uppercase;
        }

        /* Flash */
        #rm-stage #flash {
          position: absolute; inset: 0; background: #fff8e0;
          z-index: 50; opacity: 0; pointer-events: none;
        }

        /* Scanline */
        #rm-stage #scanline {
          position: absolute; left: 0; right: 0; height: 2px; z-index: 45; opacity: 0;
          background: linear-gradient(90deg, transparent, #c9a227 30%, #fff8d0 50%, #c9a227 70%, transparent);
          box-shadow: 0 0 20px 4px rgba(201,162,39,0.5);
          transform: translateY(-100%);
        }

        /* Reveal */
        #rm-stage #reveal {
          position: absolute; inset: 0; z-index: 40; opacity: 0;
          display: flex; flex-direction: column; align-items: center; justify-content: center;
        }
        @keyframes rm-flicker {
          0%,100%{opacity:1} 5%{opacity:.94} 10%{opacity:1} 15%{opacity:.97}
          20%{opacity:1} 50%{opacity:.96} 55%{opacity:1} 70%{opacity:.98} 75%{opacity:1}
        }
        #rm-stage #reveal.rm-flicker { animation: rm-flicker 0.5s steps(1) infinite; }

        #rm-stage #badge {
          display: inline-block; border: 1px solid rgba(201,162,39,0.3);
          padding: 3px 12px; font-family: 'Cormorant Garamond', serif;
          font-size: 10px; letter-spacing: 5px; color: #c9a227;
          text-transform: uppercase; margin-bottom: 18px; opacity: 0;
        }
        #rm-stage #tRaas {
          font-family: 'Playfair Display', serif; font-size: clamp(36px,7vw,64px);
          font-weight: 900; color: #f0ece0; letter-spacing: 10px; text-transform: uppercase;
          opacity: 0; transform: translateY(20px); clip-path: inset(0 100% 0 0);
        }
        #rm-stage .rm-line {
          height: 1px; margin: 14px auto;
          background: linear-gradient(90deg, transparent, #c9a227, transparent);
          opacity: 0.7;
        }
        #rm-stage #tAmp {
          font-family: 'Cormorant Garamond', serif; font-size: clamp(18px,3vw,28px);
          font-weight: 300; color: #c9a227; letter-spacing: 6px; margin: 6px 0;
          opacity: 0; transform: scaleX(0);
        }
        #rm-stage #tTag {
          font-family: 'Cormorant Garamond', serif; font-size: clamp(11px,1.6vw,14px);
          letter-spacing: 8px; color: #555; text-transform: uppercase;
          margin-top: 16px; opacity: 0;
        }
        #rm-stage #replayBtn {
          position: absolute; bottom: 14px; right: 20px; z-index: 60;
          background: none; border: none; cursor: pointer; opacity: 0;
          font-family: 'Cormorant Garamond', serif; font-size: 11px;
          letter-spacing: 3px; color: #333; text-transform: uppercase;
          transition: color 0.3s;
        }
        #rm-stage #replayBtn:hover { color: #c9a227; }
      `}</style>

      <div id="rm-stage" ref={stageRef}>
        <div className="rm-grain" />
        <div className="rm-vignette" />

        {/* Sprockets */}
        <div id="sp-left" className="rm-sprockets">
          {Array.from({ length: 9 }).map((_, i) => <div key={i} className="rm-hole" />)}
        </div>
        <div id="sp-right" className="rm-sprockets">
          {Array.from({ length: 9 }).map((_, i) => <div key={i} className="rm-hole" />)}
        </div>

        {/* Leader / Countdown */}
        <div id="leader">
          <div className="rm-corner tl" /><div className="rm-corner tr" />
          <div className="rm-corner bl" /><div className="rm-corner br" />
          <div className="rm-circle">
            <svg viewBox="0 0 100 100">
              <circle className="rm-ring-bg"   cx="50" cy="50" r="45" />
              <circle className="rm-ring-fill" cx="50" cy="50" r="45" id="ring" />
            </svg>
            <div className="rm-cross h" />
            <div className="rm-cross v" />
            <div id="countNum">3</div>
          </div>
          <div className="rm-leader-text">RAAS MEDIA — PRODUCTION — 2024</div>
        </div>

        {/* Flash */}
        <div id="flash" />

        {/* Scanline */}
        <div id="scanline" />

        {/* Title Reveal */}
        <div id="reveal">
          <div id="badge">Est. 2024</div>
          <div id="tRaas">RAAS MEDIA</div>
          <div id="tLine" className="rm-line" />
          <div id="tAmp">&amp; ENTERTAINMENT</div>
          <div id="tLine2" className="rm-line" />
          <div id="tTag">We Support You Till The Last</div>
        </div>

        {/* Replay */}
        <button id="replayBtn" onClick={() => stageRef.current && runAnimation(stageRef.current)}>
          ↺ replay
        </button>
      </div>
    </>
  );
}
