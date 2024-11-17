interface Activity {
  id: number;
  name: string;
}

interface DaySchedule {
  day: number;
  activities: Activity[];
}

export const scheduleData: DaySchedule[] = [
  {
    day: 1,
    activities: [
      { id: 1, name: 'Running' },
      { id: 2, name: 'Swimming' },
      { id: 3, name: 'Yoga' },
      { id: 4, name: 'Reading' },
    ],
  },
  {
    day: 2,
    activities: [],
  },
  {
    day: 3,
    activities: [{ id: 7, name: 'Swimming' }],
  },
  {
    day: 4,
    activities: [
      { id: 8, name: 'Running' },
      { id: 9, name: 'Swimming' },
      { id: 10, name: 'Yoga' },
      { id: 11, name: 'Reading' },
    ],
  },
  {
    day: 5,
    activities: [
      { id: 12, name: 'Yoga' },
      { id: 13, name: 'Reading' },
    ],
  },
  {
    day: 6,
    activities: [
      { id: 14, name: 'Running' },
      { id: 15, name: 'Swimming' },
      { id: 16, name: 'Reading' },
    ],
  },
  {
    day: 7,
    activities: [{ id: 17, name: 'Swimming' }],
  },
  {
    day: 8,
    activities: [
      { id: 18, name: 'Running' },
      { id: 19, name: 'Swimming' },
      { id: 20, name: 'Yoga' },
      { id: 21, name: 'Reading' },
    ],
  },
  {
    day: 9,
    activities: [
      { id: 22, name: 'Running' },
      { id: 23, name: 'Reading' },
    ],
  },
  {
    day: 10,
    activities: [
      { id: 24, name: 'Swimming' },
      { id: 25, name: 'Yoga' },
    ],
  },
  {
    day: 11,
    activities: [{ id: 26, name: 'Running' }],
  },
  {
    day: 12,
    activities: [
      { id: 27, name: 'Running' },
      { id: 28, name: 'Swimming' },
      { id: 29, name: 'Yoga' },
      { id: 30, name: 'Reading' },
    ],
  },
  {
    day: 13,
    activities: [
      { id: 31, name: 'Swimming' },
      { id: 32, name: 'Reading' },
    ],
  },
  {
    day: 14,
    activities: [
      { id: 33, name: 'Running' },
      { id: 34, name: 'Yoga' },
    ],
  },
  {
    day: 15,
    activities: [{ id: 35, name: 'Swimming' }],
  },
  {
    day: 16,
    activities: [
      { id: 36, name: 'Running' },
      { id: 37, name: 'Swimming' },
      { id: 38, name: 'Yoga' },
      { id: 39, name: 'Reading' },
    ],
  },
  {
    day: 17,
    activities: [
      { id: 40, name: 'Running' },
      { id: 41, name: 'Reading' },
    ],
  },
  {
    day: 18,
    activities: [{ id: 42, name: 'Swimming' }],
  },
  {
    day: 19,
    activities: [
      { id: 43, name: 'Running' },
      { id: 44, name: 'Swimming' },
      { id: 45, name: 'Yoga' },
    ],
  },
  {
    day: 20,
    activities: [
      { id: 46, name: 'Yoga' },
      { id: 47, name: 'Reading' },
    ],
  },
  {
    day: 21,
    activities: [
      { id: 48, name: 'Running' },
      { id: 49, name: 'Swimming' },
      { id: 50, name: 'Yoga' },
      { id: 51, name: 'Reading' },
    ],
  },
];
