import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Usuario} from "../../Model/usuario";
import { AngularFireAuth } from 'angularfire2/auth';

/**
 * Generated class for the RegistrarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-registrar',
    templateUrl: 'registrar.html',
})
export class RegistrarPage {

    usuario = {} as Usuario;

    constructor(public navCtrl: NavController, public navParams: NavParams, private afAuth:AngularFireAuth) {
    }

    async registrar(usuario: Usuario){
        try {
            const result = await this.afAuth.auth.createUserWithEmailAndPassword(usuario.email, usuario.senha);
            this.navCtrl.push('LoginPage');
            console.log(result);

        }
        catch (e) {
            console.error(e);
        }

    }

}
