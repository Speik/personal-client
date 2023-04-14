import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

import { ICertificate } from './certificates.model';
import { certificates } from './certificates.storage';

@Injectable({
  providedIn: 'root',
})
export class CertificatesService {
  certificates: ICertificate[] = [];

  getAll(): Observable<ICertificate[]> {
    return new Observable<ICertificate[]>((subscriber) => {
      subscriber.next(certificates);
      subscriber.complete();
    }).pipe(
      tap((certificatesData) => {
        this.certificates = certificatesData;
      })
    );
  }
}
