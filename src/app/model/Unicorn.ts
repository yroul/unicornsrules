import { Animal } from "./Animal";
import { Gender } from "./Gender";

export class Unicorn extends Animal{
   

    constructor(name?:string, color?:string,gender?: Gender, age?:number){ 
        super(name, color,gender, age);
    }
}