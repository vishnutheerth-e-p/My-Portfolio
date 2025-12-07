import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroComponent {
  name = input.required<string>();
  title = input.required<string>();
  location = input.required<string>();
  linkedin = input.required<string>();
  github = input<string | undefined>();
}