import { Link, useLocation } from 'react-router-dom';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';

export const Header = () => {
  const { state } = useCart();
  const location = useLocation();
  const itemCount = state.items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="border-b border-border bg-background">
      <div className="max-w-6xl mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-light tracking-wide text-foreground">
            MINIMAL
          </Link>
          
          <nav className="flex items-center gap-8">
            <Link 
              to="/" 
              className={`font-light tracking-wide transition-colors ${
                location.pathname === '/' 
                  ? 'text-foreground' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Shop
            </Link>
            
            <Link to="/cart">
              <Button variant="ghost" className="relative font-light tracking-wide">
                <ShoppingCart className="w-5 h-5 mr-2" />
                Cart
                {itemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-foreground text-background text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    {itemCount}
                  </span>
                )}
              </Button>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};