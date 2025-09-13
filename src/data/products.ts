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
    image: chairImage,
    description: 'A statement piece that embodies the essence of minimalist design. Crafted with precision and attention to detail, this chair combines form and function in perfect harmony.',
    features: ['Premium materials', 'Ergonomic design', 'Easy assembly', 'Timeless aesthetic']
  },
  {
    id: '2',
    name: 'Black Ceramic Vase',
    price: 89,
    image: vaseImage,
    description: 'An elegant ceramic vase that serves as both a functional piece and a work of art. Its clean lines and bold silhouette make it perfect for any modern interior.',
    features: ['Handcrafted ceramic', 'Weather resistant', 'Unique texture', 'Versatile styling']
  },
  {
    id: '3',
    name: 'White Table Lamp',
    price: 159,
    image: lampImage,
    description: 'Illuminate your space with this sophisticated table lamp. The clean geometric form provides ambient lighting while serving as a striking decorative element.',
    features: ['LED compatible', 'Adjustable brightness', 'Modern design', 'Energy efficient']
  },
  {
    id: '4',
    name: 'Geometric Wall Art',
    price: 129,
    image: wallArtImage,
    description: 'Transform your walls with this contemporary geometric art piece. The bold composition and monochromatic palette create visual interest without overwhelming the space.',
    features: ['Museum quality print', 'Fade resistant', 'Ready to hang', 'Limited edition']
  },
  {
    id: '5',
    name: 'Modern Clock',
    price: 79,
    image: clockImage,
    description: 'Keep time in style with this modern wall clock. Its minimalist design features clean lines and precise movements, making it both functional and beautiful.',
    features: ['Silent movement', 'Precision quartz', 'Battery operated', 'Easy installation']
  },
  {
    id: '6',
    name: 'Sleek Desk Organizer',
    price: 45,
    image: organizerImage,
    description: 'Organize your workspace with this sleek desk organizer. Multiple compartments keep your essentials tidy while maintaining a clean, professional appearance.',
    features: ['Multiple compartments', 'Non-slip base', 'Durable construction', 'Space saving design']
  }
];