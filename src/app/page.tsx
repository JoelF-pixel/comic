export default function Home() {
  return (
    <div className="bg-zinc-950 flex flex-col items-center min-h-screen">
      <header className="sr-only">
        <h1 className="text-3xl font-bold tracking-tight text-center">Vertical Comic</h1>
      </header>
      
      <main className="flex flex-col gap-0 max-w-[800px] w-full bg-white shadow-2xl min-h-[60vh] items-center justify-center p-8">
        <div className="text-center space-y-4 text-zinc-800">
          <h2 className="text-2xl font-bold">Content Temporarily Unavailable</h2>
          <p>We are currently performing maintenance. Please check back later.</p>
        </div>
      </main>

      <footer className="py-12 text-zinc-500 text-sm flex flex-col items-center gap-4">
        <p>© 2026 Joel Fielding</p>
      </footer>
    </div>
  );
}
