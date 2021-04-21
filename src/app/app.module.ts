import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { RouterModule, Routes } from '@angular/router'

import { AppComponent } from './app.component'
import { LayoutComponent } from './layout/layout.component'
import { MaterialModule } from './material.module'

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'wallets' },
  {
    path: 'wallets',
    loadChildren: () => import('./feature/wallet-list/wallet-list.module').then((m) => m.WalletListModule),
  },
  { path: 'contacts', loadChildren: () => import('./feature/contact/contact.module').then((m) => m.ContactModule) },
]

@NgModule({
  declarations: [AppComponent, LayoutComponent],
  imports: [BrowserModule, BrowserAnimationsModule, RouterModule.forRoot(routes), MaterialModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
