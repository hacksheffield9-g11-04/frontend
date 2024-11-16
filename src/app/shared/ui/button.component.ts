import { Component, input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [RouterModule],
  template: `
    <button
      [routerLink]="route()"
      class="text-4xl py-4 bg-blue-200 w-full mx-auto rounded-lg"
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
