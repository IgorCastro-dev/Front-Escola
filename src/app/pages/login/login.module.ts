import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login/login.component';
import { MaterialModule } from '../../shared/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ErrorDialogModule } from '../../shared/components/error-dialog/error-dialog.module';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    MaterialModule,
    ErrorDialogModule
  ]
})
export class LoginModule { }
