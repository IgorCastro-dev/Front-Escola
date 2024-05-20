import { Component } from '@angular/core';
import { Escola } from '../../../Model/Escola';
import { MatTableDataSource } from '@angular/material/table';
import { Observable, catchError, of } from 'rxjs';
import { EscolaService } from '../../../services/escola/escola.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-escola',
  templateUrl: './lista-escola.component.html',
  styleUrl: './lista-escola.component.scss'
})
export class ListaEscolaComponent {
  escola!: Observable<Escola[]>; 
  dataSource: MatTableDataSource<Escola> = new MatTableDataSource<Escola>();
  constructor(private escolaService: EscolaService,private router: Router) {
    this.escola = this.escolaService.getEscolas();
  }
  
  ngAfterViewInit() {
    this.escola.subscribe(escolas => {
      this.dataSource.data = escolas;
    });
  }

  goToAddEscola(){
    this.router.navigate(['cadastra-escola']);
  }

  buscarDescricao(descricao: string) {
    this.escola = this.escolaService.getEscolasByDescricao(descricao).pipe(
      catchError(error => {
        console.error(error);
        return of([]);
      })
    );
    
    this.escola.subscribe(escolas => {
      this.dataSource.data = escolas;
    });
  }
  
  goToAtualizaEscola(escolaId: number) {
    this.router.navigate(['atualiza-escola', escolaId]);
  };
  
  deletaEscola(escolaId: number){
    this.escolaService.deletaEscola(escolaId).subscribe(() => {
      this.dataSource.data = this.dataSource.data.filter(escola => escola.iCodEscola !== escolaId);
    })
  }
}
