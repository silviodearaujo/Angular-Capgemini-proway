import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-exemplo-servicos2',
  templateUrl: './exemplo-servicos2.component.html',
  styleUrls: ['./exemplo-servicos2.component.css']
})
export class ExemploServicos2Component {

  descricao = "";
  //construtor com serviçp
  constructor(public logger: LoggerService) { }

  //como está publico nao precisa da função abaixo

  /* adicionarProduto(){
     console.log(`O nome do produto ${this.descricao} foi adicionado`);
   }
 */
   adicionarProduto(){
    this.logger.logar(`O produto com a descricao ${this.descricao} foi adicionado`);
  }
}
