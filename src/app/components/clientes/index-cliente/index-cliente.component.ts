import { compileNgModule } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../../services/cliente.service';

@Component({
  selector: 'app-index-cliente',
  templateUrl: './index-cliente.component.html',
  styleUrls: ['./index-cliente.component.css']
})
export class IndexClienteComponent implements OnInit {

  public clientes: Array<any> = [];

  public filtroApellido = '';
  public filtroCorreo = '';
  public page = 1;
  public pageSize = 1;

  constructor( private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.initData();
  }

  initData(){
    this.clienteService.listarClientesFiltraAdmin(null, null).subscribe(
      response=>{
        this.clientes = response.data;

      },
      error=> {
        console.log(error);

      }
    )
  }

  filtro(tipo){
    if (tipo == 'apellidos') {
      if (this.filtroApellido) {
        this.clienteService.listarClientesFiltraAdmin(tipo, this.filtroApellido).subscribe(
          response=>{
            this.clientes = response.data;
          },
          error=> {
            console.log(error);

          }
        )
      } else {
        this.initData();
      }
    }else if (tipo = 'correo') {
      if (this.filtroCorreo) {
        this.clienteService.listarClientesFiltraAdmin(tipo, this.filtroCorreo).subscribe(
          response=>{
            this.clientes = response.data;
          },
          error=> {
            console.log(error);

          }
        )
      } else {
        this.initData();
      }

    }
  }


}
