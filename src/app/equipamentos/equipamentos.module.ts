import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EquipamentoComponent } from './equipamento/equipamento.component';



@NgModule({
  declarations: [
    EquipamentoComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    EquipamentoComponent
  ]
})
export class EquipamentosModule { }
