import Image from "next/image";

export default function Home() {
  const panels = [
    { src: "/panel1.png", alt: "Comic Panel 1" },
    { src: "/panel2.png", alt: "Comic Panel 2" },
    { src: "/panel3.png", alt: "Comic Panel 3" },
  ];

  return (
    <div className="min-h-screen bg-zinc-950 flex flex-col items-center">
      <header className="py-8 text-zinc-100">
        <h1 className="text-3xl font-bold tracking-tight text-center">Vertical Comic</h1>
      </header>
      
      <main className="flex flex-col gap-0 max-w-[800px] w-full bg-white shadow-2xl">
        {panels.map((panel, index) => (
          <div key={index} className="relative w-full aspect-[1614/4500]">
            <Image
              src={panel.src}
              alt={panel.alt}
              fill
              className="object-contain"
              sizes="(max-width: 800px) 100vw, 800px"
              priority={index === 0}
            />
          </div>
        ))}
      </main>

      <footer className="py-12 text-zinc-500 text-sm">
        <p>© 2026 Joel Fielding</p>
      </footer>
    </div>
  );
}
