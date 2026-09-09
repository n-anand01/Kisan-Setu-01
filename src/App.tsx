import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Home from '@/pages/Home';
import FarmerDashboard from '@/pages/FarmerDashboard';
import Marketplace from '@/pages/Marketplace';
import ProductDetails from '@/pages/ProductDetails';
import OrderConfirmation from '@/pages/OrderConfirmation';
import { products, type PageId, type Product } from '@/data';

export default function App() {
  const [page, setPage] = useState<PageId>('home');
  const [selectedProduct, setSelectedProduct] = useState<Product>(products[0]);

  const navigate = (p: PageId) => {
    setPage(p);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [page]);

  return (
    <div className="flex min-h-screen flex-col bg-brand-bg">
      <Navbar current={page} navigate={navigate} />

      <main className="flex-1">
        {page === 'home' && <Home navigate={navigate} />}
        {page === 'dashboard' && <FarmerDashboard navigate={navigate} />}
        {page === 'marketplace' && (
          <Marketplace navigate={navigate} selectProduct={setSelectedProduct} />
        )}
        {page === 'product' && (
          <ProductDetails product={selectedProduct} navigate={navigate} />
        )}
        {page === 'confirmation' && <OrderConfirmation navigate={navigate} />}
      </main>

      <Footer navigate={navigate} />
    </div>
  );
}
