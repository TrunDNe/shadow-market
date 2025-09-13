import { useCart } from '@/context/CartContext';
import { CartItem } from '@/components/CartItem';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const CartPage = () => {
  const { state, dispatch } = useCart();

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  if (state.items.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <main className="max-w-4xl mx-auto px-6 py-12">
          <div className="text-center py-16">
            <h1 className="text-3xl font-light tracking-wide text-foreground mb-4">
              Your Cart is Empty
            </h1>
            <p className="text-muted-foreground font-light mb-8">
              Discover our curated collection of minimalist essentials.
            </p>
            <Link to="/">
              <Button variant="outline" className="font-light tracking-wide">
                Continue Shopping
              </Button>
            </Link>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-3xl font-light tracking-wide text-foreground">
            Shopping Cart
          </h1>
          <Button 
            variant="ghost" 
            onClick={clearCart}
            className="text-muted-foreground hover:text-foreground font-light"
          >
            Clear Cart
          </Button>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-4">
            {state.items.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>
          
          <div className="lg:col-span-1">
            <Card className="p-6 border-border bg-card sticky top-6">
              <h3 className="text-xl font-light tracking-wide text-foreground mb-6">
                Order Summary
              </h3>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-muted-foreground">
                  <span>Subtotal</span>
                  <span>${state.total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>
                <div className="h-px bg-border"></div>
                <div className="flex justify-between text-foreground font-medium text-lg">
                  <span>Total</span>
                  <span>${state.total.toFixed(2)}</span>
                </div>
              </div>
              
              <Button className="w-full font-light tracking-wide">
                Checkout
              </Button>
              
              <Link to="/">
                <Button variant="ghost" className="w-full mt-3 font-light tracking-wide">
                  Continue Shopping
                </Button>
              </Link>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CartPage;