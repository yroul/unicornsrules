export abstract class Identifiable{
    id:string;
    constructor(){
        this.id = this.generateUniqSerial();
    }
    //https://stackoverflow.com/questions/59412625/generate-random-uuid-javascript
    private generateUniqSerial(): string {  
        return 'xxxx-xxxx-xxxx-xxxx'.replace(/[x]/g, (c) => {  
            const r = Math.floor(Math.random() * 16);  
            return r.toString(16);  
      });  
    }
}