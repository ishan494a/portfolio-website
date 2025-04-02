"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ProfileCard from "./ProfileCard";

export default function Title() {
  const [text, setText] = useState("");
  const fullText = "I am Ishan!";
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
    <section id="title" className="min-h-screen flex items-center justify-center bg-gray text-white px-6 py-12">
      <div className="w-full max-w-6xl flex flex-col md:flex-row justify-around items-center gap-16 md:gap-8">
        <div className="flex-1 flex justify-center md:justify-start text-center md:text-left min-w-[250px]">
          <h1 className="text-4xl font-bold flex items-center space-x-2 min-w-[250px]">
            <span>{text}</span>
            <motion.span
              animate={{ rotate: [0, 20, 0, -20, 0] }}
              transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}
            >
              {wavingHand}
            </motion.span>
          </h1>
        </div>
        <div className="flex-1 flex justify-center md:justify-end max-w-xs w-full min-w-[250px]">
          <ProfileCard />
        </div>
      </div>
    </section>
  );
}
