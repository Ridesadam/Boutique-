
import React, { useState } from 'react';
import { Page } from './types';
import { PRODUCTS, SHOP_NAME, SHOP_LOCATION, SHOP_PHONE } from './constants';
import { Header } from './components/Header';
import { ProductCard } from './components/ProductCard';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.Home);

  const navigateTo = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-gray-50">
      <Header onGoHome={() => navigateTo(Page.Home)} />

      <main className="flex-grow">
        {currentPage === Page.Home ? (
          /* SECTION ACCUEIL */
          <div className="max-w-4xl mx-auto px-6 pt-10 pb-20 flex flex-col items-center text-center">
            <div className="mb-10 w-full max-w-sm rounded-3xl overflow-hidden shadow-2xl rotate-1 border-4 border-orange-100">
               <img 
                 src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=800&auto=format&fit=crop" 
                 alt="Marché local" 
                 className="w-full h-64 object-cover"
               />
            </div>
            
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Bienvenue <br/>
              <span className="text-orange-600">{SHOP_NAME}</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-12 max-w-md">
              Découvrez nos produits frais et de qualité. Commandez par WhatsApp et payez à la livraison !
            </p>
            
            <div className="flex flex-col gap-4 w-full sm:w-auto items-center mb-16">
              <button 
                onClick={() => navigateTo(Page.Catalog)}
                className="w-full sm:w-80 bg-orange-600 hover:bg-orange-700 text-white text-2xl font-bold py-6 px-12 rounded-2xl shadow-xl transition-all active:scale-95"
              >
                Voir les produits
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full text-left">
              <div className="bg-blue-50 p-8 rounded-3xl border border-blue-100 shadow-sm">
                <h3 className="text-blue-800 font-bold text-xl mb-2">📍 Boutique Physique</h3>
                <p className="text-blue-700 text-lg">{SHOP_LOCATION}</p>
              </div>
              <div className="bg-green-50 p-8 rounded-3xl border border-green-100 shadow-sm">
                <h3 className="text-green-800 font-bold text-xl mb-2">🚚 Paiement Facile</h3>
                <p className="text-green-700 text-lg">Payez seulement quand vous recevez vos articles.</p>
              </div>
            </div>
          </div>
        ) : (
          /* SECTION CATALOGUE */
          <div className="max-w-4xl mx-auto px-6 py-10">
            <div className="flex items-center gap-4 mb-10">
              <button 
                onClick={() => navigateTo(Page.Home)}
                className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              >
                <svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <h2 className="text-3xl font-bold text-gray-900">Nos Articles</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {PRODUCTS.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            <div className="mt-20 p-10 bg-gray-900 text-white rounded-[2.5rem] text-center shadow-2xl">
              <h3 className="text-2xl font-bold mb-4">Besoin d'aide ?</h3>
              <p className="text-lg text-gray-400 mb-8">Appelez-nous directement pour toute question :</p>
              <a 
                href={`tel:${SHOP_PHONE}`}
                className="inline-flex items-center gap-3 text-3xl font-bold text-orange-400 hover:text-orange-300 underline underline-offset-8 transition-colors"
              >
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.82 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
                +{SHOP_PHONE}
              </a>
            </div>
          </div>
        )}
      </main>

      <footer className="bg-white py-12 px-6 border-t border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-900 font-bold mb-2 text-xl">
            {SHOP_NAME}
          </p>
          <p className="text-gray-500 italic">
            Votre boutique de confiance au Bénin.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
