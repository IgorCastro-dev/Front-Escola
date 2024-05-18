import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlunoService } from '../../../services/aluno/aluno.service';
import { ActivatedRoute, Router } from '@angular/router';

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

    this.route.params.subscribe(params => {
      const alunoId = params['id'];
      this.alunoId = alunoId;
    });
  }
  

  atualizaAluno() {
    const alunoAtualizado = this.formGroup.value;
    this.alunoService.putAluno(this.alunoId,alunoAtualizado).subscribe({
      next: () => {
        this.router.navigate(['lista-aluno']);
      },
      error: (error) => {
        console.log(error)
      },
    });
}

}
