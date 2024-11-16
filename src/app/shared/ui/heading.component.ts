import { Component, input } from '@angular/core';

@Component({
  selector: 'app-heading',
  standalone: true,
  imports: [],
  template: `
    <h1 class="text-5xl p-4 mt-3">
      {{ title() }}
    </h1>
    @for (user of users; track $index) {
    <p>{{ user.name }}</p>
    } @if (show()){
    <p>Hidden stuff</p>
    }
  `,
  styles: ``,
})
export class HeadingComponent {
  show = input(true);
  title = input<string>();
  users = [
    { id: 1, name: 'Hardik Savani' },
    { id: 2, name: 'Vimal Kashiyani' },
    { id: 3, name: 'Harshad Pathak' },
  ];
}
