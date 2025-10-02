import Spline from '@splinetool/react-spline';
import { Rocket, Shield, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[90vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/90" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 pt-28 pb-20 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 backdrop-blur">
          <Sparkles className="h-4 w-4 text-cyan-300" />
          <span className="text-sm text-white/80">Futuristic Identity for Fintech</span>
        </div>

        <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight md:text-6xl">
          Build trust with a holographic
          <span className="bg-gradient-to-r from-cyan-300 via-sky-300 to-indigo-300 bg-clip-text text-transparent"> digital identity</span>
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base text-white/70 md:text-lg">
          A modern profile card with verifiable credentials and a glowing blue checkmark. Seamless, secure, and beautifully interactive.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a href="#features" className="inline-flex items-center gap-2 rounded-lg bg-cyan-500 px-5 py-3 font-medium text-black transition hover:bg-cyan-400">
            <Rocket className="h-5 w-5" />
            Get Started
          </a>
          <a href="#trust" className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-5 py-3 font-medium text-white/90 backdrop-blur transition hover:bg-white/10">
            <Shield className="h-5 w-5 text-cyan-300" />
            Why it’s secure
          </a>
        </div>
      </div>
    </section>
  );
}
