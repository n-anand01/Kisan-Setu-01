import { Menu, X, Sprout } from 'lucide-react';
import { useState } from 'react';
import { Logo, type PageId } from '@/data';

interface NavbarProps {
  current: PageId;
  navigate: (page: PageId) => void;
}

export default function Navbar({ current, navigate }: NavbarProps) {
  const [open, setOpen] = useState(false);

  const navItems: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'dashboard', label: 'Farmer Dashboard' },
    { id: 'marketplace', label: 'Marketplace' },
  ];

  const go = (page: PageId) => {
    navigate(page);
    setOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <button onClick={() => go('home')} className="flex items-center">
          <Logo />
        </button>

        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => go(item.id)}
              className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                current === item.id
                  ? 'bg-brand-subtle text-brand'
                  : 'text-ink-soft hover:text-brand'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="hidden md:block">
          <button onClick={() => go('dashboard')} className="btn-primary">
            <Sprout className="h-4 w-4" />
            Farmer Portal
          </button>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-ink md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-black/5 bg-white md:hidden">
          <nav className="flex flex-col gap-1 px-4 py-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => go(item.id)}
                className={`rounded-lg px-4 py-3 text-left text-sm font-medium transition-colors ${
                  current === item.id
                    ? 'bg-brand-subtle text-brand'
                    : 'text-ink-soft hover:bg-brand-subtle/50 hover:text-brand'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button onClick={() => go('dashboard')} className="btn-primary mt-2 w-full">
              <Sprout className="h-4 w-4" />
              Farmer Portal
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
