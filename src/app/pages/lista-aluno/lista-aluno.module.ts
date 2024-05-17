import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaAlunoRoutingModule } from './lista-aluno-routing.module';
import { ListaAlunoComponent } from './lista-aluno/lista-aluno.component';
import { NavbarModule } from '../../shared/components/navbar/navbar.module';
import { MaterialModule } from '../../shared/material/material.module';


@NgModule({
  declarations: [
    ListaAlunoComponent
  ],
  imports: [
    CommonModule,
    ListaAlunoRoutingModule,
    NavbarModule,
    MaterialModule
  ]
})
export class ListaAlunoModule { }
