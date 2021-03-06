import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//rutas
// Es nuestro router donde estan todas las rutas principales
import { APP_ROUTES } from './app.routes';

// Modulos
// importamos este modulo para que el modulo principal no este cargado
// asi que creamos otro modulo. basicamente todas las secciones de nuestra pagina tendra su propio modulo
import { PagesModule } from './pages/pages.module';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';
// import { IncrementadorComponent } from './components/incrementador/incrementador.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { GraficoDonaComponent } from './components/grafico-dona/grafico-dona.component';

// temporal
// import { FormsModule } from '@angular/forms';

// servicios
import { ServiceModule } from './services/service.module';
import { PagesComponent } from './pages/pages.component';
import { SharedModule } from './shared/shared.module';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    PagesComponent
    // GraficoDonaComponent,
    // IncrementadorComponent,
  ],
  imports: [
    // A qui importamos los modulos y las rutas
    BrowserModule,
    AppRoutingModule,
    APP_ROUTES,
    // PagesModule,
    FormsModule,
    ReactiveFormsModule,
    ServiceModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
