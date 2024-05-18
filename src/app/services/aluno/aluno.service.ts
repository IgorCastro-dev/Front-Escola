import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Aluno } from '../../Model/Aluno';


@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  constructor(private http:HttpClient) { }
  private apiUrl = 'https://localhost:7101/api/Aluno';
  getAlunos(): Observable<Aluno[]>{
    return this.http.get<Aluno[]>(`${this.apiUrl}/listar`);
  }

  getAlunosByNameOrCpf(data_aluno:string):Observable<Aluno[]>{
    return this.http.get<Aluno[]>(`${this.apiUrl}/buscar/${data_aluno}`);
  }
}
