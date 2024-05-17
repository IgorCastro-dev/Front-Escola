import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

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

  logar(){
    const user = this.user.value;
    const password = this.password.value;
    if(user == "TESTE" && password == "123"){
      console.log("Entrou")
    }else{
      console.log("nao entrou")
    }
  }

}
