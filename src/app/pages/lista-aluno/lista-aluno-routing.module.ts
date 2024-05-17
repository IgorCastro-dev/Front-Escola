import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaAlunoComponent } from './lista-aluno/lista-aluno.component';

const routes: Routes = [
  {path:'',component:ListaAlunoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListaAlunoRoutingModule { }
