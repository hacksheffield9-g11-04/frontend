import { Component } from '@angular/core';
import { HeadingComponent } from '../shared/ui/heading.component';
import { ButtonComponent } from '../shared/ui/button.component';

@Component({
  selector: 'app-fitness',
  standalone: true,
  imports: [HeadingComponent, ButtonComponent],
  template: `<div class="px-6 mx-auto max-w-[1200px]">
    <app-heading [title]="title"></app-heading>
    <div class="grid grid-cols-1 gap-4">
      @for (section of subSections; track $index) {
      <app-button [text]="section.name" />
      }
    </div>
  </div> `,
  styles: ``,
})
export class FitnessPage {
  title = 'Great! Now select what do you want to do?';
  subSections = [
    { name: 'Running' },
    { name: 'Weighlifting' },
    { name: 'Crossfit' },
  ];
  // Send info to api
  // req = {
  //   section: 'fitness',
  //   subSections: 'running',
  //   difficulty: 'hard',
  //   time: 10,
  // };
}
