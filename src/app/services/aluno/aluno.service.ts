import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Aluno } from '../../Model/Aluno';
import { AlunoDto } from '../../Model/AlunoDto';


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

  getAlunoById(data_aluno:number):Observable<Aluno>{
    return this.http.get<Aluno>(`${this.apiUrl}/buscarById/${data_aluno}`);
  }

  postAluno(alunoDto:AlunoDto){
    return this.http.post(`${this.apiUrl}/salvar`,alunoDto);
  }

  putAluno(alunoId: number, alunoAtualizado:AlunoDto){
    const url = `${this.apiUrl}/${alunoId}`;
    return this.http.put(url,alunoAtualizado);
  }

}
