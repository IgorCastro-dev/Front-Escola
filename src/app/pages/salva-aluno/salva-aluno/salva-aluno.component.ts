import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlunoService } from '../../../services/aluno/aluno.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from '../../../shared/components/error-dialog/error-dialog/error-dialog.component';
import { HttpErrorResponse } from '@angular/common/http';
import { EscolaService } from '../../../services/escola/escola.service';
import { Escola } from '../../../Model/Escola';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-salva-aluno',
  templateUrl: './salva-aluno.component.html',
  styleUrl: './salva-aluno.component.scss'
})
export class SalvaAlunoComponent implements OnInit{
  hasEscolas: boolean = true;
  formGroup!: FormGroup;
  escolas: Escola[] = [];
  get isFormValid(){
    return !this.formGroup.valid;
  }

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private alunoService: AlunoService,
    private dialog: MatDialog,
    private escolaService: EscolaService
  ){
  }

  ngOnInit():void{
    this.pegarEscolas()
    this.formGroup = this.fb.group({
      sNome: [,[Validators.required]],
      sCpf: ['',[Validators.required,Validators.minLength(11)]],
      iCodEscola: [,[Validators.required]],
      sEndereco: [,[Validators.required]],
      dNascimento: [,[Validators.required]],
      sCelular: ['', [Validators.required,Validators.minLength(11)]]
    });
  }

  async pegarEscolas(){
    const resp = await firstValueFrom(this.escolaService.getEscolas());
      this.escolas = resp;
      this.hasEscolas = this.escolas.length > 0;
  }

  cadastrarAluno() {

    const alunoNovo = this.formGroup.value;
    alunoNovo.iCodEscola = parseInt(alunoNovo.iCodEscola);
    this.alunoService.postAluno(alunoNovo).subscribe({
      next: () => {
        this.router.navigate(['lista-aluno']);
      },
      error: (error:HttpErrorResponse) => {
        if(error.error.title == null){
          this.openError("Erro ao salvar o aluno: "+error.error)
          console.log(error)
        }else{
          this.openError("Erro ao salvar o aluno: Algum campo inválido")
        }
      },
    });
}

openError(errorMsg: string) {
  this.dialog.open(ErrorDialogComponent, {
    data: errorMsg
  });
}



}
