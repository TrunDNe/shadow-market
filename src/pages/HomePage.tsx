import { ProductCard } from '@/components/ProductCard';
import { products } from '@/data/products';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-6xl mx-auto px-6 py-12">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-light tracking-wide text-foreground mb-4">
            Curated Minimalism
          </h1>
          <p className="text-lg text-muted-foreground font-light max-w-2xl mx-auto">
            Essential pieces for modern living. Each item carefully selected for its 
            timeless design and uncompromising quality.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default HomePage;