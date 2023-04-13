import {
  AbstractControl,
  FormBuilder,
  ValidationErrors,
  Validators,
} from '@angular/forms';

import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';

import { FormUtils } from 'src/app/utils/form-utils';
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
export class ContactComponent implements OnInit {
  public isLoading = false;
  public formErrors: string[] = [];

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
        Validators.minLength(MIN_MESSAGE_LENGTH),
        Validators.maxLength(MAX_MESSAGE_LENGTH),
        this.validateTrimmedMessage,
      ],
    ],
  });

  constructor(
    private fb: FormBuilder,
    private messageService: MessageService,
    private formUtils: FormUtils
  ) {}

  public ngOnInit(): void {
    Object.values(this.contactForm.controls).forEach((control) => {
      control.valueChanges.subscribe(() => {
        // Mark control on typing as touched immediately
        control.markAsTouched();
        this.formErrors = this.formUtils.exposeErrors(this.contactForm);
      });
    });
  }

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

  public handleContactFormErrors(): void {
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

  private validateTrimmedMessage(
    target: AbstractControl
  ): Nullable<ValidationErrors> {
    const actualLength = target.value?.trim()?.length ?? 0;

    if (actualLength >= MIN_MESSAGE_LENGTH) return null;
    // It's not a typo. minlength key is used to emulate default error
    return { minlength: { requiredLength: MIN_MESSAGE_LENGTH, actualLength } };
  }
}
