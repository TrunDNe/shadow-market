import { useParams, useNavigate, Link } from 'react-router-dom';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowLeft, Check } from 'lucide-react';
import { useState } from 'react';

const ProductDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { dispatch } = useCart();
  const [isAdded, setIsAdded] = useState(false);

  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <main className="max-w-6xl mx-auto px-6 py-12">
          <div className="text-center py-16">
            <h1 className="text-3xl font-light tracking-wide text-foreground mb-4">
              Product Not Found
            </h1>
            <p className="text-muted-foreground font-light mb-8">
              The product you're looking for doesn't exist.
            </p>
            <Link to="/">
              <Button variant="outline" className="font-light tracking-wide">
                Return to Shop
              </Button>
            </Link>
          </div>
        </main>
      </div>
    );
  }

  const handleAddToCart = () => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-6xl mx-auto px-6 py-12">
        <Button
          variant="ghost"
          onClick={() => navigate(-1)}
          className="mb-8 font-light tracking-wide text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="aspect-square overflow-hidden bg-muted">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Product Information */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl font-light tracking-wide text-foreground">
                {product.name}
              </h1>
              <p className="text-3xl font-light text-foreground">
                ${product.price}
              </p>
            </div>

            <div className="space-y-6">
              <p className="text-muted-foreground font-light leading-relaxed text-lg">
                {product.description}
              </p>

              <Card className="p-6 border-border bg-card">
                <h3 className="font-medium text-foreground mb-4 tracking-wide">
                  Features
                </h3>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="text-muted-foreground font-light flex items-center">
                      <span className="w-1 h-1 bg-foreground rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </Card>
            </div>

            <div className="space-y-4">
              <Button
                onClick={handleAddToCart}
                className="w-full font-light tracking-wide py-6 text-lg"
                disabled={isAdded}
              >
                {isAdded ? (
                  <>
                    <Check className="w-5 h-5 mr-2" />
                    Added to Cart
                  </>
                ) : (
                  'Add to Cart'
                )}
              </Button>

              <Link to="/cart">
                <Button
                  variant="outline"
                  className="w-full font-light tracking-wide"
                >
                  View Cart
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Related Products Section */}
        <div className="mt-20">
          <h2 className="text-2xl font-light tracking-wide text-foreground mb-8 text-center">
            You Might Also Like
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products
              .filter(p => p.id !== product.id)
              .slice(0, 3)
              .map((relatedProduct) => (
                <Link key={relatedProduct.id} to={`/product/${relatedProduct.id}`}>
                  <Card className="p-0 border-border overflow-hidden bg-card hover:shadow-lg transition-shadow cursor-pointer">
                    <div className="aspect-square overflow-hidden bg-muted">
                      <img
                        src={relatedProduct.image}
                        alt={relatedProduct.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4 space-y-2">
                      <h3 className="font-medium text-foreground">{relatedProduct.name}</h3>
                      <p className="text-lg font-light text-foreground">${relatedProduct.price}</p>
                    </div>
                  </Card>
                </Link>
              ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductDetailsPage;