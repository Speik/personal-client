import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';

type ContactData = {
  name: Nullable<string>;
  email: Nullable<string>;
  text: Nullable<string>;
};

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  providers: [MessageService],
})
export class ContactComponent {
  contactData: ContactData = { name: null, email: null, text: null };

  constructor(private messageService: MessageService) {}

  handleSubmit(): void {
    console.log(this.contactData);

    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: 'Message sent!',
      life: 1500,
    });
  }
}
