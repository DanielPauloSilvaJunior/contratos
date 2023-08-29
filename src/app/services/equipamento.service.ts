import { Injectable } from '@angular/core';
import { Equipamento } from '../equipamentos/equipamento/equipamento.model';

@Injectable({
  providedIn: 'root'
})
export class EquipamentoService {
  private equipamentos:Equipamento[] = [];

  constructor() { 

  }

  adicionar(equipamento:Equipamento):void{
    this.equipamentos.push(equipamento)
    this.salvarEquipamentos();   
  }

  salvarEquipamentos():void{
    localStorage.setItem('equipamentos', JSON.stringify(this.equipamentos))
  }
}
