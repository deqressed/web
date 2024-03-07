import { MY_EDUCATIONS } from './educations.params';
import MY_EXPERIENCES from './experiences.params';
import MY_PROJECTS from './projects.params';
import MY_SKILLS from './skills.params';
import {
	Platform,
	type HomePageParams,
	type ProjectPageParams,
	type ExperiencePageParams,
	type SkillsPageParams,
	type SearchPageParams,
	type EducationPageParams
} from './types';
import { Icons } from './utils';

export const TITLE_SUFFIX = 'deqressing <3';

export const NavBar = {
	home: 'Home',
	personal: 'Projects',
	career: 'Experiences',
	skills: 'Skills',
	Education: 'Education'
};

export const getPlatfromIcon = (platform: Platform): Icons => {
	switch (platform) {
		case Platform.GitHub:
			return Icons.GitHub;
		case Platform.Twitter:
			return Icons.Twitter;
		case Platform.Dev:
			return Icons.Dev;
		case Platform.Discord:
			return Icons.Discord;
	}
};

export const HOME: HomePageParams = {
	title: 'Home',
	name: 'deqressing',
	description:
		'Hey there! I\'m deqressing, a kind of full-stack developer in the making. I dipped my toes into coding when I was 14 and, surprise surprise, ended up loving it. Despite being 19, I\'m currently navigating the challenges of high school life. That hasn\'t stopped me from diving into pentesting and cyber stuff from 2020-2021. Can\'t get over the thrill of it, and I\'m picking up new programming languages along the way!',
	links: [
		{ platform: Platform.GitHub, link: 'https://github.com/deqressed' },
		{
			platform: Platform.Twitter,
			link: 'https://twitter.com/'
		},
		{
			platform: Platform.Dev,
			link: 'https://dev.to/deqressed'
		},
		{
			platform: Platform.Discord,
			link: 'https://discord.id/?prefill=965722162566692914'
		}
		
	]
};

export const PROJECTS: ProjectPageParams = {
	title: 'Projects',
	description: 'efwfwef',
	items: MY_PROJECTS
};

export const EXPERIENCES: ExperiencePageParams = {
	title: 'Experiences',
	description: '',
	items: MY_EXPERIENCES
};

export const SKILLS: SkillsPageParams = {
	title: 'Skills',
	description: '',
	items: MY_SKILLS
};

export const SEARCH: SearchPageParams = {
	title: 'Search',
	description: '',
};

export const EDUCATION: EducationPageParams = {
	items: MY_EDUCATIONS,
	title: 'Education',
	description: '',
	
};
