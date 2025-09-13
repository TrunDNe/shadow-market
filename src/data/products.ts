import { Product } from '@/context/CartContext';
import chairImage from '@/assets/chair.jpg';
import vaseImage from '@/assets/vase.jpg';
import lampImage from '@/assets/lamp.jpg';
import wallArtImage from '@/assets/wall-art.jpg';
import clockImage from '@/assets/clock.jpg';
import organizerImage from '@/assets/organizer.jpg';

export const products: Product[] = [
  {
    id: '1',
    name: 'Minimalist Chair',
    price: 299,
    image: chairImage
  },
  {
    id: '2',
    name: 'Black Ceramic Vase',
    price: 89,
    image: vaseImage
  },
  {
    id: '3',
    name: 'White Table Lamp',
    price: 159,
    image: lampImage
  },
  {
    id: '4',
    name: 'Geometric Wall Art',
    price: 129,
    image: wallArtImage
  },
  {
    id: '5',
    name: 'Modern Clock',
    price: 79,
    image: clockImage
  },
  {
    id: '6',
    name: 'Sleek Desk Organizer',
    price: 45,
    image: organizerImage
  }
];