import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ChatPage } from '../pages/chat/chat';
import { ConversaPage } from '../pages/conversa/conversa';
import { ContaPage } from '../pages/conta/conta';
import { EditarPerfilPage } from '../pages/editar-perfil/editar-perfil';


import { LoginPage } from '../pages/login/login';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) navCtrl: Nav;
    rootPage:any = LoginPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  goToHome(params){
    if (!params) params = {};
    this.navCtrl.setRoot(HomePage);
  }goToChat(params){
    if (!params) params = {};
    this.navCtrl.setRoot(ChatPage);
  }goToConversa(params){
    if (!params) params = {};
    this.navCtrl.setRoot(ConversaPage);
  }goToConta(params){
    if (!params) params = {};
    this.navCtrl.setRoot(ContaPage);
  }goToEditarPerfil(params){
    if (!params) params = {};
    this.navCtrl.setRoot(EditarPerfilPage);
  }
}
