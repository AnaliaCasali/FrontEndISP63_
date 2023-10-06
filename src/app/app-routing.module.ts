import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarreraComponent } from './Components/Carrera/carrera/carrera.component';

import { InicioComponent } from './Components/Inicio/inicio/inicio.component';
import { NewCarreraComponent } from './Components/Carrera/new-carrera/new-carrera.component';
import { TemaComponent } from './Components/Tema/tema/tema.component';
import { NewTemaComponent } from './Components/Tema/new-tema/new-tema.component';
const routes: Routes = [
{path:'carrera', component:CarreraComponent},
{path:'nuevacarrera', component:NewCarreraComponent},
{path:'tema', component:TemaComponent},
{path:'nuevotema', component:NewTemaComponent},
{path:'editarTema/:id', component:NewTemaComponent},
{path:'editarCarrera/:id', component:NewCarreraComponent},
{path:'inicio', component:InicioComponent},

/*si no se especifico ruta redirige a  login*/
{path:'',redirectTo:'',pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
