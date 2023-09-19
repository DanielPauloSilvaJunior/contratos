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

  titulo:string= "Cadastro de Equipamento"

  equipamento:Equipamento = new Equipamento();

  
   equipamentos:Equipamento[]= [];


  constructor(private equipamentosService:EquipamentoService) {
    this.equipamentos=equipamentosService.listarEquipamentos();
    
  }

  incluirEquipamentos():void{
    this.equipamentosService.adicionar(this.equipamento)
    this.equipamento = new Equipamento()
  }

  listarEquipamentos():Equipamento[]{
    const equipamentosJson= localStorage.getItem('equipamentos');
    if(equipamentosJson){
      this.equipamentos=JSON.parse(equipamentosJson);
    }
    return this.equipamentos;   

  }

  excluirEquipamento(equipamento:Equipamento):void{
    this.equipamentos = this.equipamentos.filter(eq=>eq.id != equipamento.id);
  }

  
}
