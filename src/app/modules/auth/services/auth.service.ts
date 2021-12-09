import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  sendCrentials(email:string, password:string):void{
    console.log('😉',email,password);
  }
}
