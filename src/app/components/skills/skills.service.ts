import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

import { ISkill } from './skills.model';
import { skills } from './skills.storage';

@Injectable({
  providedIn: 'root',
})
export class SkillsService {
  skills: ISkill[] = [];

  getAll(): Observable<ISkill[]> {
    return new Observable<ISkill[]>((subscriber) => {
      subscriber.next(skills);
      subscriber.complete();
    }).pipe(
      tap((skillsData) => {
        this.skills = this.sortSkillsByProficiency(skillsData);
      })
    );
  }

  private sortSkillsByProficiency(skills: ISkill[]): ISkill[] {
    return skills.sort((a, b) => b.proficiency - a.proficiency);
  }
}
