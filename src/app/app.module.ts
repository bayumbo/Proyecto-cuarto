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
    AnalisisComponent
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
