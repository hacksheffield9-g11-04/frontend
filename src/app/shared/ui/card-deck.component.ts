// card-deck.component.ts
import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Card {
  id: number;
  title: string;
  description: string;
  image?: string;
}

@Component({
  selector: 'app-card-deck',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <!-- Left Button -->
      <button
        (click)="rejectCard()"
        class="mx-4 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full shadow-lg transform transition hover:scale-105"
      >
        ✕
      </button>

      <!-- Card Stack -->
      <div class="relative w-80 h-96">
        @for (card of cards(); track card.id) {
        <div
          [class]="getCardStyles(card.id)"
          [style.transform]="getCardTransform(card.id)"
          [style.z-index]="cards().length - cards().indexOf(card)"
        >
          <img
            *ngIf="card.image"
            [src]="card.image"
            class="w-full h-48 object-cover rounded-t-lg"
            [alt]="card.title"
          />

          <div class="p-5">
            <h3 class="text-xl font-bold mb-2">{{ card.title }}</h3>
            <p class="text-gray-600">{{ card.description }}</p>
          </div>
        </div>
        }
      </div>

      <!-- Right Button -->
      <button
        (click)="acceptCard()"
        class="mx-4 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full shadow-lg transform transition hover:scale-105"
      >
        ✓
      </button>
    </div>
  `,
})
export class CardDeckComponent {
  cards = signal<Card[]>([
    {
      id: 1,
      title: 'Card 1',
      description: 'Description for card 1',
    },
    {
      id: 2,
      title: 'Card 2',
      description: 'Description for card 2',
    },
    {
      id: 3,
      title: 'Card 3',
      description: 'Description for card 3',
    },
  ]);

  activeCard = signal<Card | null>(this.cards()[0]);

  getCardStyles(cardId: number): string {
    return `
      absolute w-full bg-white rounded-lg shadow-xl transition-all duration-300
      transform hover:scale-105 cursor-pointer
    `;
  }

  getCardTransform(cardId: number): string {
    const index = this.cards().findIndex((card) => card.id === cardId);
    const offset = index * 4; // 4px offset for each card
    return `translateY(${offset}px) rotate(${offset / 2}deg)`;
  }

  acceptCard() {
    const currentCards = this.cards();
    if (currentCards.length > 0) {
      const [topCard, ...remainingCards] = currentCards;
      this.cards.set(remainingCards);
      this.activeCard.set(remainingCards[0] || null);
      console.log('Accepted card:', topCard);
    }
  }

  rejectCard() {
    const currentCards = this.cards();
    if (currentCards.length > 0) {
      const [topCard, ...remainingCards] = currentCards;
      this.cards.set(remainingCards);
      this.activeCard.set(remainingCards[0] || null);
      console.log('Rejected card:', topCard);
    }
  }
}
