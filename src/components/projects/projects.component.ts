import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Projects } from '../../models/portfolio.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsComponent {
  projects = input.required<Projects[]>();
}
