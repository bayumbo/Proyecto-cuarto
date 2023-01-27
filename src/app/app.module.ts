import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { AppComponent } from './app.component';
import { SignupComponent } from './components/signup/signup.component';
import { SigninComponent } from './components/signin/signin.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { PrivateTasksComponent } from './components/private-tasks/private-tasks.component';
import { AuthGuard } from "./auth.guard";
import { TokenInterceptorService } from "./services/token-interceptor.service";
import { PrimerComponent } from './components/primer/primer.component';
import { SegundoComponent } from './components/segundo/segundo.component';
import { TerceroComponent } from './components/tercero/tercero.component';
import { CuartoComponent } from './components/cuarto/cuarto.component';
import { QuintoComponent } from './components/quinto/quinto.component';
import { AnalisisComponent } from './components/primer/analisis/analisis.component';
import { FundamentosComponent } from './components/primer/fundamentos/fundamentos.component';
import { IntroDesarrolloComponent } from './components/primer/intro-desarrollo/intro-desarrollo.component';
import { MateDiscretaComponent } from './components/primer/mate-discreta/mate-discreta.component';
import { AlgebraTrigonometriaComponent } from './components/segundo/algebra-trigonometria/algebra-trigonometria.component';
import { AnalisisMatematicoComponent } from './components/segundo/analisis-matematico/analisis-matematico.component';
import { BaseDatosRelacionalComponent } from './components/segundo/base-datos-relacional/base-datos-relacional.component';
import { MetodologiasDesarrolloComponent } from './components/segundo/metodologias-desarrollo/metodologias-desarrollo.component';
import { ProgramacionOrientadaObjComponent } from './components/segundo/programacion-orientada-obj/programacion-orientada-obj.component';
import { TecnicasComunicacionComponent } from './components/segundo/tecnicas-comunicacion/tecnicas-comunicacion.component';
import { BaseDatosNoRelacionalComponent } from './components/tercero/base-datos-no-relacional/base-datos-no-relacional.component';
import { CalculoDiferencialComponent } from './components/tercero/calculo-diferencial/calculo-diferencial.component';
import { DisenoInterfazComponent } from './components/tercero/diseno-interfaz/diseno-interfaz.component';
import { DesarrolloWebComponent } from './components/tercero/desarrollo-web/desarrollo-web.component';
import { DesarrolloAppMovilComponent } from './components/cuarto/desarrollo-app-movil/desarrollo-app-movil.component';
import { BackendDesarrolloWebComponent } from './components/cuarto/backend-desarrollo-web/backend-desarrollo-web.component';
import { LegislacionInformaticaComponent } from './components/cuarto/legislacion-informatica/legislacion-informatica.component';
import { EstadisticaAplicadaComponent } from './components/cuarto/estadistica-aplicada/estadistica-aplicada.component';
import { AplicacionesMovilesComponent } from './components/quinto/aplicaciones-moviles/aplicaciones-moviles.component';
import { ArquitecturaSoftwareComponent } from './components/quinto/arquitectura-software/arquitectura-software.component';
import { CalidadSoftwareComponent } from './components/quinto/calidad-software/calidad-software.component';
import { ProyectosSoftwareComponent } from './components/quinto/proyectos-software/proyectos-software.component';
import { EmprendimientoComponent } from './components/cuarto/emprendimiento/emprendimiento.component';


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    TasksComponent,
    PrivateTasksComponent,
    PrimerComponent,
    SegundoComponent,
    TerceroComponent,
    CuartoComponent,
    QuintoComponent,
    AnalisisComponent,
    FundamentosComponent,
    IntroDesarrolloComponent,
    MateDiscretaComponent,
    AlgebraTrigonometriaComponent,
    AnalisisMatematicoComponent,
    BaseDatosRelacionalComponent,
    MetodologiasDesarrolloComponent,
    ProgramacionOrientadaObjComponent,
    TecnicasComunicacionComponent,
    BaseDatosNoRelacionalComponent,
    CalculoDiferencialComponent,
    DisenoInterfazComponent,
    DesarrolloWebComponent,
    DesarrolloAppMovilComponent,
    BackendDesarrolloWebComponent,
    LegislacionInformaticaComponent,
    EstadisticaAplicadaComponent,
    AplicacionesMovilesComponent,
    ArquitecturaSoftwareComponent,
    CalidadSoftwareComponent,
    ProyectosSoftwareComponent,
    EmprendimientoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
