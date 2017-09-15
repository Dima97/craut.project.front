// // export class User {
// //   id: number;
// //   nickName: string;
// //   firstName: string;
// //   lastName: string;
// //   password: string;
// //   email: string;
// //   image: string;
// //   role: string;
// // }
// export class User {
//   id: number;
//   username: string;
//   password: string;
//   firstname: string;
//   secondname: string;
//   email: string;
//   image: string;
//   role: string;
// }
import { Injectable } from '@angular/core';

@Injectable()
export class User {
  private _id: number;
  private _username: string;
  private _password: string;
  private _firstname: string;
  private _secondname: string;
  private _email: string;
  private _image: string;
  private _role: string;
  constructor(){}

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get username(): string {
    return this._username;
  }

  set username(value: string) {
    this._username = value;
  }

  get password(): string {
    return this._password;
  }

  set password(value: string) {
    this._password = value;
  }

  get firstname(): string {
    return this._firstname;
  }

  set firstname(value: string) {
    this._firstname = value;
  }

  get lastname(): string {
    return this._secondname;
  }

  set lastname(value: string) {
    this._secondname = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get image(): string {
    return this._image;
  }

  set image(value: string) {
    this._image = value;
  }

  get role(): string {
    return this._role;
  }

  set role(value: string) {
    this._role = value;
  }
}
