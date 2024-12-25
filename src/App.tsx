import React from 'react';
import Header from './components/Header';
import Categories from './components/Categories';
import ProductGrid from './components/ProductGrid';
import Cart from './pages/Cart';
import Product from './pages/Product';
import Payment from './pages/Payment';

function App() {
  const hash = window.location.hash;
  const showCart = hash === '#cart';
  const showProduct = hash === '#product';
  const showPayment = hash === '#payment';

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      {!showCart && !showProduct && !showPayment && <Categories />}
      <main>
        {showCart ? (
          <Cart />
        ) : showProduct ? (
          <Product />
        ) : showPayment ? (
          <Payment />
        ) : (
          <div className="max-w-7xl mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold mb-6">Best of Electronics</h1>
            <ProductGrid />
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
