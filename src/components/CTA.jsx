export default function CTA() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 pb-24">
      <div className="overflow-hidden rounded-3xl border border-cyan-300/20 bg-gradient-to-br from-cyan-500/10 via-sky-500/10 to-indigo-500/10 p-8 text-center backdrop-blur">
        <h3 className="text-2xl font-semibold md:text-3xl">Bring holographic identity to your product</h3>
        <p className="mx-auto mt-3 max-w-2xl text-white/70">
          Add a verifiable, beautiful identity layer in minutes. Developers and designers both win.
        </p>
        <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a href="#" className="inline-flex items-center justify-center rounded-lg bg-cyan-500 px-5 py-3 font-medium text-black transition hover:bg-cyan-400">Request access</a>
          <a href="#" className="inline-flex items-center justify-center rounded-lg border border-white/15 bg-white/5 px-5 py-3 font-medium text-white/90 backdrop-blur transition hover:bg-white/10">View docs</a>
        </div>
      </div>

      <footer className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm text-white/60 md:flex-row">
        <p>© {new Date().getFullYear()} HoloID — All rights reserved.</p>
        <nav className="flex items-center gap-4">
          <a href="#features" className="hover:text-white/80">Features</a>
          <a href="#trust" className="hover:text-white/80">Trust</a>
          <a href="#" className="hover:text-white/80">Privacy</a>
        </nav>
      </footer>
    </section>
  );
}
