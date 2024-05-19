import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EscolaService } from '../../../services/escola/escola.service';

@Component({
  selector: 'app-salva-escola',
  templateUrl: './salva-escola.component.html',
  styleUrl: './salva-escola.component.scss'
})
export class SalvaEscolaComponent {
  formGroup: FormGroup;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private escolaService: EscolaService
  ){

    this.formGroup = this.fb.group({
      idEscola: [,[Validators.required]],
      sDescricao: [,[Validators.required]]
    });
  }

  cadastrarEscola() {
    const escolaNova = this.formGroup.value;
    this.escolaService.postEscola(escolaNova).subscribe({
      next: () => {
        this.router.navigate(['lista-escola']);
      },
      error: (error) => {
        console.log(error)
      },
    });
}

}
