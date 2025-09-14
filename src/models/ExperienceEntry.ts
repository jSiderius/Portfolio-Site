import type { ProjectEntry } from './ProjectEntry.ts'

export interface ExperienceEntry{
	id: number;
	role: string;
	company: string;
	timePeriod: string;
	workLocationType: string;
	resumeBullets: string[];
	keyProjects: ProjectEntry[];
}