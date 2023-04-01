import { Component } from '@angular/core';

type ContactData = {
  name: Nullable<string>;
  email: Nullable<string>;
  text: Nullable<string>;
};

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  contactData: ContactData = { name: null, email: null, text: null };

  handleSubmit(): void {
    console.log(this.contactData);
  }
}
