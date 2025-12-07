import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Education } from '../../models/portfolio.model';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EducationComponent {
  education = input.required<Education[]>();
}
