import { Animal } from "./Animal";
import { Gender } from "./Gender";

export class Unicorn extends Animal{
    name?: string = "";
    color:string = "#FF0000";
    gender?: Gender = Gender.Other
    age?: number = 0;

    constructor(name?:string, color?:string,gender?: Gender, age?:number){ 
        super();
        if(name){
            this.name = name;
        }
        if(color){
            this.color = color;
        }
        if(gender){
           this.gender = gender;
        } else{
            this.gender = Gender.Other;
        }
        if(age){
            this.age = age;
        }     
    }
}