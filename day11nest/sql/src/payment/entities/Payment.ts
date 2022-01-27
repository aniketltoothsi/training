import { Cart } from 'src/cart/entities/Cart';
import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';

@Entity()
export class Payment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  price: number;

  @Column({ default: 'NEW' })
  status: string;

  @Column()
  shippingAddress: string;

  @Column({type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
  createTimestamp: Date;

  @Column({default: 0})
  cartId: number; 

  @OneToOne(type => Cart, cart => cart.paymentID)
  @JoinColumn()
  cart: Cart;
}