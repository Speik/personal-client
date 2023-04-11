import {
  AbstractControl,
  FormBuilder,
  ValidationErrors,
  Validators,
} from '@angular/forms';

import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ICustomer } from './contact.model';

const MAX_NAME_LENGTH = 48;
const MIN_MESSAGE_LENGTH = 16;
const MAX_MESSAGE_LENGTH = 320;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  providers: [MessageService],
})
export class ContactComponent {
  public isLoading = false;

  public readonly maxNameLength = MAX_NAME_LENGTH;
  public readonly maxMessageLength = MAX_MESSAGE_LENGTH;
  public readonly minMessageLength = MIN_MESSAGE_LENGTH;

  public readonly contactForm = this.fb.group({
    name: ['', [Validators.required, Validators.maxLength(MAX_NAME_LENGTH)]],
    email: ['', [Validators.required, Validators.email]],
    message: [
      '',
      [
        Validators.required,
        Validators.maxLength(MAX_MESSAGE_LENGTH),
        this.trimmedMessageValidator,
      ],
    ],
  });

  constructor(
    private fb: FormBuilder,
    private messageService: MessageService
  ) {}

  public handleContactFormSubmit(): void {
    if (!this.contactForm.valid) {
      return;
    }

    const customerData = this.exposeCustomerData();
    this.isLoading = true;

    setTimeout(() => {
      this.messageService.add({
        severity: 'success',
        summary: 'Success',
        detail: 'Message sent: ' + JSON.stringify(customerData),
        life: 1500,
      });

      this.contactForm.reset();
      this.isLoading = false;
    }, 1000);
  }

  public handleContactFormChange(): void {
    this.aggregateErrors();
  }

  private aggregateErrors(): void {
    const form = this.contactForm;

    const errors = Object.entries(form.controls).reduce<ValidationErrors>(
      (result, [key, { errors }]) => {
        return { ...result, [key]: errors };
      },
      {}
    );

    const isFormValid = Object.values(errors).every((item) => item === null);
    form.setErrors(isFormValid ? null : errors);
  }

  private exposeCustomerData(): ICustomer {
    const form = this.contactForm;

    return <ICustomer>Object.entries(form.controls).reduce<Partial<ICustomer>>(
      (data, [key, control]) => ({
        ...data,
        [key]: control.value?.trim() ?? '',
      }),
      {}
    );
  }

  private trimmedMessageValidator(
    target: AbstractControl
  ): Nullable<ValidationErrors> {
    const actualLength = target.value?.trim()?.length ?? 0;

    if (actualLength > MIN_MESSAGE_LENGTH) return null;
    // It's not a typo. minlength key is used to emulate default error
    return { minlength: { requiredLength: MIN_MESSAGE_LENGTH, actualLength } };
  }
}
