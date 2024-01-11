import { RouterModule,Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';


export const routes: Routes = [
    { path: '', component: WelcomeComponent },
        { path: 'auth',
        children: [
          { path: 'login', component: LoginComponent },
          { path: 'register', component: RegisterComponent },
        ],
      },
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
