import { Cart } from 'src/cart/entities/Cart';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  BeforeInsert,
  OneToOne,
} from 'typeorm';
import { Role } from './role.enum';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  Name: string;
  
  
  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  role: Role;

  @OneToOne(type => Cart, cart => cart.user)
  cart: Cart;

}
