import { useState } from 'react';
import { ShoppingBag, Plus, Minus, Info } from 'lucide-react';
import { useCart } from '../context/CartContext';

const INGREDIENTS = [
  { id: 'egg', name: 'Eggs (One)', protein: 6, price: 10, type: 'Cooked' },
  { id: 'chicken', name: 'Chicken Breast (100g)', protein: 31, price: 80, type: 'Cooked' },
  { id: 'paneer', name: 'Paneer (100g)', protein: 18, price: 40, type: 'Cooked' },
  { id: 'peanuts', name: 'Peanuts (100g)', protein: 25, price: 25, type: 'Raw' },
  { id: 'soya', name: 'Soya Chunks (100g)', protein: 52, price: 20, type: 'Raw' },
  { id: 'chole', name: 'Chole (100g)', protein: 19, price: 15, type: 'Raw' },
  { id: 'chana', name: 'Black Chana (100g)', protein: 20, price: 15, type: 'Raw' },
  { id: 'mung', name: 'Mung (100g)', protein: 24, price: 15, type: 'Raw' },
];

export default function BuildKit() {
  const { addToCart } = useCart();
  const [selections, setSelections] = useState({});

  const handleUpdate = (id, delta) => {
    setSelections(prev => {
      const current = prev[id] || 0;
      const next = Math.max(0, current + delta);
      return { ...prev, [id]: next };
    });
  };

  const totalProtein = INGREDIENTS.reduce((sum, item) => sum + (selections[item.id] || 0) * item.protein, 0);
  const totalPrice = INGREDIENTS.reduce((sum, item) => sum + (selections[item.id] || 0) * item.price, 0);

  const handleAddKit = () => {
    if (totalProtein === 0) return;
    const items = INGREDIENTS.filter(item => selections[item.id] > 0).map(item => `${item.name} (x${selections[item.id]})`);

    addToCart({
      id: Date.now(),
      name: 'Custom Macro Kit',
      protein: totalProtein,
      price: totalPrice + 50, // Base packaging fee
      ingredients: items
    });
    setSelections({});
  };

  return (
    <div className="pt-24 sm:pt-32 pb-16 sm:pb-24 bg-[#F7F5F0] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 px-2">
          <span className="inline-block py-1 sm:py-1.5 px-3 sm:px-4 rounded-full bg-origihn-green text-origihn-textPrimary text-xs font-bold tracking-wider uppercase mb-3 sm:mb-5 border border-origihn-green/30 shadow-sm">
            Architect Your Diet
          </span>
          <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-6xl text-origihn-textPrimary mb-4 sm:mb-6 tracking-tight">Build Your Custom Kit</h1>
          <p className="text-sm sm:text-base md:text-lg text-origihn-red max-w-2xl mx-auto leading-relaxed">
            Select exactly what you need to hit your unique macro targets. All cooked items are prepared fresh daily to perfection.
          </p>
        </div>

        {/* How it Works */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-12 sm:mb-20 relative px-2 text-center">
          <div className="hidden sm:block absolute top-[28px] left-[16%] right-[16%] h-[1px] bg-origihn-green/20 -z-10" />
          <div className="bg-white sm:bg-transparent p-4 sm:p-0 rounded-2xl sm:rounded-none shadow-sm sm:shadow-none border border-origihn-green/20 sm:border-none">
             <div className="w-12 h-12 sm:w-14 sm:h-14 bg-origihn-cream border-2 border-origihn-green rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-5 text-origihn-textPrimary font-serif font-bold text-lg sm:text-xl shadow-sm">1</div>
             <h3 className="font-bold text-origihn-textPrimary text-base sm:text-lg md:text-xl mb-2 sm:mb-3">Select Macros</h3>
             <p className="text-xs sm:text-sm text-origihn-textSecondary leading-relaxed">Choose your primary protein sources based on your targets.</p>
          </div>
          <div className="bg-white sm:bg-transparent p-4 sm:p-0 rounded-2xl sm:rounded-none shadow-sm sm:shadow-none border border-origihn-green/20 sm:border-none">
             <div className="w-12 h-12 sm:w-14 sm:h-14 bg-origihn-cream border-2 border-origihn-green rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-5 text-origihn-textPrimary font-serif font-bold text-lg sm:text-xl shadow-sm">2</div>
             <h3 className="font-bold text-origihn-textPrimary text-base sm:text-lg md:text-xl mb-2 sm:mb-3">Review Profile</h3>
             <p className="text-xs sm:text-sm text-origihn-textSecondary leading-relaxed">Watch the summary update dynamically as you add items.</p>
          </div>
          <div className="bg-white sm:bg-transparent p-4 sm:p-0 rounded-2xl sm:rounded-none shadow-sm sm:shadow-none border border-origihn-green/20 sm:border-none">
             <div className="w-12 h-12 sm:w-14 sm:h-14 bg-origihn-cream border-2 border-origihn-green rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-5 text-origihn-textPrimary font-serif font-bold text-lg sm:text-xl shadow-sm">3</div>
             <h3 className="font-bold text-origihn-textPrimary text-base sm:text-lg md:text-xl mb-2 sm:mb-3">We Prepare It</h3>
             <p className="text-xs sm:text-sm text-origihn-textSecondary leading-relaxed">Freshly cooked, precisely weighed, and packed for the day.</p>
          </div>
        </div>

        {/* Builder UI */}
        <div className="flex flex-col lg:flex-row gap-8 md:gap-12">
          {/* Ingredients Picker */}
          <div className="flex-grow grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {INGREDIENTS.map(item => (
              <div key={item.id} className="bg-white p-4 sm:p-6 rounded-2xl sm:rounded-3xl shadow-sm border border-origihn-green/20 flex items-center justify-between hover:border-origihn-green/50 hover:shadow-md transition-all group">
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2 mb-1 sm:mb-1.5 flex-wrap">
                    <h3 className="font-bold text-origihn-textPrimary text-sm sm:text-base md:text-lg group-hover:text-origihn-red transition-colors truncate">{item.name}</h3>
                    <span className="text-[9px] sm:text-[10px] uppercase font-bold tracking-wider bg-origihn-yellow/20 border border-origihn-yellow/40 text-origihn-red px-1.5 py-0.5 rounded-sm flex-shrink-0">{item.type}</span>
                  </div>
                  <p className="text-origihn-textSecondary font-medium text-xs sm:text-sm flex flex-wrap gap-1">
                    <span className="text-origihn-red bg-origihn-cream/50 px-2 py-0.5 rounded-sm flex-shrink-0">{item.protein}g</span> <span className="text-origihn-green/40">•</span> <span>₹{item.price}</span>
                  </p>
                </div>

                <div className="flex items-center gap-2 bg-origihn-cream/50 rounded-full p-1 border border-origihn-green/20 ml-2 flex-shrink-0">
                  <button
                    onClick={() => handleUpdate(item.id, -1)}
                    className="w-8 h-8 sm:w-10 sm:h-10 flex justify-center items-center rounded-full bg-white text-origihn-textPrimary shadow-sm hover:bg-origihn-green/20 active:scale-95 transition-all"
                  >
                    <Minus className="w-3 h-3 sm:w-4 sm:h-4" />
                  </button>
                  <span className="font-bold w-5 sm:w-6 text-center text-origihn-textPrimary font-serif text-sm sm:text-lg">{selections[item.id] || 0}</span>
                  <button
                    onClick={() => handleUpdate(item.id, 1)}
                    className="w-8 h-8 sm:w-10 sm:h-10 flex justify-center items-center rounded-full bg-[#D97A2B] text-white shadow-sm hover:bg-[#D97A2B]/90 active:scale-95 transition-all"
                  >
                    <Plus className="w-3 h-3 sm:w-4 sm:h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Sticky Summary */}
          <div className="lg:w-80 xl:w-96 shrink-0 relative mb-8 lg:mb-0">
            <div className="sticky top-24 lg:top-32 bg-origihn-textPrimary text-white p-6 sm:p-8 rounded-2xl sm:rounded-[2.5rem] shadow-2xl relative overflow-hidden border border-origihn-green/30">
               <div className="absolute -top-10 -right-10 w-40 sm:w-48 h-40 sm:h-48 bg-accent/20 rounded-full blur-3xl pointer-events-none" />
               <h2 className="font-serif text-2xl sm:text-3xl mb-6 sm:mb-8 flex items-center gap-3">Summary</h2>

               <div className="space-y-3 md:space-y-4 mb-8 sm:mb-10 text-origihn-cream/70 font-medium text-sm sm:text-base">
                 <div className="flex justify-between items-center pb-3 md:pb-4 border-b border-origihn-green/20">
                   <span>Total Protein</span>
                   <span className="text-2xl sm:text-4xl font-serif text-origihn-yellow drop-shadow-sm">{totalProtein}g</span>
                 </div>
                 <div className="flex justify-between items-center pb-3 md:pb-4 border-b border-origihn-green/20 pt-2">
                   <span>Subtotal</span>
                   <span className="text-base sm:text-xl text-white">₹{totalPrice}</span>
                 </div>
                 <div className="flex justify-between items-center pb-3 md:pb-4 border-b border-origihn-green/20">
                   <span>Prep & Packaging</span>
                   <span className="text-base sm:text-xl text-white">₹{totalPrice > 0 ? 50 : 0}</span>
                 </div>
                 <div className="flex justify-between items-center pt-3 md:pt-4">
                   <span className="text-white text-base sm:text-lg">Total</span>
                   <span className="font-bold text-2xl sm:text-4xl text-white">₹{totalPrice > 0 ? totalPrice + 50 : 0}</span>
                 </div>
               </div>

               <button
                  onClick={handleAddKit}
                  disabled={totalProtein === 0}
                  className="w-full bg-[#D97A2B] text-white font-bold text-base sm:text-lg py-4 sm:py-5 rounded-full flex justify-center items-center gap-3 hover:bg-[#D97A2B]/90 active:scale-95 transition-all disabled:opacity-50 disabled:hover:scale-100 disabled:hover:bg-[#D97A2B] disabled:cursor-not-allowed shadow-lg shadow-[#D97A2B]/30"
               >
                 <ShoppingBag className="w-5 h-5 sm:w-6 sm:h-6" />
                 Add Custom Kit
               </button>
            </div>
          </div>
        </div>

        {/* Pro Tips Section */}
        <div className="mt-24 bg-origihn-textPrimary rounded-[3rem] p-10 md:p-16 text-white relative overflow-hidden shadow-2xl">
           <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-origihn-yellow/5 rounded-full blur-[100px] pointer-events-none" />
           <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-origihn-green/10 rounded-full blur-[80px] pointer-events-none" />

           <div className="flex items-center gap-3 mb-10 border-b border-origihn-green/20 pb-6 relative z-10">
             <Info className="w-8 h-8 text-origihn-yellow" />
             <h3 className="font-serif text-4xl">Macro Guidance</h3>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 relative z-10">
             <div>
               <h4 className="text-origihn-yellow font-bold text-xl mb-4">Looking to Bulk?</h4>
               <p className="text-origihn-cream/70 leading-relaxed text-sm md:text-base">Combine higher calorie proteins like Peanuts and Paneer with Chana to create a dense, high-calorie meal perfect for bulking phases.</p>
             </div>
             <div>
               <h4 className="text-origihn-yellow font-bold text-xl mb-4">Cutting Phase?</h4>
               <p className="text-origihn-cream/70 leading-relaxed text-sm md:text-base">Stick to lean sources like Chicken Breasts and Eggs. They offer the highest protein yield with minimal fat and carbohydrate impact.</p>
             </div>
             <div>
               <h4 className="text-origihn-yellow font-bold text-xl mb-4">Plant-Based Options</h4>
               <p className="text-origihn-cream/70 leading-relaxed text-sm md:text-base">Soya Chunks are a vegan powerhouse with 52g of protein per 100g. Pair with Mung and Black Chana for a complete amino acid profile.</p>
             </div>
             <div>
               <h4 className="text-origihn-yellow font-bold text-xl mb-4">Optimal Timing</h4>
               <p className="text-origihn-cream/70 leading-relaxed text-sm md:text-base">For post-workout recovery, fast-absorbing proteins like Chicken and Eggs are ideal. Combine them for a rapid amino acid spike.</p>
             </div>
           </div>
        </div>
      </div>
    </div>
  );
}
