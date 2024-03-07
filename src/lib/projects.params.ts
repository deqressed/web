import Assets from './data/assets';
import { getSkills } from './skills.params';
import type { Project } from './types';

const MY_PROJECTS: Array<Project> = [
	{
		slug: 'sk',
		color: '#FFFFFF',
		description:
			"Skript is a plugin for Minecraft servers that lets administrators and developers easily create custom features using a simple scripting language. With Skript, you can customize gameplay mechanics, create new items, and define unique behaviors for in-game events. It's designed to be user-friendly and doesn't require extensive programming knowledge.",
		shortDescription:
			"This project gives you a core script and bot script, note that it hasn't been updated since a year ago or so, it comes with basic commands like gamemodes, fly, and such.",
		links: [{ to: 'https://github.com/deqressed/Public-Skripts', label: 'GitHub' }],
		logo: Assets.Skript,
		name: 'Skript Codes',
		period: {
			from: new Date(2022, 2-1, 19),
			to: new Date(2024, 1-1, 4)
		},
		skills: getSkills('Skript'),
		type: 'Public Code I coded a while ago'
	},
	{
		slug: 'Pentest-Tools',
		color: '#ff3e00',
		description: 'Some tools for you to download to help you with your pentrest journey, hope it helps. and they\'re all from Github, and the code is opensource ',
		shortDescription:
			'Boost the effectiveness of your cybersecurity toolkit by incorporating additional penetration testing tools and other highly beneficial information security resources sourced from GitHub. ',
		links: [{ to: 'https://github.com/deqressed/pentest-tools-gh', label: 'GitHub' }],
		logo: Assets.Bash,
		name: 'Pentesting Tools',
		period: {
			from: new Date(2024, 1, 6),
			to: new Date(2024, 1, 23)
		},
		skills: getSkills('Python', 'Bash'),
		type: 'Linux Tools - GITHUB EDITION',
		screenshots: [
			{
				label: 'Screenshot from BASH',
				src: `${Assets.sc}`
			}
		]
	}
];

export default MY_PROJECTS;

// const MY_PROJECTS: Array<Project> = [
// 	{
// 		slug: 'sk',
// 		color: '#FFFFFF',
// 		description:
// 			'Skript is a plugin for Minecraft servers that lets administrators and developers easily create custom features using a simple scripting language. With Skript, you can customize gameplay mechanics, create new items, and define unique behaviors for in-game events. It\'s designed to be user-friendly and doesn\'t require extensive programming knowledge.',
// 		shortDescription:
// 			'This project gives you a core script and bot script, note that it hasn\'t been updated since a year ago or so, it comes with basic commands like gamemodes, fly, and such.',
// 		links: [{ to: 'https://github.com/deqressed/Public-Skripts', label: 'GitHub' }],
// 		logo: Assets.Skript,
// 		name: 'Skript Codes',
// 		period: {
// 			from: new Date(2022, 3, 19),
// 			to: new Date(2024, 1, 4)
// 		},
// 		skills: getSkills('Skript'),
// 		type: 'Public Code I coded a while ago'
// 	},
// 	{
// 		slug: 'Pentest-Tools',
// 		color: '#ff3e00',
// 		description:
// 			'Some tools to download to help you with your pentrest journey, hope it helps.',
// 		shortDescription:
// 			'Description ',
// 		links: [{ to: 'https://google.com', label: 'Google' }],
// 		logo: Assets.Unknown,
// 		name: '',
// 		period: {
// 			from: new Date()
// 		},
		// skills: getSkills(/*'svelte', 'ts', 'tailwind'*/),
// 		type: '', // Linux Tools
// 		screenshots: [
// 		]
// 	}
// ];
