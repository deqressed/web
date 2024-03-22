import CardLink from './components/Card/CardLink.svelte';
import Assets from './data/assets';
import { getSkills } from './skills.params';
import { ContractType, type Experience, type Link } from './types';

const MY_EXPERIENCES: Array<Experience> = [
	{
		slug: 'flexed',
		company: 'Minehut Server',
		description:
			'In 2022, I stepped into the Manager position, and by 2023, I had assumed total control of the server.',
		contract: ContractType.PartTime,
		type: 'Full Management',
		location: 'Home',
		period: { from: new Date(2021, 9, 3), to: new Date(2023, 9, 13) },
		skills: getSkills('Skript', 'Javascript', 'DJS' /*, 'Java' */),
		name: 'Developer & Manager',
		color: 'blue',
		links: [{ to: 'https://discord.gg/DXrw2JsPag', label: "Flexed's Discord" }],
		// links: [{to}],
		logo: Assets.Flexed,
		shortDescription: 'Manager/H-Developer Position'
	},
	{
		slug: 'simux',
		company: 'Minehut Server',
		description: `SimuX, short for SimulatorX, operated as a correctional facility within the Minecraft gaming environment, hosted on the Minehut server platform.  
			In its nascent stages, the server remained unreleased to the public, and during this period.  
			I played a pivotal role in contributing 
			significantly to the development and management of the associated Discord server.
			Assuming the role of Staff Team Manager, my responsibilities extended to overseeing and optimizing the efficiency of the staff members.   
			This encompassed tasks such as staff management, ensuring adherence to protocols, and actively participating in the editing and enhancement of the Discord server interface.  
			As part of my managerial duties, I assumed full control over the Discord server, ensuring a seamless and organized communication platform for the community.  
			Meanwhile, the founders took charge of the Minecraft server, managing its operational aspects. 
			In parallel, my focus remained steadfast on the staff team, diligently addressing any challenges, optimizing workflows, and fostering a cohesive environment within the Discord server. 
			Through this multifaceted approach, I endeavored to contribute to the overall success and functionality of SimuX.`,
		contract: ContractType.PartTime,
		type: 'Software Development & Staff Manager',
		location: 'Home',
		period: { from: new Date(2023, 5, 18), to: new Date(2023, 10, 6) },
		skills: getSkills('CSS3', 'HTML5', 'Javascript'),
		name: 'Manager',
		color: 'yellow',
		links: [],
		logo: Assets.Simux,
		shortDescription: 'Staff Manager & Discord Manager'
	},
	{
		slug: 'Embarkk',
		company: 'Self-employed',
		description: `Embarkk served as a correctional facility within the Minecraft gaming environment, hosted on the Minehut server platform.   
			Initially, the server garnered substantial popularity, attracting a significant player base.   
			However, challenges arose in subsequent weeks and months that altered the trajectory of its success.  
			Within the organizational structure, I held the position of Owner alongside another individual who assumed the Founder role.   
			The founder has taken charge of the majority of the server code, and I assisted in the process.  
			While I contributed to coding endeavors to some extent, my primary roles were that of Builder/Manager within the Minecraft server and Developer for the associated Discord server.  
			In my capacity as a Builder/Manager, I undertook the responsibilities of overseeing staff management and actively participating in the construction and development aspects of the Minecraft server.  
			Simultaneously, my role as a Discord Server Developer involved the implementation and enhancement of features within the Discord platform.`,
		contract: ContractType.PartTime,
		type: 'Full Management',
		location: 'Home',
		period: { from: new Date(2023, 1, 23), to: new Date(2023, 2, 12) },
		skills: getSkills('Javascript', 'DJS', 'Java', 'Skript'),
		name: 'Owner',
		color: 'orange',
		links: [],
		logo: Assets.Embarkk,
		shortDescription:
			"I did Embarrk a couple of times in the past for longer periods but I can't remember wh...Read more"
	},
	{
		slug: 'incoming',
		company: '...',
		description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac magna at quam placerat convallis id a tellus. Vivamus et felis neque. Nulla gravida leo lacinia orci sollicitudin, at scelerisque odio venenatis. Pellentesque sed metus consectetur nisi tristique mattis. Morbi ornare arcu nec rhoncus faucibus. In hac habitasse platea dictumst. Morbi nisi quam, maximus quis odio quis, congue viverra ligula. Sed egestas nisi id tincidunt sollicitudin. Vestibulum bibendum risus eget tellus iaculis pellentesque.`,
		contract: ContractType.Contract,
		type: '...',
		location: '...',
		period: { from: new Date(), to: new Date() },
		skills: getSkills(),
		name: 'More incoming...',
		color: 'orange',
		links: [],
		logo: Assets.Unknown,
		shortDescription:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac magna at quam placerat convallis id a tellus.'
	}
];

export default MY_EXPERIENCES;

/**	
 * EXAMPLE OF EXPERIENCE
 * 
,{
	slug: 'Example',
	company: 'Self-employed',
	description: 
		`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac magna at quam placerat convallis id a tellus. Vivamus et felis neque. Nulla gravida leo lacinia orci sollicitudin, at scelerisque odio venenatis. Pellentesque sed metus consectetur nisi tristique mattis. Morbi ornare arcu nec rhoncus faucibus. In hac habitasse platea dictumst. Morbi nisi quam, maximus quis odio quis, congue viverra ligula. Sed egestas nisi id tincidunt sollicitudin. Vestibulum bibendum risus eget tellus iaculis pellentesque.`,
	contract: ContractType.PartTime,
	type: 'Full Management',
	location: 'Home',
	period: { from: new Date(), to: new Date() },
	skills: getSkills(),
	name: 'Example',
	color: 'orange',
	links: [],
	logo: Assets.Unknown,
	shortDescription:
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac magna at quam placerat convallis id a tellus."
} 
*/
