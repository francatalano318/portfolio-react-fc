import { useEffect, useState } from "react";

const colors = ["#0077ff", "#ff4d4f", "#ffa940", "#36cfc9", "#9254de"];

function AnimatedText({ text, speed = 120 }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index >= text.length) return;

    const timeout = setTimeout(() => {
      setIndex((prev) => prev + 1);
    }, speed);

    return () => clearTimeout(timeout);
  }, [index, text, speed]);

  return (
    <span>
      {text.slice(0, index).split("").map((char, i) => (
        <span
          key={i}
          className="animated-letter"
          style={{ color: colors[i % colors.length] }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </span>
  );
}

export default AnimatedText;
