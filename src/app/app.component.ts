import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeadingComponent } from './shared/ui/heading.component';
import { ButtonComponent } from './shared/ui/button.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeadingComponent, ButtonComponent],
  template: `
    <router-outlet>
      <div class="px-6 mx-auto max-w-[1200px]">
        <app-heading [title]="title"></app-heading>
        <div class="grid grid-cols-1 gap-4">
          @for (section of sections; track $index) {
          <app-button [text]="section.name" />
          }
        </div>
      </div>
    </router-outlet>
  `,
})
export class AppComponent {
  title = 'What do you want to improve?';
  sections = [{ name: 'Fitness' }, { name: 'Knowledge' }, { name: 'Mind' }];
}
