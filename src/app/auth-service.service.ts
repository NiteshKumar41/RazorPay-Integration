import { Injectable } from '@angular/core';
function _window() : any {
  return window;
}

@Injectable({
  providedIn: 'root'
})


export class AuthServiceService {
  get nativeWindow() : any {
    return _window();
 }
  constructor() { }
}
