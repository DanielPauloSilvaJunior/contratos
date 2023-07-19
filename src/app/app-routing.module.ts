import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaContratoComponent } from './lista-contrato/lista-contrato.component';
import { EquipamentoComponent } from './equipamentos/equipamento/equipamento.component';

const rotas:Routes=[
  {path:'', component:ListaContratoComponent},
  {path:'contratos', component:ListaContratoComponent},
  {path:'equipamentos', component:EquipamentoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(rotas)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
