import type { ExperienceEntry } from "../models/ExperienceEntry";


export const experiences: ExperienceEntry[] = [
	{
		id: 1,
		role: "Academic Assistant",
		company: "Queen's University",
		timePeriod: "May 2025 - Present",
		workLocationType: "Hybrid",
		resumeBullets: ["Facilitated in-person components of a high-enrollment course (700+ students) by generating and refining instructional content, coordinating a team of 40 Teaching Assistants, and organizing exam administration",
			"Provided technical support for students, diagnosing and resolving complex environment and tooling issues, which reduced recurring technical disruptions and improved student learning outcomes",
			],
		keyProjects: [
			{
				name: "APSC 141",
				synopsis: "First year C programming course for engineers. I worked as one of two Academic Assistants managing 700+ students and 40 TA's; I worked on course content and grading as well as overseeing exams and weekly labs."
			},
			{
				name: "MNTC 313",
				synopsis: "Third year C++ & Matlab course for engineers. I worked as the sole Academic Assistant managing <100 students; I worked on course content and grading, made executive decisions, and managed student - staff communication."
			},
		],
	},
	{
		id: 2,
		role: "Game Developer",
		company: "Queen's University",
		timePeriod: "May 2025 - August 2025",
		workLocationType: "Hybrid",
		resumeBullets: ["Designed and implemented a robust, software-centric dialog system in C# using the Unity engine, enabling dynamic, text-driven conversations for an educational game", 
			"Managed development for both VR and keyboard builds, ensuring feature parity and full game functionality on every build push through disciplined version control and modular design",
			"Integrated dialog logic with in-game world events, allowing seamless coordination between narrative progression and gameplay mechanics",
			"Prioritized maintainability and ease of use, delivering a configuration-friendly system that required minimal post-development upkeep"],
		keyProjects: [
			{
				name: "Dialog Management System",
				synopsis: "A dialog management system used to replace RPGTalk across the entire project. Features included: World integration & callbacks, configuration menu, accessibility settings, dialog flow control, dialog file tracking, and much more.",
			},
	],
	},
	{
		id: 3,
		role: "AI Research Assistant",
		company: "Ross Video",
		timePeriod: "May 2023-August 2024",
		workLocationType: "Hybrid",
		resumeBullets: ["Developed a web program using OCR libraries and LLM’s to reconcile quote and purchase order discrepancies which can take sales reps up to an hour of manual work",
			"Researched quantitative methods to predict company revenue following layoffs caused by inaccurate growth forecasts, improved on existing methodology with a model that estimates quarterly revenue at 90-95% accuracy",
			"Conducted research on market-ready AI tools by creating standardized tests and conducting user-studies and meta-analyses, positioning the company for purchasing decisions to improve employee efficiency"],
		keyProjects: [
			{
				name: "Quote PO Reconciliation",
				synopsis: "A program that used OCR and PDF libraries to break down quote and purchase order files into an itemized list of their contents and compare to find discrepencies.",
			},
			{
				name: "Document Retrieval Bot",
				synopsis: "A RAG program that pulls from a group of sharepoint documents and provides a generative AI interface to query for information.",
			},
			{
				name: "Product Code Search Engine",
				synopsis: "A program that uses vector embeddings vector databases to create a lightning fast web interface for searching Ross product codes (3000+) with natural language.",
			},
			{
				name: "Revenue Forecasting",
				synopsis: "A data pipeline connecting Salesforce data to a revenue prediction model.",
			},
			{
				name: "Project Reinhardt",
				synopsis: "A research project assessing commercially available AI products for their security risks, capabilities in a variety of programming tasks, and effeciency increase potential for Ross developers.",
			},
		],
	},
	{
		id: 4,
		role: "Teaching Assistant",
		company: "Carleton University",
		timePeriod: "September 2022 - May 2023",
		workLocationType: "Hybrid",
		resumeBullets: ["Led discussions, provided one-on-one support, and graded materials to assist senior staff in delivering C and C++ software engineering courses, enhancing instruction quality and fostering student engagement",
			"Reviewed and analyzed students’ code to provide meaningful insights, enhancing their understanding of programming concepts and developing their debugging skills"],
		keyProjects: [
			{
				name: "COMP 2402",
				synopsis: "Second year intro to C & C++ course.",
			},
			{
				name: "COMP 2404",
				synopsis: "Follow up course to COMP 2402 teaching more advanced topics.",
			},
		],
	},
	{
		id: 5,
		role: "Academic Experience",
		company: "",
		timePeriod: "",
		workLocationType: "",
		resumeBullets: [],
		keyProjects: [],
		
	}
]

export const academicExperiences: ExperienceEntry[] = [
	{
		id: 1,
		role: "Bachelor of Computer Science",
		company: "Carleton University",
		timePeriod: "2019-2025",
		workLocationType: "On Site",
		keyProjects: [{name: "Capstone Project - Procedural City Generator", synopsis: "A project which uses a series of procedural generation algorithms to create a 2 dimensional city layout."}],
		resumeBullets: ["10.00/12.00 CGPA for major requirements",
			"Completed courses covering software engineering, algorithms, databases, web development, artificial intelligence, and data structures.",
			"Gained applied experience with Python, Java, C++, SQL, and more."],
	},

	{
		id: 2,
		role: "Statistics Minor",
		company: "Carleton University",
		timePeriod: "2019-2025",
		workLocationType: "On Site",
		keyProjects: [],
		resumeBullets: ["10.14/12.00 CGPA", 
		"Completed courses covering advanced statistical models and their applications in depth."],
	},
	{
		id: 3,
		role: "Math Minor",
		company: "Carleton University",
		timePeriod: "2019-2025",
		workLocationType: "On Site",
		keyProjects: [],
		resumeBullets: ["9.71/12.00 CGPA", 
			"Covered foundational math topics including: Calculus 1-3, Linear Algebra 1-2, Discrete Mathematics, and Computational Modelling."],
	},
	{
		id: 4,
		role: "Professional Experience",
		company: "",
		timePeriod: "",
		workLocationType: "",
		resumeBullets: [],
		keyProjects: [],
	}
]