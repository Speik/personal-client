import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, share } from 'rxjs';

import { IJourney } from './journey.model';

@Injectable({
  providedIn: 'root',
})
export class JourneyService {
  public constructor(private http: HttpClient) {}

  public getJourney(): Observable<IJourney[]> {
    return this.http.get<IJourney[]>('journey').pipe(share());
  }
}
