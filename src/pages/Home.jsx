import { Hero } from '../components/Hero'
import { HeroContent } from '../components/HeroContent'
import { ProductCarousel } from '../components/ProductCarousel'
import { BrandStory } from '../components/BrandStory'
import { Quality } from '../components/Quality'
import { productKits } from '../data/products'

export function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <ProductCarousel products={productKits.slice(0, 6)} />
      <HeroContent />
      <BrandStory />
      <Quality />
    </div>
  )
}
