import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { WalletListComponent } from './wallet-list.component'
import { MaterialModule } from '../../material.module'

@NgModule({
  declarations: [WalletListComponent],
  imports: [CommonModule, MaterialModule, RouterModule.forChild([{ path: '', component: WalletListComponent }])],
})
export class WalletListModule {}
