import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaEscolaRoutingModule } from './lista-escola-routing.module';
import { ListaEscolaComponent } from './lista-escola/lista-escola.component';
import { MaterialModule } from '../../shared/material/material.module';
import { NavbarModule } from '../../shared/components/navbar/navbar.module';


@NgModule({
  declarations: [
    ListaEscolaComponent
  ],
  imports: [
    CommonModule,
    ListaEscolaRoutingModule,
    MaterialModule,
    NavbarModule
  ]
})
export class ListaEscolaModule { }
