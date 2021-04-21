import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { Routes, RouterModule } from '@angular/router'
import { ContactDetailComponent } from './contact-detail.component'
import { ContactModule } from '../../../ui/contact-form/contact-form.module'

const routes: Routes = [{ path: '', component: ContactDetailComponent }]

@NgModule({
  declarations: [ContactDetailComponent],
  imports: [CommonModule, RouterModule.forChild(routes), ContactModule],
})
export class ContactDetailModule {}
