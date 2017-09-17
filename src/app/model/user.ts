// import { Injectable } from '@angular/core';
//
// @Injectable()
// export class User {
//   private id: number;
//   private username: string;
//   private password: string;
//   private firstname: string;
//   private lastname: string;
//   private email: string;
//   private image: string;
//   private role: string;
//
//   constructor(){}
//
//   get _id(): number {
//     return this.id;
//   }
//
//   set _id(value: number) {
//     this.id = value;
//   }
//
//   get _username(): string {
//     return this.username;
//   }
//
//   set _username(value: string) {
//     this.username = value;
//   }
//
//   get _password(): string {
//     return this.password;
//   }
//
//   set _password(value: string) {
//     this.password = value;
//   }
//
//   get _firstName(): string {
//     return this.firstname;
//   }
//
//   set _firstName(value: string) {
//     this.firstname = value;
//   }
//
//   get _lastName(): string {
//     return this.lastname;
//   }
//
//   set _lastName(value: string) {
//     this.lastname = value;
//   }
//
//   get _email(): string {
//     return this.email;
//   }
//
//   set _email(value: string) {
//     this.email = value;
//   }
//
//   get _image(): string {
//     return this.image;
//   }
//
//   set _image(value: string) {
//     this.image = value;
//   }
//
//   get _role(): string {
//     return this.role;
//   }
//
//   set _role(value: string) {
//     this.role = value;
//   }
// }
import { Injectable } from '@angular/core';

@Injectable()
export class User {
  iduser: number;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  email: string;
  image: string;
  role: string;

  constructor(){}
}
