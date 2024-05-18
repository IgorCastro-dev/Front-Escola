import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SalvaAlunoComponent } from './salva-aluno/salva-aluno.component';

const routes: Routes = [
  {path:'',component:SalvaAlunoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalvaAlunoRoutingModule { }
