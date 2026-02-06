export type Patient = {
  name: string;
  age: number;
  avatarId: string;
  id: string;
  interests: string;
  physicalCapabilities: string;
  medicalConditions?: string;
};

export type HealthMetric = {
  time: string;
  value: number;
};

export type BloodPressureMetric = {
  time: string;
  systolic: number;
  diastolic: number;
};

export type Vitals = {
  heartRate: HealthMetric[];
  bloodPressure: BloodPressureMetric[];
  steps: HealthMetric[];
  sleep: HealthMetric[];
};

export type Reminder = {
  id: string;
  medication: string;
  dosage: string;
  time: string;
  taken: boolean;
};

export type Contact = {
  id: string;
  name: string;
  relation: string;
  phone: string;
  avatarId: string;
};
