import { Component, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormControl, FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule, } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login',
  providers:[AuthService],
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, FormsModule,
    ReactiveFormsModule, FlexLayoutModule, MatIconModule,
    MatButtonModule, CommonModule, MatCheckboxModule,],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})

export class LoginComponent implements OnInit {
  hide: boolean = true;
  // پروپرتی  برای فرم
  Form: FormGroup;
  constructor(private fb: FormBuilder, private authService:AuthService) {}

  ngOnInit() {
    this.Form = this.fb.group({
      // اعتبارسنجی فرم و تعریف کنترل ها
      
        // email: ['', [Validators.required, Validators.email]],
        username: ['', [Validators.required]],
        password: ['', [Validators.required]],
        rememberme: [false],
    });
   
  }
 
  
  get f():any { return this.Form.controls;}
  onSubmit() {
      this.authService.login({
        username:this.Form.value.username,
        password:this.Form.value.password,
  
      });
    }
    
  
  }

 