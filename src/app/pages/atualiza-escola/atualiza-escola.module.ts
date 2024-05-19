import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AtualizaEscolaRoutingModule } from './atualiza-escola-routing.module';
import { AtualizaEscolaComponent } from './atualiza-escola/atualiza-escola.component';
import { MaterialModule } from '../../shared/material/material.module';
import { NavbarModule } from '../../shared/components/navbar/navbar.module';


@NgModule({
  declarations: [
    AtualizaEscolaComponent
  ],
  imports: [
    CommonModule,
    AtualizaEscolaRoutingModule,
    MaterialModule,
    NavbarModule
  ]
})
export class AtualizaEscolaModule { }
