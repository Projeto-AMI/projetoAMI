import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EditarPerfilPage } from '../editar-perfil/editar-perfil';
import { HomePage } from '../home/home';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-conta',
  templateUrl: 'conta.html'
})
export class ContaPage {

  constructor(public navCtrl: NavController) {
  }
  goToEditarPerfil(params){
    if (!params) params = {};
    this.navCtrl.push(EditarPerfilPage);
  }goToHome(params){
    if (!params) params = {};
    this.navCtrl.push(HomePage);
  }goToLogin(params){
      if (!params) params = {};
      this.navCtrl.push(LoginPage);
    }
}
