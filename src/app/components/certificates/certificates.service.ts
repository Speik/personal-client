import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, share } from 'rxjs';

import { ICertificate } from './certificates.model';

@Injectable({
  providedIn: 'root',
})
export class CertificatesService {
  public constructor(private http: HttpClient) {}

  public getCertificates(): Observable<ICertificate[]> {
    return this.http.get<ICertificate[]>('certificates').pipe(share());
  }
}
