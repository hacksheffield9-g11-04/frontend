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
