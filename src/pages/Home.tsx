import { ArrowRight, Sprout, ListChecks, Search, Handshake, ArrowDown, User, Store } from 'lucide-react';
import type { PageId } from '@/data';

interface HomeProps {
  navigate: (page: PageId) => void;
}

const features = [
  {
    num: '01',
    title: 'List Produce',
    desc: 'Farmers can list crop, quantity, location and expected price.',
    icon: ListChecks,
  },
  {
    num: '02',
    title: 'Find Buyers',
    desc: 'Buyers discover relevant produce without unnecessary layers.',
    icon: Search,
  },
  {
    num: '03',
    title: 'Trade Directly',
    desc: 'Transparent pricing and a simple digital order flow.',
    icon: Handshake,
  },
];

export default function Home({ navigate }: HomeProps) {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-bg to-white">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, #176B3A 1px, transparent 0)", backgroundSize: '40px 40px' }} />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 lg:grid-cols-2 lg:py-28 sm:px-6 lg:px-8">
          <div>
            <span className="label-tag">SIH 2026 • Digital Agriculture Platform</span>
            <h1 className="mt-6 text-5xl font-extrabold leading-[1.1] tracking-tight text-ink sm:text-6xl">
              Sell Direct.<br />
              <span className="text-brand">Earn Better.</span>
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-ink-soft">
              KisanSetu connects farmers directly with buyers, reducing unnecessary intermediaries, improving price transparency, and creating a simpler path from farm to market.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button onClick={() => navigate('marketplace')} className="btn-primary text-base">
                Explore Marketplace
                <ArrowRight className="h-5 w-5" />
              </button>
              <button onClick={() => navigate('dashboard')} className="btn-secondary text-base">
                <Sprout className="h-5 w-5" />
                Farmer Dashboard
              </button>
            </div>
          </div>

          {/* Hero visual card: Farmer → Kishan Setu → Buyer */}
          <div className="relative">
            <div className="card border-brand/10 bg-white/80 p-8 backdrop-blur-sm">
              <div className="flex flex-col items-center gap-6">
                <div className="flex w-full items-center justify-between gap-4">
                  <div className="flex flex-1 flex-col items-center gap-3 rounded-xl bg-brand-subtle p-5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-2xl">
                      <User className="h-6 w-6 text-brand" />
                    </div>
                    <span className="text-sm font-bold text-brand">Farmer</span>
                  </div>

                  <ArrowDown className="h-5 w-5 -rotate-90 text-brand/40" />

                  <div className="flex flex-[1.2] flex-col items-center gap-3 rounded-xl border-2 border-brand/20 bg-white p-5 shadow-sm">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand text-white">
                      <Sprout className="h-6 w-6" />
                    </div>
                    <span className="text-sm font-extrabold text-brand">KisanSetu</span>
                  </div>

                  <ArrowDown className="h-5 w-5 -rotate-90 text-brand/40" />

                  <div className="flex flex-1 flex-col items-center gap-3 rounded-xl bg-gold/10 p-5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-2xl">
                      <Store className="h-6 w-6 text-gold" />
                    </div>
                    <span className="text-sm font-bold text-gold">Buyer</span>
                  </div>
                </div>

                <div className="mt-2 w-full border-t border-black/5 pt-6 text-center">
                  <h3 className="text-xl font-bold text-ink">Farmer → Buyer</h3>
                  <p className="mt-2 text-sm text-ink-soft">
                    A transparent digital bridge for agricultural trade.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            One platform. A better connection.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-ink-soft">
            Designed around the real journey of agricultural produce.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {features.map((f) => (
            <div key={f.num} className="card group">
              <div className="flex items-center justify-between">
                <span className="text-4xl font-extrabold text-brand/15">{f.num}</span>
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-subtle text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                  <f.icon className="h-5 w-5" />
                </div>
              </div>
              <h3 className="mt-5 text-xl font-bold text-ink">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{f.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button onClick={() => navigate('marketplace')} className="btn-primary text-base">
            Explore Marketplace
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </section>
    </div>
  );
}
