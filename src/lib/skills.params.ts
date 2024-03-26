import Assets from './data/assets';
import type { Skill } from './types';
import svelte from './md/svelte.md?raw';

const s = (skill: Skill) => skill;

export type ArrayElementType<ArrayType extends readonly unknown[]> =
	ArrayType extends readonly (infer ElementType)[] ? ElementType : never;

const MY_SKILLS = [
	/**





s({
  slug: 'Reactjs',
  color: 'lightblue',
  description:
    'React.js is a JavaScript library for building user interfaces, particularly for single-page applications where the content dynamically updates as users interact with it. Developed and maintained by Facebook, React makes it easy to create reusable UI components.',
  logo: Assets.ReactJS,
  name: 'React.js'
}),




 */
	s({
		slug: 'Vite',
		color: 'purple',
		description:
			"Vite is a versatile tool for internet projects. Thanks to its speed and simple configuration, the time spent on switching to Vite quickly pays off. It's not just fast but also user-friendly, without limiting developers. Above all, using Vite saves time, and it's a flexible tool that seamlessly fits into any JavaScript project.",
		logo: Assets.Vite,
		name: 'Vite'
	}),
	s({
		slug: 'Python',
		color: 'cornflowerblue',
		description:
			"Python is a high-level programming language known for its readability and simplicity. It's versatile, supporting various applications from web development to data analysis. Python's extensive libraries and frameworks make coding efficient, while its indentation-based syntax enhances code readability. It's widely used for tasks like automation, machine learning, and web development.",
		logo: Assets.Python,
		name: 'Python'
	}),
	s({
		slug: 'Javascript',
		color: 'yellow',
		description:
			'JavaScript is a high-level programming language known for its versatility and use in web development. It allows developers to create interactive and dynamic content on websites. With a wide range of applications, it is a fundamental language for both front-end and back-end development.',
		logo: Assets.JavaScript,
		name: 'JavaScript'
	}),
	s({
		slug: 'Java',
		color: 'yellow',
		description:
			'The name JAVA is a computer-based programming language that functions to develop computer-based applications. It does not have a specific full form or neither an abbreviation. Hence, the \'Just Another Virtual Accelerator\' is a fictionalized complete version of JAVA and the name is put forward by the general public.',
		logo: Assets.Java,
		name: 'Java'
	}),
	s({
		slug: 'TypeScript',
		color: 'blue',
		description:
			'TypeScript is a high-level programming language known for its versatility and use in web development. It allows developers to create interactive and dynamic content on websites. With a wide range of applications, it is a fundamental language for both front-end and back-end development.',
		logo: Assets.TypeScript,
		name: 'TypeScript'
	}),
	// s({
	// 	slug: 'Nodejs',
	// 	color: 'green',
	// 	description:
	// 		'Node.js is a server-side JavaScript runtime that enables the execution of JavaScript code outside a web browser. It is particularly useful for building scalable and efficient network applications, making it a popular choice for back-end development.',
	// 	logo: Assets.NodeJs,
	// 	name: 'Node.js'
	// }),
	s({
		slug: 'Bash',
		color: 'white',
		description:
			"Bash is the shell, or command language interpreter, for the GNU operating system. The name is an acronym for the ' Bourne-Again SHell ', a pun on Stephen Bourne, the author of the direct ancestor of the current Unix shell sh , which appeared in the Seventh Edition Bell Labs Research version of Unix.",
		logo: Assets.Bash,
		name: 'Bash'
	}),
	s({
		slug: 'CSS3',
		color: 'blue',
		description:
			'CSS (Cascading Style Sheets) is a styling language used to control the presentation and layout of HTML documents. It allows developers to define the visual style of web pages, including fonts, colors, spacing, and responsive design.',
		logo: Assets.CSS,
		name: 'CSS'
	}),
	s({
		slug: 'Skript',
		color: 'orange',
		description:
			'Skript is (surprise, surprise) a scripting plugin for the Bukkit platform. It is easy to use for simple tasks, but you can also create really complex things with it. The syntax of Skript is close to English, but it is still not magic.',
		logo: Assets.Skript,
		name: 'Skript'
	}),
	s({
		slug: 'Git',
		color: 'red',
		description: `The Git feature that really makes it stand apart from nearly every other SCM out there is its branching model.
			Git allows and encourages you to have multiple local branches that can be entirely independent of each other.
			The creation, merging, and deletion of those lines of development takes seconds.`,
		logo: Assets.Git,
		name: 'Git'
	}),
	s({
		slug: 'HTML5',
		color: 'orange',
		description:
			'HTML (Hypertext Markup Language) is the standard markup language for creating web pages. It structures content on the web, defining elements like headings, paragraphs, links, and images. HTML works in conjunction with CSS and JavaScript to create interactive websites.',
		logo: Assets.HTML,
		name: 'HTML'
	}),
	// s({
	// 	slug: 'Reactjs',
	// 	color: 'cyan',
	// 	description:
	// 		'React.js is a JavaScript library for building user interfaces, particularly for single-page applications where the content dynamically updates as users interact with it. Developed and maintained by Facebook, React makes it easy to create reusable UI components.',
	// 	logo: Assets.ReactJs,
	// 	name: 'React.js'
	// }),
	s({
		slug: 'Svelte',
		color: 'purple',
		description:
			'Svelte is a JavaScript framework that shifts the work of building applications from the browser to the build step. It compiles components into highly efficient JavaScript at build time, resulting in faster runtime performance and a smaller bundle size.',
		logo: Assets.Svelte,
		name: 'Svelte'
	}),
	s({
		slug: 'MongoDB',
		color: 'green',
		description:
			'MongoDB is a NoSQL database that stores data in flexible, JSON-like documents. It is designed to be scalable and capable of handling large volumes of data with ease. MongoDB is commonly used in modern web development for its flexibility and scalability.',
		logo: Assets.MongoDB,
		name: 'MongoDB'
	}),

	s({
		slug: 'AWS',
		color: 'orange',
		description:
			'Amazon Web Services (AWS) is a cloud computing platform offering a wide range of services, including computing power, storage, databases, machine learning, and more. It provides scalable and flexible solutions, enabling businesses to innovate and grow.',
		logo: Assets.AWS,
		name: 'AWS'
	}),

	s({
		slug: 'Railway',
		color: 'white',
		description:
			'Railway is a platform that simplifies the deployment and management of web applications. It offers a seamless experience for developers by automating the deployment process, making it easy to host and scale applications without the complexities of traditional server management.',
		logo: Assets.Railway,
		name: 'Railway'
	}),
	s({
		slug: 'DJS',
		color: 'red',
		description:
			"discord.js is a powerful Node.js module that allows you to interact with the Discord API very easily. It takes a much more object-oriented approach than most other JS Discord libraries, \n making your bot's code significantly tidier and easier to comprehend.",
		logo: Assets.DJS,
		name: 'Discord.js'
	})
];

export default MY_SKILLS;

export const getSkills = (...slugs: Array<string>): Array<Skill> =>
	MY_SKILLS.filter((it) => slugs.includes(it.slug));
