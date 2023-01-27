import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//components
import { TasksComponent } from './components/tasks/tasks.component'
import { PrivateTasksComponent } from './components/private-tasks/private-tasks.component';
import { SignupComponent } from "./components/signup/signup.component";
import { SigninComponent } from "./components/signin/signin.component";
import { PrimerComponent } from "./components/primer/primer.component";
import { AnalisisComponent } from "./components/primer/analisis/analisis.component";
import { FundamentosComponent } from "./components/primer/fundamentos/fundamentos.component";
import { IntroDesarrolloComponent } from "./components/primer/intro-desarrollo/intro-desarrollo.component";
import { MateDiscretaComponent } from "./components/primer/mate-discreta/mate-discreta.component";
import { SegundoComponent } from "./components/segundo/segundo.component";
import { AlgebraTrigonometriaComponent } from "./components/segundo/algebra-trigonometria/algebra-trigonometria.component";
import { AnalisisMatematicoComponent } from "./components/segundo/analisis-matematico/analisis-matematico.component";
import { BaseDatosRelacionalComponent } from "./components/segundo/base-datos-relacional/base-datos-relacional.component";
import { MetodologiasDesarrolloComponent } from "./components/segundo/metodologias-desarrollo/metodologias-desarrollo.component";
import { ProgramacionOrientadaObjComponent } from "./components/segundo/programacion-orientada-obj/programacion-orientada-obj.component";
import { TecnicasComunicacionComponent } from "./components/segundo/tecnicas-comunicacion/tecnicas-comunicacion.component";
import { TerceroComponent } from "./components/tercero/tercero.component";
import { BaseDatosNoRelacionalComponent } from "./components/tercero/base-datos-no-relacional/base-datos-no-relacional.component";
import { CalculoDiferencialComponent } from "./components/tercero/calculo-diferencial/calculo-diferencial.component";
import { DesarrolloWebComponent } from "./components/tercero/desarrollo-web/desarrollo-web.component";
import { DisenoInterfazComponent } from "./components/tercero/diseno-interfaz/diseno-interfaz.component";
import { CuartoComponent } from "./components/cuarto/cuarto.component";
import { BackendDesarrolloWebComponent } from "./components/cuarto/backend-desarrollo-web/backend-desarrollo-web.component";
import { DesarrolloAppMovilComponent } from "./components/cuarto/desarrollo-app-movil/desarrollo-app-movil.component";
import { EstadisticaAplicadaComponent } from "./components/cuarto/estadistica-aplicada/estadistica-aplicada.component";
import { LegislacionInformaticaComponent } from "./components/cuarto/legislacion-informatica/legislacion-informatica.component";
import { EmprendimientoComponent } from "./components/cuarto/emprendimiento/emprendimiento.component";
import { QuintoComponent } from "./components/quinto/quinto.component";
import { AplicacionesMovilesComponent } from "./components/quinto/aplicaciones-moviles/aplicaciones-moviles.component";
import { ArquitecturaSoftwareComponent } from "./components/quinto/arquitectura-software/arquitectura-software.component";
import { CalidadSoftwareComponent } from "./components/quinto/calidad-software/calidad-software.component";
import { ProyectosSoftwareComponent } from "./components/quinto/proyectos-software/proyectos-software.component";
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
  {
    path: 'fundamentos',
    component: FundamentosComponent
  },
  {
    path: 'intro-desarrollo',
    component: IntroDesarrolloComponent
  },
  {
    path: 'mate-discreta',
    component: MateDiscretaComponent
  },
  {
    path: 'algebra-trigonometria',
    component: AlgebraTrigonometriaComponent
  },
  {
    path: 'analisis-matematico',
    component: AnalisisMatematicoComponent
  },
  {
    path: 'base-datos-relacional',
    component: BaseDatosRelacionalComponent
  },
  {
    path: 'metodologias-desarrollo',
    component: MetodologiasDesarrolloComponent
  },
  {
    path: 'programacion-orientada-obj',
    component: ProgramacionOrientadaObjComponent
  },
  {
    path: 'tecnicas-comunicacion',
    component: TecnicasComunicacionComponent
  },
  {
    path: 'base-datos-no-relacional',
    component: BaseDatosNoRelacionalComponent
  },
  {
    path: 'calculo-diferencial',
    component: CalculoDiferencialComponent
  },
  {
    path: 'desarrollo-web',
    component: DesarrolloWebComponent
  },
  {
    path: 'diseno-interfaz',
    component: DisenoInterfazComponent
  },
  {
    path: 'backend-desarrollo-web',
    component: BackendDesarrolloWebComponent
  },
  {
    path: 'desarrollo-app-movil',
    component: DesarrolloAppMovilComponent
  },
  {
    path: 'estadistica-aplicada',
    component: EstadisticaAplicadaComponent
  },
  {
    path: 'legislacion-informatica',
    component: LegislacionInformaticaComponent
  },
  {
    path: 'emprendimiento',
    component: EmprendimientoComponent
  },
  {
    path: 'aplicaciones-moviles',
    component: AplicacionesMovilesComponent
  },
  {
    path: 'arquitectura-sotfware',
    component: ArquitecturaSoftwareComponent
  },
  {
    path: 'calidad-software',
    component: CalidadSoftwareComponent
  },
  {
    path: 'proyectos-software',
    component: ProyectosSoftwareComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
