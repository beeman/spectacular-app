import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule } from '@angular/forms'
import { ContactFormComponent } from './contact-form.component'
import { MaterialModule } from '../../material.module'

@NgModule({
  declarations: [ContactFormComponent],
  exports: [ContactFormComponent],
  imports: [CommonModule, ReactiveFormsModule, MaterialModule],
})
export class ContactModule {}
