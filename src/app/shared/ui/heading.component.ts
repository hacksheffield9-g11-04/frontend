import { Component, input } from '@angular/core';

@Component({
  selector: 'app-heading',
  standalone: true,
  imports: [],
  template: `
    <h1 class="text-5xl p-4 mt-3">
      {{ title() }}
    </h1>
  `,
  styles: ``,
})
export class HeadingComponent {
  title = input<string>();
}
