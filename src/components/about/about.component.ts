import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent {
  summary = input.required<string>();
}
