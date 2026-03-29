export function Quality() {
  return (
    <section className="py-24 bg-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-white rounded-[3rem] p-12 md:p-20 shadow-lg shadow-primary-900/10 border border-primary-200">
          <span className="text-primary-600 font-bold uppercase tracking-wider text-sm mb-4 block">Our Promise</span>
          <h2 className="font-serif text-4xl md:text-5xl text-primary-900 mb-16">Uncompromising Quality</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <div className="w-16 h-16 bg-primary-50 text-primary-900 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-serif font-bold border-2 border-primary-300">1</div>
              <h3 className="text-xl font-bold text-primary-900 mb-4">Sourced Fresh</h3>
              <p className="text-primary-600 leading-relaxed max-w-sm mx-auto">We source our chicken, paneer, and eggs locally every single morning to ensure maximum freshness and taste.</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-primary-50 text-primary-900 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-serif font-bold border-2 border-primary-300">2</div>
              <h3 className="text-xl font-bold text-primary-900 mb-4">Perfectly Portioned</h3>
              <p className="text-primary-600 leading-relaxed max-w-sm mx-auto">No more guessing. Every kit is weighed precisely so you know exactly how many grams of protein you're consuming.</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-primary-50 text-primary-900 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-serif font-bold border-2 border-primary-300">3</div>
              <h3 className="text-xl font-bold text-primary-900 mb-4">Zero Preservatives</h3>
              <p className="text-primary-600 leading-relaxed max-w-sm mx-auto">Our food is meant to be eaten fresh. We don't use artificial preservatives to extend shelf life unnaturally.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
