// src/components/Projects.tsx

import React from "react";
import SectionTitle from "./SectionTitle";
import ProjectCard from "./ProjectCard";
import projectsData from "@/data/projects";

const Projects: React.FC = () => {
	return (
		<section
			id="projects"
			className="py-20">
			<div className="container mx-auto px-4">
				<SectionTitle title="Featured Projects" />
				<div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{projectsData.map((project) => (
						<ProjectCard
							key={project.id}
							title={project.title}
							description={project.description}
							tags={project.tags}
							githubUrl={project.githubUrl}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default Projects;
