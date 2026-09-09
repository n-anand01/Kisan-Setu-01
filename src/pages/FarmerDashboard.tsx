import { ArrowRight, Package, Clock, Users, IndianRupee } from 'lucide-react';
import type { PageId } from '@/data';
import { farmerStats, farmerListings } from '@/data';

interface DashboardProps {
  navigate: (page: PageId) => void;
}

const statIcons = [Package, Clock, Users, IndianRupee];

export default function FarmerDashboard({ navigate }: DashboardProps) {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
        <div>
          <span className="label-tag">Farmer Portal</span>
          <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            Good morning, Farmer <span className="inline-block animate-pulse">👋</span>
          </h1>
          <p className="mt-2 text-ink-soft">Manage your listings and connect with buyers directly.</p>
        </div>
        <button onClick={() => navigate('marketplace')} className="btn-primary">
          View Marketplace
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>

      {/* Stats */}
      <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
        {farmerStats.map((stat, i) => {
          const Icon = statIcons[i];
          return (
            <div key={stat.label} className="card">
              <div className="flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-subtle text-brand">
                  <Icon className="h-5 w-5" />
                </div>
              </div>
              <p className="mt-4 text-3xl font-extrabold text-ink">{stat.value}</p>
              <p className="mt-1 text-sm text-ink-soft">{stat.label}</p>
            </div>
          );
        })}
      </div>

      {/* My Produce */}
      <div className="mt-12">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-ink">My Produce</h2>
          <span className="text-sm text-ink-soft">{farmerListings.length} active listings</span>
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {farmerListings.map((item) => (
            <div key={item.id} className="card group">
              <div className="flex items-start justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-subtle text-3xl">
                  {item.emoji}
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold text-brand">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                  {item.status}
                </span>
              </div>
              <h3 className="mt-5 text-xl font-bold text-ink">{item.name}</h3>
              <div className="mt-4 flex items-center justify-between border-t border-black/5 pt-4">
                <div>
                  <p className="text-xs uppercase tracking-wide text-ink-soft">Quantity</p>
                  <p className="text-lg font-bold text-ink">{item.quantity}</p>
                </div>
                <div className="text-right">
                  <p className="text-xs uppercase tracking-wide text-ink-soft">Price</p>
                  <p className="text-lg font-bold text-brand">{item.price}</p>
                </div>
              </div>
              <button className="btn-secondary mt-5 w-full">
                Manage Listing
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
