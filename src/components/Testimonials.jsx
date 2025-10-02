import { Star } from 'lucide-react';

const items = [
  {
    quote: 'The holographic profile card boosted user trust on day one. Our KYC completion time dropped by 34%.',
    author: 'Priya N.',
    role: 'Head of Product, NeoBank'
  },
  {
    quote: 'A delightful way to communicate verification and status. It feels futuristic yet intuitive.',
    author: 'Marco D.',
    role: 'Design Lead, PayTech'
  },
  {
    quote: 'Integration was straightforward and the UX speaks for itself. Users love the blue check glow.',
    author: 'Alina K.',
    role: 'Engineering Manager, WalletCo'
  }
];

function Stars() {
  return (
    <div className="flex items-center gap-1 text-yellow-300">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-current" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="trust" className="relative mx-auto max-w-7xl px-6 py-20">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-semibold md:text-4xl">Loved by modern fintech teams</h2>
        <p className="mt-3 text-white/70">Real results from real products using verifiable profile cards.</p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {items.map((t) => (
          <div key={t.author} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur">
            <Stars />
            <p className="mt-4 text-white/90">“{t.quote}”</p>
            <div className="mt-6 text-sm text-white/60">
              <span className="font-medium text-white/80">{t.author}</span>
              <span className="mx-2">•</span>
              <span>{t.role}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
