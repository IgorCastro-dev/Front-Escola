import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlunoService } from '../../../services/aluno/aluno.service';
import { Router } from '@angular/router';

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
    private alunoService: AlunoService
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
    console.log(alunoNovo)
    this.alunoService.postAluno(alunoNovo).subscribe({
      next: () => {
        this.router.navigate(['lista-aluno']);
      },
      error: (error) => {
        console.log(error)
      },
    });
}

}
