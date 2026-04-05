import { useState, useEffect } from 'react'

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      id: 1,
      gradient: 'from-origihn-red/30 to-origihn-pink/20',
      accent: 'bg-origihn-red/10'
    },
    {
      id: 2,
      gradient: 'from-origihn-green/20 to-origihn-yellow/10',
      accent: 'bg-origihn-green/10'
    },
    {
      id: 3,
      gradient: 'from-origihn-yellow/20 to-origihn-pink/10',
      accent: 'bg-origihn-yellow/10'
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <section className="relative w-full h-[90vh] overflow-hidden bg-origihn-cream">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute w-full h-full transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className={`w-full h-full bg-gradient-to-br ${slide.gradient}`}>
            {/* Decorative elements */}
            <div className={`absolute top-10 right-[-5%] w-[300px] h-[300px] ${slide.accent} rounded-full blur-[80px] -z-10`} />
            <div className={`absolute bottom-10 left-[-5%] w-[250px] h-[250px] ${slide.accent} rounded-full blur-[80px] -z-10`} />
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-40 p-3 rounded-full bg-white/80 hover:bg-white transition-all shadow-md text-origihn-textPrimary"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-40 p-3 rounded-full bg-white/80 hover:bg-white transition-all shadow-md text-origihn-textPrimary"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-40 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide
                ? 'bg-origihn-textPrimary w-8'
                : 'bg-origihn-textPrimary/40 hover:bg-origihn-textPrimary/60'
            }`}
          />
        ))}
      </div>
    </section>
  )
}
