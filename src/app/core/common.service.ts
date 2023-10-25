import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }


  getUserData() {

    return {
      name: 'Jack',
      role: 'admin',
      email: 'jack@ci.io'
    }

  }
}
