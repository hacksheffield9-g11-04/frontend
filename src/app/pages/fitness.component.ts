import { Component, inject, input, signal } from '@angular/core';
import { HeadingComponent } from '../shared/ui/heading.component';
import { ButtonComponent } from '../shared/ui/button.component';
import { ActivityService } from '../shared/services/activity.service';
import {
  ActivityRequest,
  ActivityResponse,
} from '../shared/interfaces/activity.interface';
import { DataModelManagerService } from '../dataModelManagerService';
import { Router } from '@angular/router';
@Component({
  selector: 'app-fitness',
  standalone: true,
  imports: [HeadingComponent, ButtonComponent],
  template: `<div class="px-6 mx-auto max-w-[1200px]">
    <app-heading [title]="title"></app-heading>
    <div class="grid grid-cols-1 gap-4">
      @for (section of subSections; track $index) {
      <app-button
        [text]="section.name"
        (click)="generateActivities(section.name)"
      />
      }
    </div>
    @if (isLoading()) {
    <div class="mt-6 text-center">
      <p>Generating your fitness plan...</p>
    </div>
    } @if (error()) {
    <div class="mt-6 text-red-500">
      {{ error() }}
    </div>
    } @if (activities()) {
    <div class="mt-6">
      <h3 class="text-xl font-bold mb-4">Your Fitness Plan:</h3>
      <ul class="space-y-2">
        @for (activity of activities()!.activities; track $index) {
        <li class="p-2 bg-gray-50 rounded">{{ activity }}</li>
        }
      </ul>
    </div>
    }
  </div> `,
  styles: ``,
})
export class FitnessPage {
  private activityService = inject(ActivityService);
  private dataModelMgrSvc = inject(DataModelManagerService);

  router = inject(Router);
  title = 'Great! Now select what do you want to do in Fitness?';
  subSections = [
    { name: 'Running' },
    { name: 'Weightlifting' },
    { name: 'Crossfit' },
  ];

  activities = signal<ActivityResponse | null>(null);
  isLoading = signal<boolean>(false);
  error = signal<string | null>(null);

  generateActivities(subsection: string) {
    this.isLoading.set(true);
    this.error.set(null);

    const request: ActivityRequest = {
      category: 'fitness',
      subcategory: subsection,
      difficulty: 'easy',
      durationPerDay: 10,
    };
    console.log('Generating activities for:', request);

    this.activityService.generateActivities(request).subscribe({
      next: (response) => {
        this.activities.set(response);
        this.dataModelMgrSvc.registerDataModel(
          'activities',
          response.activities,
          true
        );
        this.isLoading.set(false);
        this.router.navigate(['/cards']);
        console.log('Activities generated:', response);
      },
      error: (error) => {
        this.error.set('Failed to generate activities. Please try again.');
        this.isLoading.set(false);
        console.error('Error generating activities:', error);
      },
    });
  }
}
