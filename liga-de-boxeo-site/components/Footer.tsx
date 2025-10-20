export default function Footer() {
  return (
    <footer className="border-t border-zinc-800/60 mt-16">
      <div className="mx-auto max-w-7xl px-4 py-10 text-xs text-zinc-400">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Liga de Boxeo. All rights reserved.</p>
          <p className="text-zinc-500">Tech‑forward, media‑driven boxing league.</p>
        </div>
      </div>
    </footer>
  );
}
