import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  public Usuario: any;

  constructor() { }

  setGlobalUsuario(value: any){
    this.Usuario = value;
  }

  getGlobalUsuario(){
    return this.Usuario;
  }
}
