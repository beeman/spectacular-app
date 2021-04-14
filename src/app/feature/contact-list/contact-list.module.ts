import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { Routes, RouterModule } from '@angular/router'
import { ContactListComponent } from './contact-list.component'
import { MaterialModule } from '../../material.module'

const routes: Routes = [{ path: '', component: ContactListComponent }]

@NgModule({
  declarations: [ContactListComponent],
  imports: [CommonModule, RouterModule.forChild(routes), MaterialModule],
})
export class ContactListModule {}
