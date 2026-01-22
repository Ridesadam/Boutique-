
import { Product } from './types';

export const SHOP_NAME = "Chez Maman Bénédicte";
export const SHOP_PHONE = "22990000000"; 
export const SHOP_LOCATION = "Cotonou, Quartier Fidjrossè";
export const CURRENCY = "FCFA";

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Tissu Wax Qualité Supérieure",
    price: 12000,
    image: "https://images.unsplash.com/photo-1590736704728-f4730bb30770?q=80&w=800&auto=format&fit=crop",
    description: "Beau pagne coloré pour vos tenues de fête."
  },
  {
    id: 2,
    name: "Huile d'Arachide Pure (5L)",
    price: 6500,
    image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?q=80&w=800&auto=format&fit=crop",
    description: "Huile naturelle pour une cuisine saine."
  },
  {
    id: 3,
    name: "Gari Sohoui (Grand Sac)",
    price: 4500,
    image: "https://images.unsplash.com/photo-1626074311107-550774219460?q=80&w=800&auto=format&fit=crop",
    description: "Gari bien croustillant et propre."
  },
  {
    id: 4,
    name: "Sac de Riz Parfumé (25kg)",
    price: 18500,
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=800&auto=format&fit=crop",
    description: "Riz de luxe pour toute la famille."
  },
  {
    id: 5,
    name: "Jus de Bissap Maison (1L)",
    price: 1000,
    image: "https://images.unsplash.com/photo-1556881286-fc6915169721?q=80&w=800&auto=format&fit=crop",
    description: "Boisson fraîche et naturelle."
  },
  {
    id: 6,
    name: "Savon Kabakrou (Lot de 10)",
    price: 2500,
    image: "https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?q=80&w=800&auto=format&fit=crop",
    description: "Savon traditionnel efficace."
  },
  {
    id: 7,
    name: "Pâte de Tomate (Boîte)",
    price: 500,
    image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=800&auto=format&fit=crop",
    description: "Tomate concentrée pour vos sauces."
  },
  {
    id: 8,
    name: "Lait en Poudre (500g)",
    price: 3200,
    image: "https://images.unsplash.com/photo-1550583724-125581f77833?q=80&w=800&auto=format&fit=crop",
    description: "Lait entier pour le petit déjeuner."
  }
];
