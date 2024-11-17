export interface ActivityRequest {
  category: string;
  difficulty: 'easy' | 'medium' | 'hard'; // string literal type
  durationPerDay: number;
}

export interface ActivityResponse {
  activities: string[];
  original: string;
}

interface ActivityNode {
  _id: string;
  name: string;
}

interface DayActivities {
  startDate: string;
  activities: ActivityNode[];
}

export interface ActivityTreeResponse {
  graph: DayActivities[];
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