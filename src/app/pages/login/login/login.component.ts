import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ErrorDialogComponent } from '../../../shared/components/error-dialog/error-dialog/error-dialog.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'] // Corrigi a propriedade para style**Urls**
})
export class LoginComponent {
  nomeBotao = "entrar";
  user = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);
  hide = true;

  constructor(private router: Router, public dialog: MatDialog) {}

  logar() {
    const user = this.user.value;
    const password = this.password.value;
    if (user === "TESTE" && password === "123") {
      localStorage.setItem("user", "TESTE");
      localStorage.setItem("password", "123");
      this.router.navigate(['lista-aluno']);
    } else {
      this.openError('Usuário ou Senha Inválido');
    }
  }

  openError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }
}
