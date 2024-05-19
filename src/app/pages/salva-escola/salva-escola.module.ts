import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalvaEscolaRoutingModule } from './salva-escola-routing.module';
import { SalvaEscolaComponent } from './salva-escola/salva-escola.component';
import { MaterialModule } from '../../shared/material/material.module';
import { NavbarModule } from '../../shared/components/navbar/navbar.module';


@NgModule({
  declarations: [
    SalvaEscolaComponent
  ],
  imports: [
    CommonModule,
    SalvaEscolaRoutingModule,
    MaterialModule,
    NavbarModule
  ]
})
export class SalvaEscolaModule { }
