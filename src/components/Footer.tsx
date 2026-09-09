import { Logo } from '@/data';
import type { PageId } from '@/data';

interface FooterProps {
  navigate: (page: PageId) => void;
}

export default function Footer({ navigate }: FooterProps) {
  return (
    <footer className="border-t border-black/5 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex flex-col items-center gap-3 md:items-start">
            <Logo />
            <p className="max-w-sm text-center text-sm text-ink-soft md:text-left">
              Farmer-first digital marketplace — connecting farmers directly with buyers through a transparent digital bridge.
            </p>
          </div>
          <div className="flex flex-col items-center gap-3 md:items-end">
            <div className="flex gap-2">
              <button onClick={() => navigate('home')} className="btn-ghost">Home</button>
              <button onClick={() => navigate('marketplace')} className="btn-ghost">Marketplace</button>
              <button onClick={() => navigate('dashboard')} className="btn-ghost">Farmer Dashboard</button>
            </div>
            <p className="text-xs text-ink-soft">
              KisanSetu • SIH 2026 Prototype
            </p>
          </div>
        </div>
        <div className="mt-8 border-t border-black/5 pt-6 text-center">
          <p className="text-xs text-ink-soft">
            Prototype for demonstration purposes. All farmers, transactions, prices and orders shown are fictional demo data.
          </p>
        </div>
      </div>
    </footer>
  );
}
