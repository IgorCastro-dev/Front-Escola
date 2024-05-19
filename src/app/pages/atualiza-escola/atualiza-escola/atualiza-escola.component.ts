import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EscolaService } from '../../../services/escola/escola.service';
import { Escola } from '../../../Model/Escola';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from '../../../shared/components/error-dialog/error-dialog/error-dialog.component';

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
    private escolaService: EscolaService,
    private dialog: MatDialog
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
        if(error.error.title == null){
          this.openError("Erro ao atualizar a escola: "+error)
        }else{
          this.openError("Erro ao atualizar a escola: Algum campo inválido")
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
