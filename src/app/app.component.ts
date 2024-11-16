import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeadingComponent } from './shared/ui/heading.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeadingComponent],
  template: `
    <router-outlet>
      <app-heading title="Hello 1"></app-heading>

      <app-heading title="Hello 3"></app-heading>
      <app-heading title="Hello 4"></app-heading>
      <h2>dsadsadsa</h2>
      <p>dsadssda</p>
    </router-outlet>
  `,
})
export class AppComponent {
  title = 'atomicgains';
}
