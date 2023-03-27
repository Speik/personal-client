import { Component, OnInit } from '@angular/core';
import { SkillsService } from './skills.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements OnInit {
  constructor(public skillsService: SkillsService) {}

  ngOnInit(): void {
    this.skillsService.getAll().subscribe();
  }
}
