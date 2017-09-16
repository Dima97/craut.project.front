import { Injectable } from '@angular/core';

@Injectable()
export class User {
  private _id: number;
  private _username: string;
  private _password: string;
  private _firstname: string;
  private _lastname: string;
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

  get firstName(): string {
    return this._firstname;
  }

  set firstName(value: string) {
    this._firstname = value;
  }

  get lastName(): string {
    return this._lastname;
  }

  set lastName(value: string) {
    this._lastname = value;
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
