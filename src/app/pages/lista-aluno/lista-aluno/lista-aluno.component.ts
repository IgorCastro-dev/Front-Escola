import { Component, AfterViewInit } from '@angular/core';
import { Aluno } from '../../../Model/Aluno';
import { MatTableDataSource } from '@angular/material/table';
import { AlunoService } from '../../../services/aluno/aluno.service';
import { Observable, catchError, of } from 'rxjs';

@Component({
  selector: 'app-lista-aluno',
  templateUrl: './lista-aluno.component.html',
  styleUrls: ['./lista-aluno.component.scss']
})
export class ListaAlunoComponent implements AfterViewInit {
  
  aluno!: Observable<Aluno[]>; 
  dataSource: MatTableDataSource<Aluno> = new MatTableDataSource<Aluno>();
  constructor(private alunoService: AlunoService) {
    this.aluno = this.alunoService.getAlunos().pipe(
      catchError(error => {
        console.log(error);
        return of([]);
      })
    );
  }
  
  ngAfterViewInit() {
    this.aluno.subscribe(alunos => {
      this.dataSource.data = alunos;
    });
  }

  buscarNomeOuCpf(data_aluno: string) {
    this.aluno = this.alunoService.getAlunosByNameOrCpf(data_aluno).pipe(
      catchError(error => {
        console.error(error);
        return of([]);
      })
    );
    

    
    this.aluno.subscribe(alunos => {
      this.dataSource.data = alunos;
    });
  }
  
  
}
