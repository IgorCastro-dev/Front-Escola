import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { guardGuard } from './Guard/guard.guard';

const routes: Routes = [
  {path:"",pathMatch:"full",redirectTo:'login'},
  { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)},
  { path: 'lista-aluno', loadChildren: () => import('./pages/lista-aluno/lista-aluno.module').then(m => m.ListaAlunoModule),canActivate:[guardGuard]},
  { path: 'cadastra-aluno', loadChildren: () => import('./pages/salva-aluno/salva-aluno.module').then(m => m.SalvaAlunoModule),canActivate:[guardGuard]},
  { path: 'atualiza-aluno/:id', loadChildren: () => import('./pages/atualiza-aluno/atualiza-aluno.module').then(m => m.AtualizaAlunoModule),canActivate:[guardGuard]},
  { path: 'lista-escola', loadChildren: () => import('./pages/lista-escola/lista-escola.module').then(m => m.ListaEscolaModule),canActivate:[guardGuard]},
  { path: 'cadastra-escola', loadChildren: () => import('./pages/salva-escola/salva-escola.module').then(m => m.SalvaEscolaModule),canActivate:[guardGuard]},
  { path: 'atualiza-escola/:id', loadChildren: () => import('./pages/atualiza-escola/atualiza-escola.module').then(m => m.AtualizaEscolaModule),canActivate:[guardGuard]},
  {path: '404', loadChildren: () => import('./pages/not-found/not-found.module').then(m => m.NotFoundModule),canActivate:[guardGuard]},
  {path: '**', redirectTo: '/404'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
