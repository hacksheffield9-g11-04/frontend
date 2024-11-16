import { Component, input } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  template: `
    <button class="text-4xl py-4 bg-blue-200 w-full mx-auto rounded-lg">
      {{ text() }}
    </button>
  `,
  styles: ``,
})
export class ButtonComponent {
  text = input.required<string>();
}
