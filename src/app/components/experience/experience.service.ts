import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

import { IExperience } from './experience.model';
import { experience } from './experience.storage';

@Injectable({
  providedIn: 'root',
})
export class ExperienceService {
  experience: IExperience[] = [];

  getAll(): Observable<IExperience[]> {
    return new Observable<IExperience[]>((subscriber) => {
      subscriber.next(experience);
      subscriber.complete();
    }).pipe(
      tap((experienceData) => {
        this.experience = experienceData;
      })
    );
  }
}
