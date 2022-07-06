import { Gender } from "./Gender";

export class Animal{
    protected name?: string = "";
    protected color: string = "#FF0000";
    protected gender?: Gender = Gender.Other
    protected age?: number = 0;

    constructor(name?:string, color?:string,gender?: Gender, age?:number){
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
    getGender(){
        return this.gender;
    }
    getName()
    {
        return this.name;
    }
    getAge(){return this.age;}
    getColor(){return this.color;}
    setName(name:string){
        this.name = name;
    }
    setGender(gender:Gender){
        this.gender = gender;
    }
    setColor(color:string){
        this.color = color;
    }
    setAge(age:number){
        this.age = age;
    }
}