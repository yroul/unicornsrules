import { Component, Input, OnInit } from '@angular/core';
import { SKILLS_LIST, Unicorn } from 'src/app/model/Unicorn';

@Component({
  selector: 'app-unicorn-list-item',
  templateUrl: './unicorn-list-item.component.html',
  styleUrls: ['./unicorn-list-item.component.sass']
})
export class UnicornListItemComponent implements OnInit {

  @Input() unicorn: Unicorn = new Unicorn();
  skillsList: string[] = SKILLS_LIST;
  constructor() { }

  ngOnInit(): void {
  }

  getSKillValue(skillName: string){
    return this.unicorn.getSkillValue(skillName);
  }

}
