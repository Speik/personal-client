import { Injectable } from '@angular/core';
import { Observable, share } from 'rxjs';

import { ISkill } from './skills.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SkillsService {
  public constructor(private http: HttpClient) {}

  public getSkills(): Observable<ISkill[]> {
    return this.http.get<ISkill[]>('skills').pipe(share());
  }
}
