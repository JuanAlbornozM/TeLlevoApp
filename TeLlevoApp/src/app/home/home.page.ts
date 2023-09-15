import { Component } from '@angular/core';
import { GlobalService } from '../global.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  usu: any;

  constructor(private globalusuario: GlobalService, private router: Router) {}

  ngOnInit() {
    this.getGlobalusu();
  }

  getGlobalusu(){
    this.usu = this.globalusuario.getGlobalUsuario();
  }

  gologin(){
    this.router.navigate(['/login']);
  }

  


}
