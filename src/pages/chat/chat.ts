import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ConversaPage } from '../conversa/conversa';

@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html'
})
export class ChatPage {

  constructor(public navCtrl: NavController) {
  }
  goToConversa(params){
    if (!params) params = {};
    this.navCtrl.push(ConversaPage);
  }
}
