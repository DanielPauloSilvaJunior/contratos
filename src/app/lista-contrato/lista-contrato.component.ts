import { Component, OnInit } from '@angular/core';
import { ContratoService } from '../services/contrato.service';
import { Contrato } from './contrato.model';

@Component({
  selector: 'app-lista-contrato',
  templateUrl: './lista-contrato.component.html',
  styleUrls: ['./lista-contrato.component.css']
})
export class ListaContratoComponent implements OnInit {

  contratos: Contrato[] = [];
  contrato: Contrato = new Contrato();
  modoEdicao: boolean = false;

  constructor(private contratosService: ContratoService) { }

  ngOnInit(): void {
    this.carregarContratos();
  }

  private carregarContratos(): void {
    this.contratos = this.contratosService.listar();
  }
  
  salvarContrato(): void {
    if (this.contrato.id!=undefined) {
      this.contratosService.editar(this.contrato);
    } else {
      this.contrato.id = this.contratosService.obterLastId();
      this.contratosService.adicionar(this.contrato);
    }
    this.cancelarEdicao(new Event("Novo"));
    this.carregarContratos();
  }

  editarContrato(contrato: Contrato): void {
    this.contrato = Object.assign({}, contrato);
    this.modoEdicao = true;
  }

  excluirContrato(id: number): void {
    this.contratosService.excluir(id);
    this.carregarContratos();
  }

  cancelarEdicao(event:Event): void {
    event.preventDefault();
    this.contrato = new Contrato();
    this.modoEdicao = false;
  }

  iniciarInclusao(event:Event):void{
    event.preventDefault();
    this.contrato = new Contrato();
    this.modoEdicao = true;
  }

}
