interface KeyProjectEntry{
	name: string;
	synopsis: string;
}

export interface ExperienceEntry{
	id: number;
	referenceId: number | null;
	type: string;
	role: string;
	company: string;
	timePeriod: string;
	workLocationType: string;
	resumeBullets: string[];
	keyProjects: KeyProjectEntry[];
}