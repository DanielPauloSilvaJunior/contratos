import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaContratoComponent } from './lista-contrato/lista-contrato.component';
import { EquipamentosModule } from './equipamentos/equipamentos.module';
import { RouterModule, Routes } from '@angular/router';
import { EquipamentoComponent } from './equipamentos/equipamento/equipamento.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    ListaContratoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    EquipamentosModule,
    BrowserAnimationsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
