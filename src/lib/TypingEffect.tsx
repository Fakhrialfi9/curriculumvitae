import React, { useState, useEffect, useRef } from "react";

const TypingEffect = ({ text = "", speed = 50, className = "", style = {} }) => {
  const [displayText, setDisplayText] = useState("");
  const textRef = useRef(text);
  const indexRef = useRef(0);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    textRef.current = text;
  }, [text]);

  useEffect(() => {
    const typingEffect = () => {
      const text = textRef.current;
      const index = indexRef.current;

      if (index >= text.length) {
        return;
      }

      setDisplayText((prev) => prev + text[index]);
      indexRef.current += 1;

      timerRef.current = window.setTimeout(typingEffect, speed);
    };

    typingEffect();

    return () => {
      if (timerRef.current !== null) {
        clearTimeout(timerRef.current);
      }
    };
  }, [speed]);

  return (
    <span className={className} style={style}>
      {displayText}
    </span>
  );
};

export default TypingEffect;
