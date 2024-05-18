import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtualizaAlunoComponent } from './atualiza-aluno/atualiza-aluno.component';

const routes: Routes = [
  {path:'',component:AtualizaAlunoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AtualizaAlunoRoutingModule { }
