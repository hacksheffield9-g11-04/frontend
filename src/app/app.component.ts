import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeadingComponent } from './shared/ui/heading.component';
import { ButtonComponent } from './shared/ui/button.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <router-outlet>

    </router-outlet>
  `,
})
export class AppComponent {
  
}
