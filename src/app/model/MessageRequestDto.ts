import {Injectable} from "@angular/core";

@Injectable()
export class MessageRequestDto{
  text:string;
  theme = 'confirm my account';
  image:string;
}
