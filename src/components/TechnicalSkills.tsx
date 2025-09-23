// src/components/TechnicalSkills.tsx

import React from "react";
import SectionTitle from "./SectionTitle";
import {
	FaBrain,
	FaProjectDiagram,
	FaChartBar,
	FaCode,
	FaDatabase,
	FaMobileAlt,
} from "react-icons/fa";

const skillsData = [
	{
		icon: <FaBrain size={32} />,
		title: "Machine Learning",
		description:
			"Experience with neural networks, model optimization, and advanced architectures using Tensorflow.",
	},
	{
		icon: <FaProjectDiagram size={32} />,
		title: "Data Science",
		description:
			"Managing end-to-end data projects: data collection, preprocessing, modeling, and deployment.",
	},
	{
		icon: <FaChartBar size={32} />,
		title: "Business Intelligence",
		description:
			"Building dashboards, customer segmentation, and data-driven decision support systems.",
	},
	{
		icon: <FaCode size={32} />,
		title: "Web Development",
		description:
			"Building full-stack applications with React & Next.js for the frontend, Laravel & SQL for the backend and APIs integration.",
	},
	{
		icon: <FaDatabase size={32} />,
		title: "Database Management & Design",
		description:
			"Designing efficient database schemas and proficient in using various DBMS tools for data management.",
	},
	{
		icon: <FaMobileAlt size={32} />,
		title: "Mobile App Development",
		description:
			"Creating cross-platform mobile applications using Flutter, integrated with robust database solutions and RESTful APIs.",
	},
];

const TechnicalSkills: React.FC = () => {
	return (
		<section
			id="skills"
			className="py-20">
			<div className="container mx-auto px-4">
				<SectionTitle title="Technical Skills" />
				<div className="mt-12 backdrop-blur-sm bg-white/5 p-8 rounded-lg border border-white/10">
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{skillsData.map((skill, index) => (
							<div
								key={index}
								className="flex gap-4">
								<div className="text-glow-pink mt-1">{skill.icon}</div>
								<div>
									<h3 className="font-bold text-white mb-2">{skill.title}</h3>
									<p className="text-gray-400 text-sm">{skill.description}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default TechnicalSkills;
