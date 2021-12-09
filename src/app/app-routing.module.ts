import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from '@modules/home/pages/home-page/home-page.component';

const routes: Routes = [
  {path:'auth',loadChildren: ()=> import('./modules/auth/auth.module').then(m=>m.AuthModule)},//loadChildren para hacer una lazyLoading y obtener mayor rAPIDEZ AL CARGAR SÓLO UN MODULO Y NO LA APP COMPLETA
  {path:'',component:HomePageComponent, loadChildren:()=> import('./modules/home/home.module').then(m=>m.HomeModule)}
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
