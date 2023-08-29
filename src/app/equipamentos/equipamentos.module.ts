import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EquipamentoComponent } from './equipamento/equipamento.component';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    EquipamentoComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule
  ],
  exports:[
    EquipamentoComponent
  ]
})
export class EquipamentosModule { }
