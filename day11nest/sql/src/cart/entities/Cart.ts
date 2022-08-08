import { Payment } from 'src/payment/entities/Payment';
import { Product } from 'src/product1/entities/Product';
// import { ProductSchema } from 'src/product/schemas/product.schema';
import { User } from 'src/users/entities/User';
import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    BeforeInsert,
    OneToOne,
    OneToMany,
    JoinColumn,
  } from 'typeorm';
  
  
  @Entity()
  export class Cart {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    
    @Column()
    price: number;
  
    @OneToOne(type => User, user => user.cart)
    @JoinColumn()
    user: User;

    @OneToOne(type => Payment, payment => payment.cart)
    paymentID: Payment;

    @OneToMany(type => Product,items => items.cart)
    items: Product[];
  
  }
  