import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

declare var JQuery: any;
declare var $: any;
declare var iziToast;


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user: any= {};
  public usuario: any = {};
  public token: any = '';



  constructor( private adminService: AdminService,
               private router: Router) {
                this.token = this.adminService.getToken();
                }

  ngOnInit(): void {
    console.log(this.token);
    if (this.token) {
      this.router.navigate(['/'])
    }else {
      //Mantener en el componente

    }
  }

  login(loginForm){
    if (loginForm.valid) {
      console.log(this.user);

      let data = {
        email: this.user.email,
        password: this.user.password

      }

      this.adminService.loginAdmin(data).subscribe(
        response=> {
          if (response.data == undefined) {
            iziToast.error({
              title: 'ERROR',
              message: response.msg,
              position: 'topRight',
          });
          } else {
            this.usuario = response.data;
            localStorage.setItem('token', response.token);
            localStorage.setItem('_id', response.data._id);

            this.router.navigate(['/'])

          }
          console.log(response);

        },
        error=> {
          console.log(error);

        }
      )
    } else {

    }

  }

}
