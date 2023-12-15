import { Injectable } from '@angular/core';
import { Equipamento } from '../equipamentos/equipamento/equipamento.model';

@Injectable({
  providedIn: 'root'
})
export class EquipamentoService {
  private equipamentos:Equipamento[] = [];

  private lastId:number= 1;

  constructor() { 

    this.obterLastId();

  }

  listarEquipamentos():Equipamento[]{
    const equipamentosJson= localStorage.getItem("equipamentos")
    if(equipamentosJson)
      this.equipamentos = JSON.parse(equipamentosJson);
    return this.equipamentos 
  }

  adicionar(equipamento:Equipamento):void{
    this.equipamentos.push(equipamento);
    this.salvarEquipamentos(); 
    this.lastId++;
    this.salvarLastId();
  }
  editar(equipamento:Equipamento):void{
    const index = this.equipamentos.findIndex(e => e.id === equipamento.id);
    if(index != -1){
        this.equipamentos[index] = equipamento;
        this.salvarEquipamentos();
    }
  }

  salvarEquipamentos():void{
   localStorage.setItem('equipamentos', JSON.stringify(this.equipamentos));
  }

  obterLastId(): number {
    const lastId = localStorage.getItem('lastEqId');
    if (lastId) {
      this.lastId = parseInt(lastId)
    }else
    {
      localStorage.setItem('lastEqId', '1')
    }
    return this.lastId;
  }

  private salvarLastId(): void {
    localStorage.setItem('lastEqId', this.lastId.toString());
  }

  excluirEquipamento(equipamento:Equipamento):void{
    this.equipamentos = this.equipamentos.filter(eq=>eq.id != equipamento.id);
    this.salvarEquipamentos();
  }



}

