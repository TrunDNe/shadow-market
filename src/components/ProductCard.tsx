import { Product, useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const { dispatch } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  return (
    <Link to={`/product/${product.id}`}>
      <Card className="p-0 border-border overflow-hidden bg-card hover:shadow-lg transition-shadow cursor-pointer">
        <div className="aspect-square overflow-hidden bg-muted">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-6 space-y-4">
          <div className="space-y-2">
            <h3 className="font-medium text-foreground text-lg">{product.name}</h3>
            <p className="text-2xl font-light text-foreground">${product.price}</p>
          </div>
          <Button 
            onClick={handleAddToCart}
            variant="outline"
            className="w-full font-light tracking-wide"
          >
            Add to Cart
          </Button>
        </div>
      </Card>
    </Link>
  );
};