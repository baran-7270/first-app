import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
import { FlexLayoutModule } from "@angular/flex-layout";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { WelcomeComponent } from "./welcome/welcome.component";
import { AuthComponent } from "./auth/auth.component";
import { LoginComponent } from "./auth/login/login.component";
import { RegisterComponent } from "./auth/register/register.component";

@NgModule({
  declarations: [AppComponent,],

  imports: [CommonModule,BrowserAnimationsModule , BrowserModule,FlexLayoutModule, LoginComponent,RegisterComponent,AuthComponent],
  
  providers: [],

  bootstrap: [AppComponent],
})
export class AppModule {}