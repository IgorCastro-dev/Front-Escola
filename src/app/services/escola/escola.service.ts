import { Injectable } from '@angular/core';
import { Escola } from '../../Model/Escola';
import { Observable } from 'rxjs';
import { EscolaDto } from '../../Model/EscolaDto';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EscolaService {

  constructor(private http:HttpClient) { }
  private apiUrl = 'https://localhost:7101/api/Escola';
  getEscolas(): Observable<Escola[]>{
    return this.http.get<Escola[]>(`${this.apiUrl}/listar`);
  }

  getEscolasByDescricao(descricao:string):Observable<Escola[]>{
    return this.http.get<Escola[]>(`${this.apiUrl}/buscar/${descricao}`);
  }

  postEscola(escolaDto:EscolaDto){
    return this.http.post(`${this.apiUrl}/salvar`,escolaDto);
  }

  putEscola(escolaId: number, escolaAtualizada:EscolaDto){
    const url = `${this.apiUrl}/${escolaId}`;
    return this.http.put(url,escolaAtualizada);
  }

  getEscolaById(escolaId:number):Observable<Escola>{
    return this.http.get<Escola>(`${this.apiUrl}/buscarById/${escolaId}`);
  }

  deletaEscola(escolaId: number){
    return this.http.delete(`${this.apiUrl}/${escolaId}`)
  }
}
