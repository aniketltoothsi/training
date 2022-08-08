import { Cart } from 'src/cart/entities/Cart';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  BeforeInsert,
  OneToOne,
  ManyToOne,
  JoinColumn,
} from 'typeorm';


@Entity()
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  Name: string;
  
  
  @Column()
  description: string;

  @Column()
  price: string;

  @CreateDateColumn({type: `timestamp`, default: ()=> `CURRENT_TIMESTAMP(6)`})
  public createdAt: Date;

  @ManyToOne(type => Cart, cart => cart.items)
  cart: Cart;


}
