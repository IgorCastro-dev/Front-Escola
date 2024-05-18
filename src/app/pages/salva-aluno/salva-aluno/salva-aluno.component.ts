import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-salva-aluno',
  templateUrl: './salva-aluno.component.html',
  styleUrl: './salva-aluno.component.scss'
})
export class SalvaAlunoComponent {
  formGroup: FormGroup;
  constructor(
    private fb: FormBuilder){

    this.formGroup = this.fb.group({
      nome: [,[Validators.required]],
      cpf: [,[Validators.required]],
      idEscola: [,[Validators.required]],
      endereco: [,[Validators.required]],
      nascimento: [,[Validators.required]],
      celular: ['(99) 9 9999-9999', [Validators.required]]
    });
  }

}
