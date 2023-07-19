import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EquipamentoComponent } from './equipamento/equipamento.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    EquipamentoComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports:[
    EquipamentoComponent
  ]
})
export class EquipamentosModule { }
