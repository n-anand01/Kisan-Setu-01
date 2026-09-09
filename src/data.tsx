export type PageId = 'home' | 'dashboard' | 'marketplace' | 'product' | 'confirmation';

export interface Product {
  id: string;
  emoji: string;
  category: string;
  name: string;
  quantity: string;
  location: string;
  price: string;
  pricePerKg: number;
  farmer: string;
  grade: string;
  harvestNote: string;
}

export const products: Product[] = [
  {
    id: 'tomato',
    emoji: '🍅',
    category: 'VEGETABLE',
    name: 'Fresh Tomato',
    quantity: '500 kg',
    location: 'Bihar',
    price: '₹28 / kg',
    pricePerKg: 28,
    farmer: 'Ramesh Kumar',
    grade: 'Grade A',
    harvestNote: 'Harvested recently',
  },
  {
    id: 'wheat',
    emoji: '🌾',
    category: 'GRAIN',
    name: 'Premium Wheat',
    quantity: '1,000 kg',
    location: 'Bihar',
    price: '₹25 / kg',
    pricePerKg: 25,
    farmer: 'Sunil Yadav',
    grade: 'Grade A',
    harvestNote: 'Harvested recently',
  },
  {
    id: 'potato',
    emoji: '🥔',
    category: 'VEGETABLE',
    name: 'Potato',
    quantity: '750 kg',
    location: 'Bihar',
    price: '₹22 / kg',
    pricePerKg: 22,
    farmer: 'Anita Devi',
    grade: 'Grade A',
    harvestNote: 'Harvested recently',
  },
];

export const farmerListings = [
  { id: 'tomato', emoji: '🍅', name: 'Tomato', status: 'ACTIVE', quantity: '500 kg', price: '₹28/kg' },
  { id: 'wheat', emoji: '🌾', name: 'Wheat', status: 'ACTIVE', quantity: '1,000 kg', price: '₹25/kg' },
  { id: 'potato', emoji: '🥔', name: 'Potato', status: 'ACTIVE', quantity: '750 kg', price: '₹22/kg' },
];

export const farmerStats = [
  { label: 'Active Listings', value: '06' },
  { label: 'Pending Orders', value: '03' },
  { label: 'Potential Buyers', value: '18' },
  { label: "This Month's Sales", value: '₹42,850' },
];

export const demoOrder = {
  orderId: 'KS-2026-1042',
  produce: 'Fresh Tomato • 500 kg',
  farmer: 'Ramesh Kumar',
  orderValue: '₹14,000',
};

export function Logo({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <img
        src="/images/WhatsApp_Image_2026-09-09_at_3.22.28_AM.jpeg"
        alt="KisanSetu agricultural marketplace logo"
        className="h-10 w-10 rounded-xl object-cover"
      />
      <span className="text-lg font-extrabold tracking-tight text-ink">
        KisanSetu
      </span>
    </div>
  );
}
