// src/components/ProjectCard.tsx

import React from "react";
import { FaGithub } from "react-icons/fa";

interface ProjectCardProps {
	title: string;
	description: string;
	tags: string[];
	githubUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
	title,
	description,
	tags,
	githubUrl,
}) => {
	return (
		<div className="backdrop-blur-sm bg-white/5 p-6 rounded-lg border border-white/10 flex flex-col h-full">
			<h3 className="text-xl font-bold mb-2 text-glow-pink">{title}</h3>
			<p className="text-gray-400 mb-4 flex-grow">{description}</p>
			<div className="flex flex-wrap gap-2 mb-6">
				{tags.map((tag, index) => (
					<span
						key={index}
						className="bg-gray-700 text-xs font-semibold px-2 py-1 rounded">
						{tag}
					</span>
				))}
			</div>
			<div className="mt-auto">
				<a
					href={githubUrl}
					target="_blank"
					rel="noopener noreferrer"
					className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-glow-pink transition-colors">
					<FaGithub />
					View on GitHub
				</a>
			</div>
		</div>
	);
};

export default ProjectCard;
