import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AMIPage } from '../a-mi/a-mi';
import { CadastroClientePage } from '../cadastro-cliente/cadastro-cliente';
import { CadastroCuidadorPage } from '../cadastro-cuidador/cadastro-cuidador';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController) {
  }
  goToHome(params){
    if (!params) params = {};
    this.navCtrl.push(HomePage);
  }goToAMI(params){
    if (!params) params = {};
    this.navCtrl.push(AMIPage);
  }goToCadastroCliente(params){
    if (!params) params = {};
    this.navCtrl.push(CadastroClientePage);
  }goToCadastroCuidador(params){
    if (!params) params = {};
    this.navCtrl.push(CadastroCuidadorPage);
  }
}
