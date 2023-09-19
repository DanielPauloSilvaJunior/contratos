import { Injectable } from '@angular/core';
import { Equipamento } from '../equipamentos/equipamento/equipamento.model';

@Injectable({
  providedIn: 'root'
})
export class EquipamentoService {
  private equipamentos:Equipamento[] = [];

  private lastId:number= 1;

  constructor() { 

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
  }

  salvarEquipamentos():void{
   localStorage.setItem('equipamentos', JSON.stringify(this.equipamentos));
  }

  obterLastId(): number {
    const lastId = localStorage.getItem('lastEqId');
    if (lastId) {
      this.lastId++
    }else
    {
      localStorage.setItem('lastEqId', '1')
    }
    return this.lastId;
  }

  private salvarLastId(): void {
    localStorage.setItem('lastEqId', this.lastId.toString());
  }

}

