import { Component, ViewChild } from '@angular/core';
import { Equipamento } from './equipamento.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-equipamento',
  templateUrl: './equipamento.component.html',
  styleUrls: ['./equipamento.component.css']
})
export class EquipamentoComponent {

  equipamento:Equipamento = new Equipamento();

  
  private equipamentos:Equipamento[]= [];


  constructor() {
  }

  incluirEquipamentos():void{
    console.log(this.equipamento);
  }

  listarEquipamentos():Equipamento[]{
    const equipamentosJson= localStorage.getItem('equipamentos');
    if(equipamentosJson){
      this.equipamentos=JSON.parse(equipamentosJson);
    }
    return this.equipamentos;   

  }


}
