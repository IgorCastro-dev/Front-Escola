import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalvaAlunoRoutingModule } from './salva-aluno-routing.module';
import { SalvaAlunoComponent } from './salva-aluno/salva-aluno.component';
import { MaterialModule } from '../../shared/material/material.module';
import { NavbarModule } from '../../shared/components/navbar/navbar.module';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';

@NgModule({
  declarations: [
    SalvaAlunoComponent
  ],
  imports: [
    CommonModule,
    SalvaAlunoRoutingModule,
    MaterialModule,
    NavbarModule,
    NgxMaskDirective
  ],
  providers: [
    provideNgxMask()
]
})
export class SalvaAlunoModule { }
