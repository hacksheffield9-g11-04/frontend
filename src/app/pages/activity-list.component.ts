import { Component, inject } from '@angular/core';
import { ActivityService } from '../shared/services/activity.service';
@Component({
  selector: 'app-activity-list',
  standalone: true,
  imports: [],
    template: `
  <div class="mt-6 px-32">
    <h3 class="text-xl font-bold mb-4 text-center">Your Activity List</h3>
    <ul class="space-y-2">
      @for(activity of activities; track $index) {
        <li class="p-2 bg-gray-50 rounded flex items-center justify-between">
          <span>{{ activity }}</span>
          <input
            type="checkbox"
            (change)="toggleChecked(activity, $event)"
            [checked]="checkedArray.includes(activity)"
          />
        </li>
      }
    </ul>
    <div class="flex justify-center mt-4">
      <button
        class="mt-4 py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 item-center"
        (click)="submitChecked()"
      >
        Submit
      </button>
    </div>
  </div>
`,
  styles: ``
})
export class ActivityListPage {
  activities: Array<string> = []  
  private activityService = inject(ActivityService);
  constructor(){
    this.getActivities();
  }

  checkedArray: string[] = [];

  async getActivities(){
    let _ = await this.activityService.getActivities().subscribe({
      next: (response) => {
        this.activities = response.data.map(x => x.name);
      }
    })
  }

  toggleChecked(activity: string, event: Event) {
    const isChecked = (event.target as HTMLInputElement).checked;
    if (isChecked) {
      this.checkedArray.push(activity);
    } else {
      this.checkedArray = this.checkedArray.filter((item) => item !== activity);
    }
  }

  submitChecked() {

  }
}
