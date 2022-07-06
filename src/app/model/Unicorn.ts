import { Animal } from "./Animal";
import { Gender } from "./Gender";
import { random } from "../utils/math";

export const MAX_SKILLS_POINT = 38;
export const MAX_VALUE_PER_SKILL = 10;
export const SKILLS_LIST= [
    "agility", 
    "kindness",
    "strength",
    "speed",
    "intelligence"
];
export class Unicorn extends Animal{
    kindness:number = 0;
    strength:number = 0;
    agility:number = 0;
    speed:number = 0;
    intelligence:number = 0;


    constructor(name?:string, color?:string,gender?: Gender, age?:number){
        super()
        if(name){
            this.name = name;
        }
        if(color){
            this.color = color;
        } else{
            this.randomColor();
        }
        if(gender){
           this.gender = gender;
        } else{
            this.gender = Gender.Other;
        }
        if(age){
            this.age = age;
        }
        this.randomizeSkills()
    }
    private randomColor() {
        let color = '#';
        for (let i = 0; i < 6; i++){
           const random = Math.random();
           const bit = (random * 16) | 0;
           color += (bit).toString(16);
        };
        this.color = color;
     };
    private randomizeSkills() {

        let leftSkillPoints = MAX_SKILLS_POINT;
        for(let i=0;i<SKILLS_LIST.length; i++)
        {
            const skillName: string = SKILLS_LIST[i];
            let pointToAssign = 0;
            if(leftSkillPoints > 0){
                const randomValue = random(0,MAX_VALUE_PER_SKILL + 1);
                // we still have enought point to spent
                if(leftSkillPoints - randomValue > 0){                    
                    pointToAssign = randomValue;                
                }else{
                    pointToAssign = leftSkillPoints;
                }
            }
            Object.assign(this,{
                [skillName]: pointToAssign
            });
            leftSkillPoints -= pointToAssign;
        }


    }

}