import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EscolaService } from '../../../services/escola/escola.service';
import { Escola } from '../../../Model/Escola';

@Component({
  selector: 'app-atualiza-escola',
  templateUrl: './atualiza-escola.component.html',
  styleUrl: './atualiza-escola.component.scss'
})
export class AtualizaEscolaComponent {
  escolaId!: number;
  formGroup: FormGroup;
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private escolaService: EscolaService
  ){

    this.formGroup = this.fb.group({
      sDescricao: [,[Validators.required]],
    });

    this.route.params.subscribe(params => {
      const escolaId = params['id'];
      this.escolaId = escolaId;
    });
  }
  
  ngOnInit(){
    this.escolaService.getEscolaById(this.escolaId).subscribe((escola: Escola) => {
      this.formGroup.patchValue({
        sDescricao: escola.sDescricao
      });
    });
  }

  atualizarEscola() {
    const escolaAtualizada = this.formGroup.value;
    this.escolaService.putEscola(this.escolaId,escolaAtualizada).subscribe({
      next: () => {
        this.router.navigate(['lista-escola']);
      },
      error: (error) => {
        console.log(error)
      },
    });
}


}
