import { Injectable } from '@angular/core';
import { Contrato } from '../lista-contrato/contrato.model';

@Injectable({
  providedIn: 'root'
})
export class ContratoService {

  private contratos: Contrato[] = [];
  private lastId: number = 1;

  constructor() { 
    this.listar();
    this.obterLastId();
  }

  listar(): Contrato[] {
    const contratosJson = localStorage.getItem('contratos');
    if (contratosJson) {
      this.contratos = JSON.parse(contratosJson);
    }
    return this.contratos;
  }

  adicionar(contrato: Contrato): void {
    this.contratos.push(contrato);
    this.salvarContratos();
    this.salvarLastId();
  }

  editar(contrato: Contrato): void {
    const index = this.contratos.findIndex(c => c.id === contrato.id);
    if (index !== -1) {
      this.contratos[index] = contrato;
      this.salvarContratos();
    }
  }

  excluir(id: number): void {
    this.contratos = this.contratos.filter(c => c.id !== id);
    this.salvarContratos();
  }

  private salvarContratos(): void {
    localStorage.setItem('contratos', JSON.stringify(this.contratos));
  }

   obterLastId(): number {
    const lastId = localStorage.getItem('lastId');
    if (lastId) {
      this.lastId++
    }else
    {
      localStorage.setItem('lastId', '1')
    }
    return this.lastId;
  }

  private salvarLastId(): void {
    localStorage.setItem('lastId', this.lastId.toString());
  }


}
