import Assets from './data/assets';
import type { Education } from './types';

export const MY_EDUCATIONS: Array<Education> = [
	{
		degree: 'High School',
		description: '',
		location: 'KSA',
		logo: Assets.Unknown,
		name: '',
		organization: 'N/A',
		period: { from: new Date(2020, 0, 1), to: new Date(2023, 5, 1) },
		shortDescription: 'High school located in New Jersey',
		slug: 'dummy-education-item',
		subjects: ['Python', 'JavaScript', 'Algebra', 'English']
	},
	// {
	// 	degree: 'High School',
	// 	description: '',
	// 	location: 'KSA',
	// 	logo: Assets.Unknown,
	// 	name: '',
	// 	organization: '',
	// 	period: { from: new Date(2023, 0, 1)},
	// 	shortDescription: '',
	// 	slug: 'dummy-education-item-2',
	// 	subjects: ['Computer Architecture', 'Algorithms and Data structures', 'Computer Science']
	// }
];
