import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

import { IJourney } from './journey.model';
import { journey } from './journey.storage';

@Injectable({
  providedIn: 'root',
})
export class JourneyService {
  journey: IJourney[] = [];

  getAll(): Observable<IJourney[]> {
    return new Observable<IJourney[]>((subscriber) => {
      subscriber.next(journey);
      subscriber.complete();
    }).pipe(
      tap((journeyData) => {
        this.journey = journeyData;
      })
    );
  }
}
