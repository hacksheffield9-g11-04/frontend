export interface ActivityRequest {
  category: string;
  difficulty: 'easy' | 'medium' | 'hard'; // string literal type
  durationPerDay: number;
}

export interface ActivityResponse {
  activities: string[];
  original: string;
}
