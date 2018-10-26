import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Usuario } from "../../Model/usuario";
import { AngularFireAuth } from 'angularfire2/auth';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-login',
    templateUrl: 'login.html',
})

export class LoginPage {

    usuario = {} as Usuario;

    constructor(public navCtrl: NavController, public navParams: NavParams, private afAuth: AngularFireAuth) {
    }

    login(usuario: Usuario){
        try {
            const result = this.afAuth.auth.signInWithEmailAndPassword(usuario.email, usuario.senha);
            if(result) {
                this.navCtrl.setRoot('HomePage');
            }
        }
        catch (e) {
            console.error(e);
        }
    }

    registrar(){
        this.navCtrl.push('RegistrarPage');
    }

}
