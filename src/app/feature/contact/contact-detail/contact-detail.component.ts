import { Component } from '@angular/core'
import { AppService } from '../../../app.service'
import { ActivatedRoute } from '@angular/router'
import { map, pluck } from 'rxjs/operators'

@Component({
  selector: 'app-contact-detail',
  template: `
    <ng-container *ngIf="contact$ | async as contact">
      <pre>{{ contact | json }}</pre>
      <app-contact-form [contact]="contact"></app-contact-form>
    </ng-container>
  `,
})
export class ContactDetailComponent {
  contact$ = this.route.params.pipe(
    pluck('contactId'),
    map((contactId) => this.service.contact(contactId)),
  )
  constructor(private readonly service: AppService, private readonly route: ActivatedRoute) {}
}
