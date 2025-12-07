import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Experience } from '../../models/portfolio.model';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExperienceComponent {
  experience = input.required<Experience[]>();
}
