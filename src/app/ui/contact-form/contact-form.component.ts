import { Component, Input, OnInit } from '@angular/core'
import { FormBuilder, Validators } from '@angular/forms'

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css'],
})
export class ContactFormComponent implements OnInit {
  @Input() contact: Record<string, string> = {}
  result?: string
  addressForm = this.fb.group({
    company: null,
    name: [null, Validators.required],
    email: [null, Validators.required],
  })

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.addressForm.patchValue(this.contact)
  }

  onSubmit(): void {
    this.result = 'Your form has been submitted!'
  }
}
