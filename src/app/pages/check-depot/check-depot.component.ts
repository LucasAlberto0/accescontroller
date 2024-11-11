import { Component } from '@angular/core';
import { AuthService } from '../../core/service/access/auth.service';
import { AccessService } from '../../core/service/access.service';

@Component({
  selector: 'app-check-depot',
  templateUrl: './check-depot.component.html',
  styleUrl: './check-depot.component.scss'
})
export class CheckDepotComponent {

  cnpj: string = '';

  constructor(
    private authService: AuthService,
  ) { }

  getToken() {
    this.authService.getToken(this.cnpj).subscribe(
      res => console.log(res)
    )
  }
}
