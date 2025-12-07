import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { Skill } from '../../models/portfolio.model';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillsComponent {
  skills = input.required<Skill[]>();
  
  skillsByCategory = computed(() => {
    const grouped: { [key: string]: string[] } = {};
    for (const skill of this.skills()) {
      if (!grouped[skill.category]) {
        grouped[skill.category] = [];
      }
      grouped[skill.category].push(skill.name);
    }
    return Object.entries(grouped);
  });
}
