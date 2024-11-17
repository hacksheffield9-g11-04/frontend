import { Component, inject, signal } from '@angular/core';
import { scheduleData } from '../shared/data/grid.data';
import { ActivityTreeResponse } from '../shared/interfaces/activity.interface';
import { ActivityService } from '../shared/services/activity.service';

@Component({
  selector: 'app-grid',
  standalone: true,
  imports: [],
  template: `
    <div class="mx-auto px-8 py-6">
      <h1 class="text-4xl text-white"></h1>
      <div class="grid grid-cols-3 grid-rows-7 max-w-[1200px] mx-auto gap-4">
        @for (day of activityTree()?.graph; track day.activities) { @switch
        (day.activities.length) { @case (0) {
        <div
          class="  flex flex-col items-center justify-center bg-gray-200 py-8 "
        >
          <!-- <span class="font-bold">{{ day.day }}</span> -->
          <!-- <span>{{ day.activities.length }}</span> -->
        </div>
        } @case (1) {
        <div
          class="  flex flex-col items-center justify-center bg-green-100 py-8 "
        >
          <!-- <span class="font-bold">{{ day.day }}</span> -->
          <!-- <span>{{ day.activities.length }}</span> -->
        </div>
        } @case (2) {
        <div
          class="  flex flex-col items-center justify-center bg-green-200 py-8 "
        >
          <!-- <span class="font-bold">{{ day.day }}</span> -->
          <!-- <span>{{ day.activities.length }}</span> -->
        </div>
        } @case (3) {
        <div
          class="  flex flex-col items-center justify-center bg-green-300 py-8"
        >
          <!-- <span class="font-bold">{{ day.day }}</span> -->
          <!-- <span>{{ day.activities.length }}</span> -->
        </div>
        } @case (4) {
        <div
          class="flex flex-col items-center justify-center bg-green-400 py-8"
        >
          <!-- <span class="font-bold">{{ day.day }}</span> -->
          <!-- <span>{{ day.activities.length }}</span> -->
        </div>
        } @default {
        <div
          class="flex flex-col items-center justify-center bg-green-700 py-8"
        >
          <!-- <span class="font-bold">{{ day.day }}</span> -->
          <!-- <span>{{ day.activities.length }}</span> -->
        </div>
        } } }
      </div>
    </div>
  `,
  styles: ``,
})
export class GridPage {
  scheduleData = scheduleData;

  activityTree = signal<ActivityTreeResponse | null>(null);

  private activityService = inject(ActivityService);

  ngOnInit() {
    this.activityService.getActivityTree().subscribe({
      next: (response) => {
        this.activityTree.set(response);
        // console.log('Activity tree:', this.activityTree());
      },
      error: (error) => {
        console.error('Error fetching activity tree:', error);
      },
    });
  }
}
