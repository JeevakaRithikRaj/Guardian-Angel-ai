import type { Patient, Vitals, Reminder } from '@/lib/types';

export const patient: Patient = {
  name: 'Eleanor Vance',
  age: 82,
  avatarId: 'patient-avatar',
  id: 'EV-3024',
  interests: 'Gardening, reading classic novels, listening to classical music',
  physicalCapabilities: 'Can walk with a cane, has difficulty with stairs, experiences mild arthritis in hands.',
};

export const vitals: Vitals = {
  heartRate: [
    { time: '00:00', value: 72 },
    { time: '02:00', value: 68 },
    { time: '04:00', value: 66 },
    { time: '06:00', value: 70 },
    { time: '08:00', value: 75 },
    { time: '10:00', value: 80 },
    { time: '12:00', value: 82 },
    { time: '14:00', value: 78 },
    { time: '16:00', value: 85 },
    { time: '18:00', value: 81 },
    { time: '20:00', value: 76 },
    { time: '22:00', value: 74 },
  ],
  bloodPressure: [
    { time: '08:00', systolic: 130, diastolic: 85 },
    { time: '12:00', systolic: 135, diastolic: 88 },
    { time: '18:00', systolic: 132, diastolic: 86 },
  ],
  steps: [
    { time: 'Total Today', value: 2345 }
  ],
  sleep: [
    { time: 'Last Night', value: 7.5 }
  ],
};

export const reminders: Reminder[] = [
  { id: '1', medication: 'Lisinopril', dosage: '10mg', time: '08:00 AM', taken: true },
  { id: '2', medication: 'Metformin', dosage: '500mg', time: '08:00 AM', taken: true },
  { id: '3', medication: 'Atorvastatin', dosage: '20mg', time: '08:00 PM', taken: false },
  { id: '4', medication: 'Vitamin D', dosage: '1000 IU', time: '08:00 PM', taken: false },
  { id: '5', medication: 'Drink Water', dosage: '8 oz', time: '10:00 AM', taken: true },
  { id: '6', medication: 'Walk', dosage: '15 min', time: '03:00 PM', taken: false },
];
