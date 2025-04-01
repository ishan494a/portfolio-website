"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Title() {
  const [text, setText] = useState("");
  const fullText = "Hi, I am Ishan Jain!";
  const wavingHand = "👋";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 100); 
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="title" className="min-h-screen flex items-center justify-center bg-gray text-white">
      <h1 className="text-4xl font-bold flex items-center space-x-2">
        <span>{text}</span>
        <motion.span
          animate={{ rotate: [0, 20, 0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}
        >
          {wavingHand}
        </motion.span>
      </h1>
    </section>
  );
}
