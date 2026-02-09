import React, { createContext, useContext, useRef, memo } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { cn } from "@/lib/utils";

const TextGradientScrollContext = createContext({});

function useGradientScroll() {
  const context = useContext(TextGradientScrollContext);
  return context;
}

const TextGradientScroll = memo(function TextGradientScroll({
  text,
  className,
  type = "letter",
  textOpacity = "soft",
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });

  const words = text.split(" ");

  return (
    <TextGradientScrollContext.Provider value={{ textOpacity, type }}>
      <p ref={ref} className={cn("relative flex m-0 flex-wrap gap-x-1.5 gap-y-0", className)}>
        {words.map((word, i) => {
          const start = i / words.length;
          const end = start + 1 / words.length;
          return type === "word" ? (
            <Word key={i} progress={scrollYProgress} range={[start, end]}>
              {word}
            </Word>
          ) : (
            <Letter key={i} progress={scrollYProgress} range={[start, end]}>
              {word}
            </Letter>
          );
        })}
      </p>
    </TextGradientScrollContext.Provider>
  );
});

export { TextGradientScroll };

const Word = memo(({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1]);

  return (
    <span className="relative">
      <span style={{ position: "absolute", opacity: 0.1 }}>{children}</span>
      <motion.span style={{ transition: "all .5s", opacity: opacity }}>
        {children}
      </motion.span>
    </span>
  );
});

const Letter = memo(({ children, progress, range }) => {
  if (typeof children === "string") {
    const amount = range[1] - range[0];
    const step = amount / children.length;

    return (
      <span className="relative">
        {children.split("").map((char, i) => {
          const start = range[0] + i * step;
          const end = range[0] + (i + 1) * step;
          return (
            <Char key={`c_${i}`} progress={progress} range={[start, end]}>
              {char}
            </Char>
          );
        })}
      </span>
    );
  }
});

const Char = memo(({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  const { textOpacity } = useGradientScroll();

  return (
    <span>
      <span
        className={cn("absolute", {
          "opacity-0": textOpacity == "none",
          "opacity-10": textOpacity == "soft",
          "opacity-30": textOpacity == "medium",
        })}
      >
        {children}
      </span>
      <motion.span
        style={{
          transition: "all .5s",
          opacity: opacity,
        }}
      >
        {children}
      </motion.span>
    </span>
  );
});

