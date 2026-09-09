import { useState } from 'react';
import { Search, MapPin, ArrowRight } from 'lucide-react';
import type { PageId, Product } from '@/data';
import { products } from '@/data';

interface MarketplaceProps {
  navigate: (page: PageId) => void;
  selectProduct: (p: Product) => void;
}

export default function Marketplace({ navigate, selectProduct }: MarketplaceProps) {
  const [query, setQuery] = useState('');

  const filtered = products.filter((p) => {
    const q = query.toLowerCase().trim();
    if (!q) return true;
    return (
      p.name.toLowerCase().includes(q) ||
      p.location.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.farmer.toLowerCase().includes(q)
    );
  });

  const viewProduce = (p: Product) => {
    selectProduct(p);
    navigate('product');
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="text-center">
        <span className="label-tag">Kishan Setu Marketplace</span>
        <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
          Fresh produce. Direct from farmers.
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-ink-soft">
          Browse produce listed directly by farmers. No intermediaries, transparent pricing.
        </p>
      </div>

      {/* Search */}
      <div className="mx-auto mt-8 max-w-2xl">
        <div className="flex gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-ink-soft" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search crops, location or category"
              className="w-full rounded-xl border border-black/10 bg-white py-3.5 pl-12 pr-4 text-sm text-ink shadow-sm outline-none transition-all placeholder:text-ink-soft focus:border-brand focus:ring-2 focus:ring-brand/15"
            />
          </div>
          <button className="btn-primary shrink-0">
            <Search className="h-4 w-4" />
            Search
          </button>
        </div>
      </div>

      {/* Results count */}
      <p className="mt-6 text-sm text-ink-soft">
        Showing {filtered.length} {filtered.length === 1 ? 'listing' : 'listings'}
      </p>

      {/* Product grid */}
      <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p) => (
          <div key={p.id} className="card group flex flex-col">
            <div className="flex items-center justify-between">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-subtle text-4xl">
                {p.emoji}
              </div>
              <span className="rounded-full bg-gold/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-gold">
                {p.category}
              </span>
            </div>

            <h3 className="mt-5 text-xl font-bold text-ink">{p.name}</h3>

            <div className="mt-3 space-y-2 text-sm">
              <div className="flex items-center gap-2 text-ink-soft">
                <span className="font-medium text-ink">Quantity:</span> {p.quantity}
              </div>
              <div className="flex items-center gap-2 text-ink-soft">
                <MapPin className="h-4 w-4" />
                <span className="font-medium text-ink">{p.location}</span>
              </div>
              <div className="flex items-center gap-2 text-ink-soft">
                <span className="font-medium text-ink">Farmer:</span> {p.farmer}
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between border-t border-black/5 pt-4">
              <div>
                <p className="text-xs uppercase tracking-wide text-ink-soft">Price</p>
                <p className="text-2xl font-extrabold text-brand">{p.price}</p>
              </div>
              <button
                onClick={() => viewProduce(p)}
                className="btn-primary"
              >
                View Produce
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="mt-12 text-center">
          <p className="text-lg text-ink-soft">No produce found for "{query}".</p>
          <button onClick={() => setQuery('')} className="btn-ghost mt-3">Clear search</button>
        </div>
      )}
    </div>
  );
}
