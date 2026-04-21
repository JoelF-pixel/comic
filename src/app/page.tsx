'use client';

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [showEasterEgg, setShowEasterEgg] = useState(false);

  const panels = [
    { src: "/panel1.png", alt: "Comic Panel 1" },
    { src: "/panel2.png", alt: "Comic Panel 2" },
    { src: "/panel3.png", alt: "Comic Panel 3" },
  ];

  return (
    <div className={`bg-zinc-950 flex flex-col items-center ${showEasterEgg ? "h-screen overflow-hidden" : "min-h-screen"}`}>
      <header className="sr-only">
        <h1 className="text-3xl font-bold tracking-tight text-center">Vertical Comic</h1>
      </header>
      
      <main className={`flex flex-col gap-0 max-w-[800px] w-full bg-white shadow-2xl ${showEasterEgg ? "flex-1 min-h-0" : ""}`}>
        {showEasterEgg ? (
          <div className="relative w-full h-full block">
            <Image
              src="/comic.gif"
              alt="Easter Egg Comic"
              fill
              unoptimized
              className="object-contain"
              sizes="(max-width: 800px) 100vw, 800px"
              priority
            />
          </div>
        ) : (
          panels.map((panel, index) => (
            <div key={index} className="relative w-full aspect-[1614/4500] block">
              <Image
                src={panel.src}
                alt={panel.alt}
                fill
                className="object-contain w-full h-auto"
                sizes="(max-width: 800px) 100vw, 800px"
                priority={index === 0}
              />
            </div>
          ))
        )}
      </main>

      <footer className={`${showEasterEgg ? "py-4" : "py-12"} text-zinc-500 text-sm flex flex-col items-center gap-4`}>
        <p>© 2026 Joel Fielding</p>
        <button
          onClick={() => setShowEasterEgg(!showEasterEgg)}
          className="flex items-center gap-2 cursor-pointer group"
          title="Easter Egg"
        >
          <div className="w-4 h-4 rounded-full bg-green-500 group-hover:bg-green-400 transition-colors animate-glow" />
          <span className="text-xs transition-colors group-hover:text-zinc-400">click for bonus</span>
        </button>
      </footer>
    </div>
  );
}
