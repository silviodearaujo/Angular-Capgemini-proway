import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-segundo-componente',
  templateUrl: './segundo-componente.component.html',
  styleUrls: ['./segundo-componente.component.css']
})
export class SegundoComponenteComponent {
  nome = "João"
  dataNascimento = "1995-01-01";
  urlImagem = "/assets/logo_proway.png";

  mostrarDataNascimento(){
    window.alert(`A data de nascimento do João é: ${this.dataNascimento}`);
  }
}
