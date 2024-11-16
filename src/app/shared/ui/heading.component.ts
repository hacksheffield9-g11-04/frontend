import { Component, input } from '@angular/core';
import { ButtonComponent } from './button.component';

@Component({
  selector: 'app-heading',
  standalone: true,
  imports: [],
  template: `
    <h1 class="text-5xl text-center py-8">
      {{ title() }}
    </h1>
  `,
  styles: ``,
})
export class HeadingComponent {
  show = input(true);
  title = input<string>('');
}
