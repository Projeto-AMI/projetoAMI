import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ChatPage } from '../pages/chat/chat';
import { ContaPage } from '../pages/conta/conta';
import { LoginPage } from '../pages/login/login';
import { EditarPerfilPage } from '../pages/editar-perfil/editar-perfil';
import { CadastroCuidadorPage } from '../pages/cadastro-cuidador/cadastro-cuidador';
import { CadastroClientePage } from '../pages/cadastro-cliente/cadastro-cliente';
import { AMIPage } from '../pages/a-mi/a-mi';
import { ConversaPage } from '../pages/conversa/conversa';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ChatPage,
    ContaPage,
    LoginPage,
    EditarPerfilPage,
    CadastroCuidadorPage,
    CadastroClientePage,
    AMIPage,
    ConversaPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ChatPage,
    ContaPage,
    LoginPage,
    EditarPerfilPage,
    CadastroCuidadorPage,
    CadastroClientePage,
    AMIPage,
    ConversaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}