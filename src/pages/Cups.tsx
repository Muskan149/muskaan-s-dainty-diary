import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const cupLabels = ["Curiosity", "Creation", "Love", "Health", "Wealth"];

const TeaCup = ({ 
  label, 
  isPouring, 
  isFilled, 
  onClick 
}: { 
  label: string; 
  isPouring: boolean; 
  isFilled: boolean;
  onClick: () => void;
}) => {
  const accentColors: Record<string, string> = {
    Curiosity: "hsl(var(--accent-yellow))",
    Creation: "hsl(var(--accent-peach))",
    Love: "hsl(var(--accent-pink))",
    Health: "hsl(var(--accent-green))",
    Wealth: "hsl(var(--accent-yellow))",
  };

  const accent = accentColors[label] || "hsl(var(--accent-peach))";

  return (
    <motion.div
      className="flex flex-col items-center cursor-pointer group"
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="relative w-24 h-28 md:w-32 md:h-36">
        {/* Steam animation */}
        <AnimatePresence>
          {isFilled && (
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 flex gap-1">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-1 bg-muted-foreground/20 rounded-full"
                  initial={{ height: 0, opacity: 0, y: 0 }}
                  animate={{ 
                    height: [8, 16, 8],
                    opacity: [0.3, 0.6, 0],
                    y: [-5, -20, -30]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.3,
                    ease: "easeOut"
                  }}
                />
              ))}
            </div>
          )}
        </AnimatePresence>

        {/* Cup SVG */}
        <svg viewBox="0 0 100 120" className="w-full h-full">
          {/* Cup body */}
          <path
            d="M15 30 L20 100 Q20 110 50 110 Q80 110 80 100 L85 30 Z"
            fill="hsl(var(--background))"
            stroke="hsl(var(--foreground))"
            strokeWidth="1.5"
          />
          
          {/* Cup rim */}
          <ellipse
            cx="50"
            cy="30"
            rx="37"
            ry="8"
            fill="hsl(var(--background))"
            stroke="hsl(var(--foreground))"
            strokeWidth="1.5"
          />
          
          {/* Victorian pattern on cup */}
          <path
            d="M25 50 Q35 45 45 50 Q55 55 65 50 Q75 45 80 50"
            fill="none"
            stroke={accent}
            strokeWidth="1"
            opacity="0.6"
          />
          <path
            d="M22 70 Q35 65 50 70 Q65 75 78 70"
            fill="none"
            stroke={accent}
            strokeWidth="1"
            opacity="0.6"
          />
          
          {/* Handle */}
          <path
            d="M85 40 Q105 45 105 65 Q105 85 85 90"
            fill="none"
            stroke="hsl(var(--foreground))"
            strokeWidth="1.5"
          />
          
          {/* Tea liquid */}
          <AnimatePresence>
            {(isPouring || isFilled) && (
              <motion.ellipse
                cx="50"
                cy="50"
                rx="30"
                initial={{ ry: 0, opacity: 0 }}
                animate={{ ry: isFilled ? 25 : 15, opacity: 0.8 }}
                exit={{ ry: 0, opacity: 0 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                fill="hsl(25, 60%, 35%)"
              />
            )}
          </AnimatePresence>
          
          {/* Saucer */}
          <ellipse
            cx="50"
            cy="115"
            rx="45"
            ry="5"
            fill="hsl(var(--background))"
            stroke="hsl(var(--foreground))"
            strokeWidth="1"
          />
        </svg>
      </div>
      
      <motion.span 
        className="mt-3 font-serif text-sm md:text-base tracking-wide text-foreground/80 group-hover:text-foreground transition-colors"
        style={{ color: isFilled ? accent : undefined }}
      >
        {label}
      </motion.span>
    </motion.div>
  );
};

const Teapot = ({ 
  isPouring, 
  targetCup 
}: { 
  isPouring: boolean; 
  targetCup: number | null;
}) => {
  const cupPositions = [0, 1, 2, 3, 4];
  const targetX = targetCup !== null ? (targetCup - 2) * 140 : 0;

  return (
    <motion.div
      className="absolute top-0 left-1/2 z-10"
      initial={{ x: "-50%", y: 0 }}
      animate={{
        x: isPouring ? `calc(-50% + ${targetX}px)` : "-50%",
        y: isPouring ? 20 : 0,
        rotate: isPouring ? 45 : 0,
      }}
      transition={{ 
        type: "spring", 
        stiffness: 100, 
        damping: 15,
        duration: 0.8 
      }}
    >
      <svg viewBox="0 0 140 100" className="w-32 h-24 md:w-40 md:h-28">
        {/* Teapot body */}
        <ellipse
          cx="70"
          cy="55"
          rx="45"
          ry="35"
          fill="hsl(var(--background))"
          stroke="hsl(var(--foreground))"
          strokeWidth="1.5"
        />
        
        {/* Victorian pattern */}
        <ellipse
          cx="70"
          cy="55"
          rx="35"
          ry="25"
          fill="none"
          stroke="hsl(var(--accent-peach))"
          strokeWidth="0.5"
          opacity="0.5"
        />
        
        {/* Lid */}
        <ellipse
          cx="70"
          cy="22"
          rx="25"
          ry="6"
          fill="hsl(var(--background))"
          stroke="hsl(var(--foreground))"
          strokeWidth="1.5"
        />
        <circle
          cx="70"
          cy="15"
          r="5"
          fill="hsl(var(--background))"
          stroke="hsl(var(--foreground))"
          strokeWidth="1.5"
        />
        
        {/* Spout */}
        <path
          d="M115 50 Q130 40 135 30 Q138 25 135 22"
          fill="none"
          stroke="hsl(var(--foreground))"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        
        {/* Handle */}
        <path
          d="M25 40 Q5 50 5 65 Q5 80 25 85"
          fill="none"
          stroke="hsl(var(--foreground))"
          strokeWidth="1.5"
        />
        
        {/* Pouring stream */}
        <AnimatePresence>
          {isPouring && (
            <motion.path
              d="M135 22 Q140 50 130 120"
              fill="none"
              stroke="hsl(25, 60%, 35%)"
              strokeWidth="3"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.8 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            />
          )}
        </AnimatePresence>
      </svg>
    </motion.div>
  );
};

const Cups = () => {
  const [filledCups, setFilledCups] = useState<Set<number>>(new Set());
  const [pouringCup, setPouringCup] = useState<number | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleCupClick = async (index: number) => {
    if (pouringCup !== null || filledCups.has(index)) return;

    setPouringCup(index);

    // Play pouring sound
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(() => {});
    }

    // Wait for animation
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setFilledCups((prev) => new Set([...prev, index]));
    setPouringCup(null);
  };

  const resetCups = () => {
    setFilledCups(new Set());
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-24">
      {/* Ambient pouring sound */}
      <audio
        ref={audioRef}
        src="https://assets.mixkit.co/active_storage/sfx/2430/2430-preview.mp3"
        preload="auto"
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="font-serif text-3xl md:text-4xl tracking-wide text-foreground mb-4">
          Cups
        </h1>
        <p className="text-muted-foreground max-w-md mx-auto text-sm md:text-base leading-relaxed">
          These are the metaphorical cups I wish to fill this season. 
          <br />
          <span className="italic">Click a cup to pour some chai.</span>
        </p>
      </motion.div>

      <div className="relative w-full max-w-4xl">
        {/* Teapot */}
        <Teapot isPouring={pouringCup !== null} targetCup={pouringCup} />

        {/* Cups row */}
        <motion.div 
          className="flex flex-wrap justify-center gap-6 md:gap-10 mt-32 md:mt-40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          {cupLabels.map((label, index) => (
            <TeaCup
              key={label}
              label={label}
              isPouring={pouringCup === index}
              isFilled={filledCups.has(index)}
              onClick={() => handleCupClick(index)}
            />
          ))}
        </motion.div>
      </div>

      {/* Reset button */}
      <AnimatePresence>
        {filledCups.size > 0 && (
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            onClick={resetCups}
            className="mt-16 text-sm text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4"
          >
            empty the cups
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Cups;
