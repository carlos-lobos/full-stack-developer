import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DetalleComponent } from './detalle/detalle.component';
import { HomeComponent } from './home/home.component';
import { RegistroComponent } from './registro/registro.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"alta",component:RegistroComponent},
  {path:"login",component:LoginComponent},
  {path:"producto/:id",component:DetalleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
