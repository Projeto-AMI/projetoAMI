import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';



@IonicPage()
@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    constructor(public navCtrl: NavController,public navParams: NavParams , private afAuth: AngularFireAuth, private toast: ToastController) {

    }

    ionViewWillLoad(){
        this.afAuth.authState.subscribe(data => {
            if(data && data.email && data.uid) {
                this.toast.create({
                    message: 'Bem Vindo ao AMI: ' + data.email,
                    duration: 3000

                }).present();
            }
            else {
                this.toast.create({
                    message: 'Vc não foi autenticado',
                    duration: 3000

                }).present()
            }
        });
    }
}
