import { useEffect, useRef, useState } from 'react';
// import anime from 'animejs';
import anime from "animejs/lib/anime.es.js";

export function SplashScreen({ onComplete }) {
  const [isVisible, setIsVisible] = useState(true);
  const splashRef = useRef(null);

  // Smooth, premium ingredient shapes mapped with exact float/drop behaviors
  const ingredientsData = [
    // 1. Big green leaf
    { id: 1, path: "M12 2L8 6C8 6 6 10 12 18C18 10 16 6 16 6L12 2Z", color: "#4ade80", sizeClass: "w-8 h-8", startX: -110, dropX: -30, dropY: 135, startR: -60, dropR: -15 },
    // 2. Golden grain/seed
    { id: 2, path: "M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z", color: "#fbbf24", sizeClass: "w-4 h-4", startX: -55, dropX: -15, dropY: 145, startR: 20, dropR: 45 },
    // 3. Warm nut shape
    { id: 3, path: "M2 12C2 12 6 22 12 22C18 22 22 12 22 12C22 12 18 2 12 2C6 2 2 12 2 12Z", color: "#b45309", sizeClass: "w-6 h-6", startX: 0, dropX: 5, dropY: 140, startR: -10, dropR: 80 },
    // 4. Drop of oil / natural extract
    { id: 4, path: "M12 2C12 2 4 8 4 14C4 18.4183 7.58172 22 12 22C16.4183 22 20 18.4183 20 14C20 8 12 2 12 2Z", color: "#f59e0b", sizeClass: "w-5 h-5", startX: 55, dropX: 25, dropY: 155, startR: 15, dropR: -20 },
    // 5. Small dark green leaf
    { id: 5, path: "M12 2L8 6C8 6 6 10 12 18C18 10 16 6 16 6L12 2Z", color: "#22c55e", sizeClass: "w-5 h-5", startX: 110, dropX: 45, dropY: 145, startR: 45, dropR: -30 },
  ];

  useEffect(() => {
    if (!splashRef.current) return;

    // Initially position all ingredients out of sight but with starting offsets
    anime.set('.ingredient', {
      translateX: (el) => el.dataset.startX + 'px',
      translateY: '0px',
      rotate: (el) => el.dataset.startR + 'deg',
      opacity: 0,
      scale: 1,
    });

    const tl = anime.timeline({
      complete: () => {
        // Yield to the parent router's UI completely
        setIsVisible(false);
        if (onComplete) {
          onComplete();
        }
      }
    });

    tl
      // STEP 1: Ingredients appear above bowl (opacity 0 -> 1) and float up slightly
      .add({
        targets: '.ingredient',
        opacity: [0, 1],
        translateY: ['0px', '-25px'], // Floating effect up
        duration: 800,
        delay: anime.stagger(120),
        easing: 'easeOutSine'
      })
      
      // STEP 2: Ingredients drop into bowl with a negative -> 0 translation equivalent (offset down)
      .add({
        targets: '.ingredient',
        translateX: (el) => el.dataset.dropX + 'px',
        translateY: (el) => el.dataset.dropY + 'px', // Drop target
        rotate: (el) => el.dataset.dropR + 'deg',
        duration: 700,
        delay: anime.stagger(100),
        easing: 'easeInQuad'
      }, '+=100') // Give them a tiny hover hold
      
      // STEP 3: Bounce/settle effect using Elastic Out easing
      .add({
        targets: '.ingredient',
        scale: [1, 1.1, 1],
        duration: 700,
        easing: 'easeOutElastic(1, .8)',
        delay: anime.stagger(60)
      }, '-=150')
      
      // STEP 4: Bowl highlight
      .add({
        targets: '#bowl-wrapper',
        scale: [1, 1.05, 1],
        opacity: [0.85, 1],
        duration: 800,
        easing: 'easeOutQuad'
      }, '-=600')
      
      // STEP 5: Text reveal ("Origihn" then subtitle)
      .add({
        targets: '.title-origihn',
        opacity: [0, 1],
        translateY: ['25px', '0px'],
        duration: 800,
        easing: 'easeOutCubic'
      }, '-=400')
      .add({
        targets: '.subtitle-protein',
        opacity: [0, 1],
        translateY: ['10px', '0px'],
        duration: 600,
        easing: 'easeOutCubic'
      }, '-=600')
      
      // STEP 6: Fade out entire splash screen smoothly
      .add({
        targets: splashRef.current,
        opacity: [1, 0],
        duration: 900,
        easing: 'easeInOutSine',
        delay: 500 // Holds the final screen state for half a second before exiting
      });

    return () => {
      anime.remove('.ingredient');
      anime.remove('#bowl-wrapper');
      anime.remove('.title-origihn');
      anime.remove('.subtitle-protein');
      anime.remove(splashRef.current);
    };
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div 
      ref={splashRef}
      className="fixed inset-0 z-[100] w-full h-[100vh] bg-[#F7F5F0] overflow-hidden leading-none" 
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >
      {/* Central Wrapper (position: relative) */}
      <div className="relative flex flex-col items-center w-72 h-[350px]">
        
        {/* Ingredients Layer */}
        {/* A central pinpoint at top of wrapper to serve as `absolute` offset basis */}
        <div className="absolute top-0 left-1/2 w-[1px] h-[1px] z-10 pointer-events-none">
          {ingredientsData.map((ing) => (
            <div 
              key={ing.id} 
              className="absolute top-0" 
              style={{ left: '-0.75rem' }} // Roughly visually centering average SVG width
            >
              <svg 
                className={`ingredient opacity-0 drop-shadow-md ${ing.sizeClass}`}
                viewBox="0 0 24 24"
                fill={ing.color}
                data-start-x={ing.startX}
                data-drop-x={ing.dropX}
                data-drop-y={ing.dropY}
                data-start-r={ing.startR}
                data-drop-r={ing.dropR}
              >
                <path d={ing.path} />
              </svg>
            </div>
          ))}
        </div>

        {/* Bowl Layer */}
        {/* Placed physically down using margin so the structure takes up natural space */}
        <div id="bowl-wrapper" className="relative mt-20 mb-6 w-40 h-24 flex items-center justify-center transform-gpu" style={{ opacity: 0.85 }}>
          {/* Back of the bowl (creates realistic 3D shadow basin) */}
          <div className="bowl-back absolute bottom-2 w-[8.5rem] h-[3.5rem] bg-[#FAF9F6]/10 rounded-b-full shadow-inner z-[5]" />
          
          {/* Front of the bowl (hides the layered ingredients landing directly behind it) */}
          <div className="bowl-front absolute bottom-0 w-32 h-16 bg-[#FCFAF6] rounded-b-full border-b-[3px] border-l-[2px] border-r-[2px] border-[#4B2E2B] shadow-lg shadow-origihn-dark/20 overflow-hidden z-[20]">
            {/* Soft inner curve rim gradient */}
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-b from-[#4B2E2B]/15 to-transparent" />
          </div>
        </div>

        {/* Text Block Layer */}
        <div className="flex flex-col items-center text-center mt-2 w-full z-10">
          <h1 className="title-origihn font-serif text-5xl md:text-6xl text-origihn-textPrimary tracking-wide opacity-0">
            Kitsta
          </h1>
          <p className="subtitle-protein font-sans mt-3 text-sm md:text-base text-origihn-red tracking-[0.3em] uppercase opacity-0 font-semibold leading-normal">
            Protein Brand
          </p>
        </div>

      </div>
    </div>
  );
}
