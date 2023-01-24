import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//components
import { TasksComponent } from './components/tasks/tasks.component'
import { PrivateTasksComponent } from './components/private-tasks/private-tasks.component';
import { SignupComponent } from "./components/signup/signup.component";
import { SigninComponent } from "./components/signin/signin.component";
import { PrimerComponent } from "./components/primer/primer.component";
import { AnalisisComponent } from "./components/primer/analisis/analisis.component";
import { SegundoComponent } from "./components/segundo/segundo.component";
import { TerceroComponent } from "./components/tercero/tercero.component";
import { CuartoComponent } from "./components/cuarto/cuarto.component";
import { QuintoComponent } from "./components/quinto/quinto.component";
import { AuthGuard } from "./auth.guard";
const routes: Routes = [
  {
    path: ' ',
    redirectTo: 'tasks',
    pathMatch: 'full'
  },
  {
    path: 'tasks',
    component: TasksComponent
  },
  {
    path: 'tasks-private',
    component: PrivateTasksComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: SigninComponent
  },
  {
    path: 'registrarse',
    component: SignupComponent
  },
  {
    path: 'primer',
    component: PrimerComponent
  },
  {
    path: 'segundo',
    component: SegundoComponent
  },
  {
    path: 'tercero',
    component: TerceroComponent
  },
  {
    path: 'cuarto',
    component: CuartoComponent
  },
  {
    path: 'quinto',
    component: QuintoComponent
  },
  {
    path: 'analisis',
    component: AnalisisComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
