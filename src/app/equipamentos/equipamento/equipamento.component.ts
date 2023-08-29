import { Component, ViewChild } from '@angular/core';
import { Equipamento } from './equipamento.model';
import { NgForm } from '@angular/forms';
import { EquipamentoService } from 'src/app/services/equipamento.service';

@Component({
  selector: 'app-equipamento',
  templateUrl: './equipamento.component.html',
  styleUrls: ['./equipamento.component.css'],
  
})
export class EquipamentoComponent {

  equipamento:Equipamento = new Equipamento();

  
  private equipamentos:Equipamento[]= [];


  constructor(private equipamentosService:EquipamentoService) {
  }

  incluirEquipamentos():void{
    this.equipamentosService.adicionar(this.equipamento)
  }

  listarEquipamentos():Equipamento[]{
    const equipamentosJson= localStorage.getItem('equipamentos');
    if(equipamentosJson){
      this.equipamentos=JSON.parse(equipamentosJson);
    }
    return this.equipamentos;   

  }

  
}
