import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'

const SAMPLE_CONTACTS = [
  { id: 'chau', name: 'Chau', email: 'Chau@beeman.dev' },
  { id: 'dominik', name: 'Dominik', email: 'Dominik@beeman.dev' },
  { id: 'nacho', name: 'Nacho', email: 'Nacho@beeman.dev' },
  { id: 'serkan', name: 'Serkan', email: 'Serkan@beeman.dev' },
]

const SAMPLE_WALLETS = [
  {
    id: 'account-1',
    name: 'Account 1',
    publicKey: 'B33hx7NmZXRiC5Rg2Er7pqdNeKLEm7a7uD8tt9zKG4pk',
  },
  {
    id: 'account-2',
    name: 'Account 2',
    publicKey: 'B33hx7NmZXRiC5Rg2Er7pqdNeKLEm7a7uD8tt9zKG4pk',
  },
]

@Injectable({ providedIn: 'root' })
export class AppService {
  private contacts = new BehaviorSubject([...SAMPLE_CONTACTS])
  contacts$ = this.contacts.asObservable()
  private wallets = new BehaviorSubject([...SAMPLE_WALLETS])
  wallets$ = this.wallets.asObservable()

  contact(contactId: string) {
    return this.contacts.getValue().find((contact) => contact.id === contactId)
  }
}
