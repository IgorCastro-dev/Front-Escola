import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaEscolaComponent } from './lista-escola/lista-escola.component';

const routes: Routes = [
  {path:'',component:ListaEscolaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListaEscolaRoutingModule { }
