import { ArrowLeft, ArrowRight, Check, MapPin, User, Package, IndianRupee, BadgeCheck, ShieldCheck } from 'lucide-react';
import type { PageId, Product } from '@/data';

interface ProductDetailsProps {
  product: Product;
  navigate: (page: PageId) => void;
}

export default function ProductDetails({ product, navigate }: ProductDetailsProps) {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      <button
        onClick={() => navigate('marketplace')}
        className="btn-ghost mb-6 -ml-2"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Marketplace
      </button>

      <div className="grid gap-8 lg:grid-cols-2">
        {/* Left: Visual */}
        <div className="card flex flex-col items-center justify-center bg-gradient-to-br from-brand-subtle to-brand-bg p-10">
          <div className="flex h-32 w-32 items-center justify-center rounded-3xl bg-white text-7xl shadow-sm">
            {product.emoji}
          </div>
          <span className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand px-4 py-2 text-xs font-bold uppercase tracking-wider text-white">
            <BadgeCheck className="h-4 w-4" />
            Direct from Farmer
          </span>
        </div>

        {/* Right: Info */}
        <div className="card">
          <span className="label-tag">{product.category}</span>
          <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-ink">
            {product.name}
          </h1>
          <p className="mt-2 text-ink-soft">
            {product.grade} • {product.harvestNote} • {product.location}
          </p>

          <div className="mt-6 space-y-4">
            <div className="flex items-center justify-between rounded-xl bg-brand-subtle/50 px-4 py-3">
              <span className="flex items-center gap-2 text-sm font-medium text-ink-soft">
                <Package className="h-5 w-5 text-brand" />
                Available quantity
              </span>
              <span className="text-lg font-bold text-ink">{product.quantity}</span>
            </div>

            <div className="flex items-center justify-between rounded-xl bg-brand-subtle/50 px-4 py-3">
              <span className="flex items-center gap-2 text-sm font-medium text-ink-soft">
                <User className="h-5 w-5 text-brand" />
                Farmer
              </span>
              <span className="text-lg font-bold text-ink">{product.farmer}</span>
            </div>

            <div className="flex items-center justify-between rounded-xl bg-brand-subtle/50 px-4 py-3">
              <span className="flex items-center gap-2 text-sm font-medium text-ink-soft">
                <MapPin className="h-5 w-5 text-brand" />
                Location
              </span>
              <span className="text-lg font-bold text-ink">{product.location}</span>
            </div>

            <div className="flex items-center justify-between rounded-xl bg-brand px-4 py-3">
              <span className="flex items-center gap-2 text-sm font-medium text-white/90">
                <IndianRupee className="h-5 w-5" />
                Price
              </span>
              <span className="text-2xl font-extrabold text-white">{product.price}</span>
            </div>
          </div>

          {/* Transparent pricing benefit */}
          <div className="mt-6 flex items-start gap-3 rounded-xl border border-brand/15 bg-white p-4">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-subtle text-brand">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-bold text-ink">Transparent pricing</p>
              <p className="mt-1 text-sm text-ink-soft">
                Price set directly by the farmer. No hidden intermediary margins.
              </p>
            </div>
          </div>

          <button
            onClick={() => navigate('confirmation')}
            className="btn-primary mt-6 w-full text-base"
          >
            Place Demo Order
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Trust indicators */}
      <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {[
          { label: 'Verified Farmer', icon: BadgeCheck },
          { label: 'Grade A Produce', icon: Check },
          { label: 'Direct Pricing', icon: IndianRupee },
          { label: 'No Intermediary', icon: ShieldCheck },
        ].map((t) => (
          <div key={t.label} className="flex items-center gap-2 rounded-xl border border-black/5 bg-white px-4 py-3">
            <t.icon className="h-5 w-5 text-brand" />
            <span className="text-sm font-medium text-ink">{t.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
