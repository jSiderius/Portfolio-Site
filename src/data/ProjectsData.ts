import type { ProjectEntry } from "../models/ProjectEntry"
import logo from "@/assets/Images/Project/logo.png";
import map_gen from "@/assets/Images/Project/map-gen.png";
import bubble_escape from "@/assets/Images/Project/bubble-escape.jpg";
import jeopardy_search from "@/assets/Images/Project/jeopardy-search.jpg";
import secret_santa from "@/assets/Images/Project/santa.png";

export const projects: ProjectEntry[] = [
	{
		date: "November 2025",
		name: "Portfolio Website",
		description: "Frontend web project to show off my experience as a developer!",
		demoLink: "#",
		githubLink: "https://github.com/jSiderius/Portfolio-Site",
		techStack: ["React", "Typescript", "Javascript", "HTML", "CSS"],
		imagePath: logo
	},
	{
		date: "April 2025",
		name: "Map Gen",
		description: "2 dimensional procedural city layout and tile generator.",
		demoLink: "",
		githubLink: "https://github.com/jSiderius/MapGen",
		techStack: ["Godot", "GDScript", "DS&A"],
		imagePath: map_gen
	},
	{
		date: "February 2025",
		name: "Bubble Escape",
		description: "Puzzle game created in two days for Global Game Jam 2025.",
		demoLink: "https://jsiderius.itch.io/bubble-escape",
		githubLink: "https://github.com/jSiderius/GlobalGameJam2025",
		techStack: ["Godot", "GDScript"],
		imagePath: bubble_escape
	},
	{
		date: "December 2024",
		name: "AI Search Engine",
		description: "Search engine that embeds and looks up row data using AI embeddings. Active on Jeopardy data.",
		demoLink: "https://github.com",
		githubLink: "https://github.com/jSiderius/AI_Search_Engine",
		techStack: ["Python", "Javascript", "HTML", "CSS"],
		imagePath: jeopardy_search
	},
	{
		date: "September 2022",
		name: "Secret Santa Manager",
		description: "Program to determine secret santa gift givers and receivers; Acts as an email client and notifies all participants.",
		demoLink: "https://github.com",
		githubLink: "https://github.com/jSiderius/SecretSanta",
		techStack: ["Python", "SMTP"],
		imagePath: secret_santa
	}
]