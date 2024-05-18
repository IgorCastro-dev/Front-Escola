import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"",pathMatch:"full",redirectTo:'login'},
  { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)},
  { path: 'lista-aluno', loadChildren: () => import('./pages/lista-aluno/lista-aluno.module').then(m => m.ListaAlunoModule)},
  { path: 'cadastra-aluno', loadChildren: () => import('./pages/salva-aluno/salva-aluno.module').then(m => m.SalvaAlunoModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
