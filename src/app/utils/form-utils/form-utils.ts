import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { FORM_ERRORS } from './declarations';

@Injectable()
export class FormUtils {
  public exposeErrors(form: FormGroup): string[] {
    if (form.valid) return [];

    return Object.entries(form.controls).reduce<string[]>(
      (result, [key, control]) => {
        if (!control.errors || !control.touched) return result;

        Object.entries(control.errors).forEach(([errorName, errorData]) => {
          const message = this.parseErrorMessage(key, errorName, errorData);
          if (message) result.push(message);
        });

        return result;
      },
      []
    );
  }

  private parseErrorMessage(
    key: string,
    errorName: string,
    errorData: Primitive | AnyObject
  ): string {
    const errorTemplate = FORM_ERRORS.get(errorName);
    if (!errorTemplate) return '';

    const rawTemplate = errorTemplate.replaceAll('%key%', this.capitalize(key));
    const data = this.isErrorDataComplex(errorData)
      ? <AnyObject>errorData
      : { value: errorData };

    return Object.entries(data).reduce<string>((result, [key, value]) => {
      return result.replaceAll(`%${key}%`, value);
    }, rawTemplate);
  }

  private isErrorDataComplex(errorData: unknown): boolean {
    return (
      typeof errorData === 'object' &&
      errorData !== null &&
      errorData !== undefined
    );
  }

  private capitalize(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }
}
