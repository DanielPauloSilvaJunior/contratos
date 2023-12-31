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

  titulo:string= "Cadastro de Equipamento";

  equipamento:Equipamento = new Equipamento();

  tempEquipamento:string = "";

  
   equipamentos:Equipamento[]= [];


  constructor(private equipamentosService:EquipamentoService) {
    this.equipamentos=equipamentosService.listarEquipamentos();
    
  }

  incluirEquipamentos():void{
    this.equipamento.id = this.equipamentosService.obterLastId()
    this.equipamentosService.adicionar(this.equipamento)
    this.equipamento = new Equipamento()
    this.listarEquipamentos();
  }

  listarEquipamentos():Equipamento[]{
    const equipamentosJson= localStorage.getItem('equipamentos');
    if(equipamentosJson){
      this.equipamentos=JSON.parse(equipamentosJson);
    }
    return this.equipamentos;   

  }

  excluirEquipamento(equipamento:Equipamento):void{
    this.equipamentosService.excluirEquipamento(equipamento);
    this.listarEquipamentos();
  }

  editarEquipamento(equipamento:Equipamento):void{
    equipamento.modoEdicao= true;
    this.tempEquipamento= equipamento.nome?equipamento.nome:"";
  }

  cancelarEdicao(equipamento:Equipamento, event:Event):void{
    event.preventDefault();
    equipamento.modoEdicao= false;
    equipamento.nome = this.tempEquipamento;
  }

  salvarEquipamento(equipamento:Equipamento):void{
    equipamento.modoEdicao= false;
    this.equipamentosService.editar(equipamento);
    this.equipamentosService.listarEquipamentos();
  }

  
}
