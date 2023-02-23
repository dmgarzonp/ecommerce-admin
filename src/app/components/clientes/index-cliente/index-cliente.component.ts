import { compileNgModule } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../../services/cliente.service';
import { AdminService } from '../../../services/admin.service';

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
  public token;

  constructor(private clienteService: ClienteService,
    private _adminService: AdminService) {
    this.token = _adminService.getToken();
  }

  ngOnInit(): void {
    this.initData();
  }

  initData() {
    this.clienteService.listarClientesFiltraAdmin(null, null, this.token).subscribe(
      response => {
        this.clientes = response.data;

      },
      error => {
        console.log(error);

      }
    )
  }

  filtro(tipo) {
    if (tipo == 'apellidos') {
      if (this.filtroApellido) {
        this.clienteService.listarClientesFiltraAdmin(tipo, this.filtroApellido, this.token).subscribe(
          response => {
            this.clientes = response.data;
          },
          error => {
            console.log(error);

          }
        )
      } else {
        this.initData();
      }
    } else if (tipo = 'correo') {
      if (this.filtroCorreo) {
        this.clienteService.listarClientesFiltraAdmin(tipo, this.filtroCorreo, this.token).subscribe(
          response => {
            this.clientes = response.data;
          },
          error => {
            console.log(error);

          }
        )
      } else {
        this.initData();
      }

    }
  }


}
