import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtualizaEscolaComponent } from './atualiza-escola/atualiza-escola.component';

const routes: Routes = [
  {path:'',component:AtualizaEscolaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AtualizaEscolaRoutingModule { }
