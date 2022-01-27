import { Cart } from "src/cart/entities/Cart";

export interface ProductDTO {
    id: string;
    name: string;
    description: string;
    price: number;
    cart : Cart;
  }