import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"",pathMatch:"full",redirectTo:'login'},
  { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)},
  { path: 'lista-aluno', loadChildren: () => import('./pages/lista-aluno/lista-aluno.module').then(m => m.ListaAlunoModule)},
  { path: 'cadastra-aluno', loadChildren: () => import('./pages/salva-aluno/salva-aluno.module').then(m => m.SalvaAlunoModule)},
  { path: 'atualiza-aluno/:id', loadChildren: () => import('./pages/atualiza-aluno/atualiza-aluno.module').then(m => m.AtualizaAlunoModule)},
  { path: 'lista-escola', loadChildren: () => import('./pages/lista-escola/lista-escola.module').then(m => m.ListaEscolaModule)},
  { path: 'cadastra-escola', loadChildren: () => import('./pages/salva-escola/salva-escola.module').then(m => m.SalvaEscolaModule)},
  { path: 'atualiza-escola/:id', loadChildren: () => import('./pages/atualiza-escola/atualiza-escola.module').then(m => m.AtualizaEscolaModule)}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
