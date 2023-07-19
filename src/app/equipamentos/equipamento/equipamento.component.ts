import { Component } from '@angular/core';

@Component({
  selector: 'app-equipamento',
  templateUrl: './equipamento.component.html',
  styleUrls: ['./equipamento.component.css']
})
export class EquipamentoComponent {

  incluirEquipamentos(nome:string):void{
    localStorage.setItem('equipamentos',nome )
  }

}
