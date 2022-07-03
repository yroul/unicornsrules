import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';


const STORAGE_PREFIX = "uniorns";
@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  
  constructor() {}
  setItem(key: any, value: any): Observable<any>{
    try{
      console.log("we are ready to write this data on local storage (key="+key+") :");
      console.log(value);
      window.localStorage.setItem(STORAGE_PREFIX+"-"+key,JSON.stringify(value));
      return of(true);
    } catch(e){
      return throwError(() => e);
    }
  }
  getItem(key: string):Observable<any>{
    try{
      const rawRes = window.localStorage.getItem(STORAGE_PREFIX+"-"+key);
      if(rawRes){
        return of(JSON.parse(rawRes));
      }
      return throwError(() => new Error("no item found for key "+key));
    } catch(e){
      return throwError(() => e);
    }
  }
  clear(): Observable<boolean>{
    try{
      window.localStorage.clear();
      return of(true);
    } catch(e){
      return throwError(() => e);
    }
  }

}
