import { Component, input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [RouterModule],
  template: `
    <button
      [routerLink]="route()"
      class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-4 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded transform hover:-translate-y-1 transition-all duration-200 text-4xl w-full"
    >
      {{ text() }}
    </button>
  `,
  styles: ``,
})
export class ButtonComponent {
  route = input<string>();
  text = input.required<string>();
}
