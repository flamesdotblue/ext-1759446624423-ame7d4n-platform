import { ShieldCheck, User, Zap, CheckCircle2 } from 'lucide-react';

const features = [
  {
    icon: User,
    title: 'Unified Identity',
    desc: 'A single, verifiable profile card that travels with your user across products.'
  },
  {
    icon: ShieldCheck,
    title: 'Verified Credentials',
    desc: 'Blue-check level trust with cryptographic verification and auditability.'
  },
  {
    icon: Zap,
    title: 'Instant Onboarding',
    desc: 'Reduce KYC friction with pre-verified data and smooth flows.'
  },
  {
    icon: CheckCircle2,
    title: 'Compliance Ready',
    desc: 'Privacy-first architecture aligned to modern compliance standards.'
  }
];

export default function Features() {
  return (
    <section id="features" className="relative z-10 mx-auto max-w-7xl px-6 py-20">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-semibold md:text-4xl">Everything you need to verify at a glance</h2>
        <p className="mt-3 text-white/70">
          Showcase trust, status, and credentials with an elegant, iridescent profile card. Built for fintech, designed for people.
        </p>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur transition hover:bg-white/[0.06]">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400/20 to-indigo-400/20 text-cyan-200 ring-1 ring-white/10">
              <Icon className="h-6 w-6" />
            </div>
            <h3 className="mt-4 text-lg font-medium">{title}</h3>
            <p className="mt-2 text-sm text-white/70">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
