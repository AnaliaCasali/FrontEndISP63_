import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CarreraComponent } from './Components/Carrera/carrera/carrera.component';
import { InicioComponent } from './Components/Inicio/inicio/inicio.component';
import { NewCarreraComponent } from './Components/Carrera/new-carrera/new-carrera.component';

import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { TemaComponent } from './Components/Tema/tema/tema.component';
import { NewTemaComponent } from './Components/Tema/new-tema/new-tema.component';
//import { NgxSpinnerModule } from "ngx-spinner";
    


@NgModule({
  declarations: [
    AppComponent,
    CarreraComponent,
    InicioComponent,
    NewCarreraComponent,
    TemaComponent,
    NewTemaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
    //,NgxSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
