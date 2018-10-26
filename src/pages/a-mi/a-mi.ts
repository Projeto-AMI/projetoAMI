import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CadastroClientePage } from '../cadastro-cliente/cadastro-cliente';
import { HomePage } from '../home/home';
import { CadastroCuidadorPage } from '../cadastro-cuidador/cadastro-cuidador';

@Component({
  selector: 'page-a-mi',
  templateUrl: 'a-mi.html'
})
export class AMIPage {

  constructor(public navCtrl: NavController) {
  }
  goToCadastroCliente(params){
    if (!params) params = {};
    this.navCtrl.push(CadastroClientePage);
  }goToHome(params){
    if (!params) params = {};
    this.navCtrl.push(HomePage);
  }goToCadastroCuidador(params){
    if (!params) params = {};
    this.navCtrl.push(CadastroCuidadorPage);
  }
}
