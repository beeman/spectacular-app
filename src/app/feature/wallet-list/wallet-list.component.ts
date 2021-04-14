import { Component, OnInit } from '@angular/core'
import { AppService } from '../../app.service'

@Component({
  selector: 'app-wallet-list',
  templateUrl: './wallet-list.component.html',
  styleUrls: ['./wallet-list.component.css'],
})
export class WalletListComponent {
  wallets$ = this.service.wallets$
  constructor(private readonly service: AppService) {}
}
