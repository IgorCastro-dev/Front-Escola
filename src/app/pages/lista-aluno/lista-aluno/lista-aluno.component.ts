import { Component, AfterViewInit } from '@angular/core';
import { Aluno } from '../../../Model/Aluno';
import { MatTableDataSource } from '@angular/material/table';
import { AlunoService } from '../../../services/aluno/aluno.service';
import { Observable, catchError, of } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-aluno',
  templateUrl: './lista-aluno.component.html',
  styleUrls: ['./lista-aluno.component.scss']
})
export class ListaAlunoComponent implements AfterViewInit {
  
  aluno!: Observable<Aluno[]>; 
  dataSource: MatTableDataSource<Aluno> = new MatTableDataSource<Aluno>();
  constructor(private alunoService: AlunoService,private router: Router,) {
    this.aluno = this.alunoService.getAlunos();
  }
  
  ngAfterViewInit() {
    this.aluno.subscribe(alunos => {
      this.dataSource.data = alunos;
    });
  }

  goToAddAluno(){
    this.router.navigate(['cadastra-aluno']);
  }

  buscarNomeOuCpf(data_aluno: string) {
    this.aluno = this.alunoService.getAlunosByNameOrCpf(data_aluno);
    
    this.aluno.subscribe(alunos => {
      this.dataSource.data = alunos;
    });
  }
  
  goToAtualizaAluno(alunoId: number) {
    this.router.navigate(['atualiza-aluno', alunoId]);
  };
  
  deletaAluno(alunoId: number){
    this.alunoService.deletaAluno(alunoId).subscribe(() => {
      this.dataSource.data = this.dataSource.data.filter(aluno => aluno.iCodAluno !== alunoId);
    })
  }
}
