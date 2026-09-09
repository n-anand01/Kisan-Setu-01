import { CheckCircle, Home as HomeIcon, Package, User, IndianRupee, Hash, ArrowRight } from 'lucide-react';
import type { PageId } from '@/data';
import { demoOrder } from '@/data';

interface ConfirmationProps {
  navigate: (page: PageId) => void;
}

const orderRows = [
  { label: 'Order ID', value: demoOrder.orderId, icon: Hash },
  { label: 'Produce', value: demoOrder.produce, icon: Package },
  { label: 'Farmer', value: demoOrder.farmer, icon: User },
  { label: 'Order Value', value: demoOrder.orderValue, icon: IndianRupee },
];

export default function OrderConfirmation({ navigate }: ConfirmationProps) {
  return (
    <div className="mx-auto flex max-w-2xl flex-col items-center px-4 py-16 sm:px-6 lg:px-8">
      {/* Check icon */}
      <div className="relative">
        <div className="flex h-24 w-24 items-center justify-center rounded-full bg-brand shadow-lg shadow-brand/20">
          <CheckCircle className="h-14 w-14 text-white" strokeWidth={2.5} />
        </div>
        <div className="absolute inset-0 -z-10 animate-ping rounded-full bg-brand/20" style={{ animationDuration: '2s' }} />
      </div>

      <h1 className="mt-8 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
        Order Confirmed
      </h1>
      <p className="mt-3 max-w-md text-center text-ink-soft">
        Your demo transaction has been successfully created on KisanSetu.
      </p>

      {/* Order card */}
      <div className="card mt-8 w-full">
        <div className="flex items-center justify-between border-b border-black/5 pb-4">
          <h2 className="text-lg font-bold text-ink">Order Summary</h2>
          <span className="rounded-full bg-brand-subtle px-3 py-1 text-xs font-semibold text-brand">
            DEMO ORDER
          </span>
        </div>

        <div className="mt-4 space-y-3">
          {orderRows.map((row) => (
            <div key={row.label} className="flex items-center justify-between rounded-xl bg-brand-bg px-4 py-3">
              <span className="flex items-center gap-2 text-sm font-medium text-ink-soft">
                <row.icon className="h-5 w-5 text-brand" />
                {row.label}
              </span>
              <span className="text-sm font-bold text-ink">{row.value}</span>
            </div>
          ))}
        </div>
      </div>

      <button onClick={() => navigate('home')} className="btn-primary mt-8 text-base">
        <HomeIcon className="h-5 w-5" />
        Back to Home
        <ArrowRight className="h-5 w-5" />
      </button>
    </div>
  );
}
