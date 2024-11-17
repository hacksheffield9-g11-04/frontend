import { Component, inject, signal } from '@angular/core';
import { DataModelManagerService } from '../dataModelManagerService';
import { HeadingComponent } from '../shared/ui/heading.component';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [HeadingComponent],
  template: `
    <div
      class="flex flex-col justify-center items-center min-h-[70vh] bg-gray-100 p-4"
    >
      <div class="pb-4">
        <app-heading title="Select your favorite task 🔮"></app-heading>
      </div>

      <div class="relative w-80 h-80">
        @if (activities().length === 0) {
        <div
          class="absolute w-full h-full flex items-center flex-col justify-center text-bold border-4 border-dashed border-gray-400 rounded-lg text-3xl text-gray-300 animate-appear"
        >
          <p class="text-gray-400">No more</p>
          <p class="text-gray-400">activities :c</p>
        </div>
        } @for (activity of activities(); track activity) {
        <div
          [class]="getCardStyles()"
          [style.transform]="getCardTransform($index)"
          [style.z-index]="activities().length - $index"
          class="flex items-center justify-center card"
          [attr.data-index]="$index"
        >
          <h3 class="text-2xl font-bold text-center p-8">{{ activity }}</h3>
        </div>
        }
      </div>
    </div>
    <div class="flex justify-center">
      <button
        (click)="rejectCard()"
        [class.opacity-50]="!activities().length"
        [disabled]="!activities().length"
        class="mx-4 bg-red-500 hover:bg-red-600 text-white font-bold h-14 w-14 text-2xl rounded-full shadow-lg transform transition hover:scale-105"
      >
        ✕
      </button>
      <button
        (click)="acceptCard()"
        [class.opacity-50]="!activities().length"
        [disabled]="!activities().length"
        class="mx-4 bg-green-500 text-2xl hover:bg-green-600 text-white font-bold h-14 w-14  rounded-full shadow-lg transform transition hover:scale-105"
      >
        ✓
      </button>
    </div>
  `,
  styles: [
    `
      .card-reject {
        transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        opacity: 0;
        transform: translate(var(--exit-x), var(--exit-y))
          rotate(var(--exit-rotation)) !important;
      }
    `,
  ],
})
export class CardsPage {
  activities = signal<string[]>([]);
  currentActivity = signal<string | null>(null);
  private dataModelMgrSvc = inject(DataModelManagerService);

  ngOnInit(): void {
    const activitiesData = this.dataModelMgrSvc.get('activities');
    if (Array.isArray(activitiesData)) {
      this.activities.set(activitiesData);
      this.updateCurrentActivity();
    } else {
      this.activities.set([]);
      this.currentActivity.set(null);
    }
  }

  hasActivities(): boolean {
    return Array.isArray(this.activities()) && this.activities().length > 0;
  }

  getCardStyles(): string {
    return `
      absolute w-full h-64 bg-white rounded-lg shadow-xl transition-all duration-300
      transform hover:scale-105 cursor-pointer
    `;
  }

  getCardTransform(index: number): string {
    const offset = index * 4;
    return `translateY(${offset}px) rotate(${offset / 2}deg)`;
  }

  // Simple accept without animation
  acceptCard() {
    if (this.hasActivities()) {
      const currentActivities = this.activities();
      const [_, ...remaining] = currentActivities;
      this.activities.set(remaining);
      this.updateCurrentActivity();
    }
  }

  // Reject with animation
  async rejectCard() {
    if (this.hasActivities()) {
      const topCard = document.querySelector(
        '.card[data-index="0"]'
      ) as HTMLElement;
      if (topCard) {
        // Random values for exit animation
        const exitX = Math.random() * 1000 - 500; // -500 to +500
        const exitY = Math.random() * 1000 - 500; // -500 to +500
        const exitRotation = Math.random() * 180 - 90; // -90 to +90 degrees[1]

        // Set custom properties for the animation
        topCard.style.setProperty('--exit-x', `${exitX}px`);
        topCard.style.setProperty('--exit-y', `${exitY}px`);
        topCard.style.setProperty('--exit-rotation', `${exitRotation}deg`);

        // Add the rejection animation class
        topCard.classList.add('card-reject');

        // Wait for animation to complete
        await new Promise((resolve) => setTimeout(resolve, 500));
      }

      // Update state after animation
      const currentActivities = this.activities();
      const [_, ...remaining] = currentActivities;
      this.activities.set(remaining);
      this.updateCurrentActivity();
    }
  }

  private updateCurrentActivity() {
    const currentActivities = this.activities();
    if (this.hasActivities()) {
      this.currentActivity.set(currentActivities[0]);
    } else {
      this.currentActivity.set(null);
    }
  }
}
