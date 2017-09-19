import { Injectable } from '@angular/core';

@Injectable()
export class User {
  id: number;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  email: string;
  image: string;
  role: string;

  constructor(){}
}
