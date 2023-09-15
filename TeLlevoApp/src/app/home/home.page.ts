import { Component } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  usu: string = '';

  constructor(private globalusuario: GlobalService) {}

  getGlobalusu(){
    this.usu = this.globalusuario.getGlobalUsuario();
    console.log(this.usu);
  }

  


}
