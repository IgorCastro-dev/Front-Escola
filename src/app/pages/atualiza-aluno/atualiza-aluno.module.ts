import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AtualizaAlunoRoutingModule } from './atualiza-aluno-routing.module';
import { AtualizaAlunoComponent } from './atualiza-aluno/atualiza-aluno.component';
import { MaterialModule } from '../../shared/material/material.module';
import { NavbarModule } from '../../shared/components/navbar/navbar.module';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';


@NgModule({
  declarations: [
    AtualizaAlunoComponent
  ],
  imports: [
    CommonModule,
    AtualizaAlunoRoutingModule,
    MaterialModule,
    NavbarModule,
    NgxMaskDirective
  ],
  providers: [
    provideNgxMask()
]
})
export class AtualizaAlunoModule { }
