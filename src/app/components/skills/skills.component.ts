import { Component, OnInit } from '@angular/core';
import { SkillsService } from './skills.service';
import { ISkill } from './skills.model';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
})
export class SkillsComponent implements OnInit {
  public skillsData: ISkill[] = [];

  public constructor(public skillsService: SkillsService) {}

  public ngOnInit(): void {
    this.getSkills();
  }

  private getSkills(): void {
    this.skillsService.getSkills().subscribe((skills) => {
      this.skillsData = skills;
    });
  }
}
