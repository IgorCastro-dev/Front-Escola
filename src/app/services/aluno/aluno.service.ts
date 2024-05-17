import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Aluno } from '../../Model/Aluno';


@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  constructor(private http:HttpClient) { }
  private apiUrl = 'https://localhost:7101/api/Aluno/listar';
  getAlunos(): Observable<Aluno[]>{
    return this.http.get<Aluno[]>(`${this.apiUrl}`);
  }
}
