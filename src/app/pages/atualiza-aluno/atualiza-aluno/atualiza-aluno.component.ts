import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlunoService } from '../../../services/aluno/aluno.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Aluno } from '../../../Model/Aluno';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from '../../../shared/components/error-dialog/error-dialog/error-dialog.component';

@Component({
  selector: 'app-atualiza-aluno',
  templateUrl: './atualiza-aluno.component.html',
  styleUrl: './atualiza-aluno.component.scss'
})

export class AtualizaAlunoComponent {
  alunoId!: number;
  formGroup: FormGroup;
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
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

    this.route.params.subscribe(params => {
      const alunoId = params['id'];
      this.alunoId = alunoId;
    });
  }
  
  ngOnInit(){
    this.alunoService.getAlunoById(this.alunoId).subscribe((aluno: Aluno) => {
      this.formGroup.patchValue({
        sNome: aluno.sNome,
        sCpf: aluno.sCPF,
        sEndereco: aluno.sEndereco,
        dNascimento: aluno.dNascimento,
        sCelular: aluno.sCelular,
        idEscola: aluno.iCodEscola
      });
    });
  }

  atualizaAluno() {
    const alunoAtualizado = this.formGroup.value;
    this.alunoService.putAluno(this.alunoId,alunoAtualizado).subscribe({
      next: () => {
        this.router.navigate(['lista-aluno']);
      },
      error: (error) => {
        if(error.error.title == null){
          this.openError("Erro ao atualizar o aluno: "+error)
        }else{
          this.openError("Erro ao atualizar o aluno: Algum campo inválido")
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
