/* eslint-disable prettier/prettier */
import { IsNumber, IsString } from "class-validator";


export class InputDto {

    @IsString()
    text : string;

    @IsNumber()
    n : number;
}
