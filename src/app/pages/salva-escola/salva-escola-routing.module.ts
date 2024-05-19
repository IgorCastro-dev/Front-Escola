import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SalvaEscolaComponent } from './salva-escola/salva-escola.component';

const routes: Routes = [
  {path:'',component:SalvaEscolaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalvaEscolaRoutingModule { }
