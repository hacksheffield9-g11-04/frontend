export interface ActivityRequest {
  category: string;
  difficulty: 'easy' | 'medium' | 'hard'; // string literal type
  durationPerDay: number;
}

export interface ActivityResponse {
  activities: string[];
  original: string;
}

export interface ActivityDetail {
  _id: string;
  name: string;
  tag: string;
  savedBy: string;
  v: number;
  createdAt: string;
  updatedAt: string;
  isCompletedToday: boolean;
  datesCompleted?: string[]; // Optional since it doesn't appear in all objects
}

export interface ActivityDetailResponse {
  data: ActivityDetail[];
  count: number;
}