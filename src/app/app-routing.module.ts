import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstudiantesListadoComponent } from './components/estudiantes-listado/estudiantes-listado.component';
import { RoutingTestComponent } from './components/routing-test/routing-test.component';

const routes: Routes = [

  {path: 'EstudiantesListadoComponent', component: EstudiantesListadoComponent},
  {path: 'RoutingTestComponent', component: RoutingTestComponent}

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
