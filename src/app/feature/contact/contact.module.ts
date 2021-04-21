import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./contact-list/contact-list.module').then((m) => m.ContactListModule),
  },
  {
    path: ':contactId',
    loadChildren: () => import('./contact-detail/contact-detail.module').then((m) => m.ContactDetailModule),
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class ContactModule {}
