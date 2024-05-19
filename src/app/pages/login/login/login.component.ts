import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  nomeBotao = "entrar";
  user = new FormControl('', [Validators.required]);
  password = new FormControl('', Validators.required);
  hide = true;
  constructor(private router: Router){}
  logar(){
    const user = this.user.value;
    const password = this.password.value;
    if(user == "TESTE" && password == "123"){
      localStorage.setItem("user","TESTE");
      localStorage.setItem("password","123");
      this.router.navigate(['lista-aluno']);
    }else{
      console.log("nao entrou")
    }
  }

}
