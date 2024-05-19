import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlunoService } from '../../../services/aluno/aluno.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from '../../../shared/components/error-dialog/error-dialog/error-dialog.component';

@Component({
  selector: 'app-salva-aluno',
  templateUrl: './salva-aluno.component.html',
  styleUrl: './salva-aluno.component.scss'
})
export class SalvaAlunoComponent {
  formGroup: FormGroup;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private alunoService: AlunoService,
    private dialog: MatDialog
  ){

    this.formGroup = this.fb.group({
      sNome: [,[Validators.required]],
      sCpf: [,[Validators.required]],
      idEscola: [,[Validators.required]],
      sEndereco: [,[Validators.required]],
      dNascimento: [,[Validators.required]],
      sCelular: ['(99) 9 9999-9999', [Validators.required]]
    });
  }

  cadastrarAluno() {
    const alunoNovo = this.formGroup.value;
    this.alunoService.postAluno(alunoNovo).subscribe({
      next: () => {
        this.router.navigate(['lista-aluno']);
      },
      error: (error) => {
        if(error.error.title == null){
          this.openError("Erro ao salvar o aluno: "+error)
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
