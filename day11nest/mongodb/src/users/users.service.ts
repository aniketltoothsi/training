import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { createUserDTO} from './dto/user.dto';
import { Role } from './entities/role.enum';
import { User } from './interfaces/user.interface';
import { UserSchema } from './schemas/user.schema';



@Injectable()
export class UsersService {
    constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

    // Get all products
    async getUsers(): Promise<User[]> {
        const users = await this.userModel.find();
        return users;
    }


    // Get a single Product
    async getUser(username: string): Promise<User> {
        const user = await this.userModel.findOne({username: username}); 
        return user;
    }

    // Post a single product
    async createUser(createUserDTO: createUserDTO): Promise<User> {
        const newUser = new this.userModel(createUserDTO);
        return newUser.save();
    }

    // Delete Product
    async deleteUser(userID): Promise<any> {
        const deletedProduct = await this.userModel.deleteOne(userID);
       // return deletedProduct;
    }

    // Put a single product
    async updateUser(userID: string, createUserDTO: createUserDTO): Promise<User> {
        const updatedProduct = await this.userModel.findByIdAndUpdate(userID, createUserDTO, {new: true});
        return updatedProduct;
    } 
}
