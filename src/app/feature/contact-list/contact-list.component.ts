import { Component } from '@angular/core'
import { AppService } from '../../app.service'

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css'],
})
export class ContactListComponent {
  contacts$ = this.service.contacts$
  constructor(private readonly service: AppService) {}
}
