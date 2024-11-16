import { Component } from '@angular/core';
import { HeadingComponent } from '../shared/ui/heading.component';
import { ButtonComponent } from '../shared/ui/button.component';

@Component({
  selector: 'app-knowledge',
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
  styles: ``
})
export class KnowledgePage {
  title = 'Great! In which area would you like to expand your knowledge in?';
  subSections = [
    { name: 'Coding' },
    { name: 'History' },
    { name: 'Science' },
  ];
}
