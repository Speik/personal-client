export interface IJourney {
  id?: string;
  employerName: string;
  jobTitle: string;
  shortDescription: string;
  startedAt: string;
  endedAt: Nullable<string>;
  description: string;
  skills: string[];
}
