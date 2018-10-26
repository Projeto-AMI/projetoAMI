import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegistrarPage } from './registrar';
import {LoginPage} from "../login/login";

@NgModule({
  declarations: [
    RegistrarPage,
  ],
  imports: [
    IonicPageModule.forChild(RegistrarPage),
  ],exports:[
        RegistrarPage
    ]
})
export class RegistrarPageModule {}
