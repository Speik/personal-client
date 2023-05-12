import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICustomerMessage } from './contact.model';
import { Observable, share } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  public constructor(private http: HttpClient) {}

  public sendMessage(message: ICustomerMessage): Observable<Object> {
    return this.http.post('messages', message).pipe(share());
  }
}
