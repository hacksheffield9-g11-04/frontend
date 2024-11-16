import { Component } from '@angular/core';
import { HeadingComponent } from '../shared/ui/heading.component';
import { ButtonComponent } from '../shared/ui/button.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeadingComponent, ButtonComponent],
  template: `
    <div class="px-6 mx-auto max-w-[1200px]">
      <app-heading [title]="title"></app-heading>
      <div class="grid grid-cols-1 gap-4">
        @for (section of sections; track $index) {
        <app-button [text]="section.name" [route]="section.route" />
        }
      </div>
    </div>
  `,
  styles: ``,
})
export class HomePage {
  title = 'What do you want to improve?';
  sections = [
    { name: 'Fitness', route: 'fitness' },
    { name: 'Knowledge', route: 'knowledge' },
    { name: 'Mind', route: 'mind' },                
  ];
}
