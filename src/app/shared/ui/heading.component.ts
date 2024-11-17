import { Component, input } from '@angular/core';

@Component({
  selector: 'app-heading',
  standalone: true,
  imports: [],
  template: `
    <h1 class="text-5xl text-center py-8 text-gray-800">
      {{ title() }}
    </h1>
  `,
  styles: ``,
})
export class HeadingComponent {
  show = input(true);
  title = input<string>('');
}
