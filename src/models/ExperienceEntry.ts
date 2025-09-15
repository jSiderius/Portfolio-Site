import type { ProjectEntry } from './ProjectEntry.ts'


interface KeyProjectEntry{
	name: string;
	synopsis: string;
}

export interface ExperienceEntry{
	id: number;
	role: string;
	company: string;
	timePeriod: string;
	workLocationType: string;
	resumeBullets: string[];
	keyProjects: KeyProjectEntry[];
}