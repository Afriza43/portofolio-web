// src/components/TechnicalSkills.tsx

import React from "react";
import SectionTitle from "./SectionTitle";
import {
	FaBrain,
	FaProjectDiagram,
	FaPython,
	FaCloud,
	FaChartBar,
	FaCode,
} from "react-icons/fa";

const skillsData = [
	{
		icon: <FaBrain size={32} />,
		title: "TensorFlow & Deep Learning",
		description:
			"Experience with neural networks, model optimization, and advanced architectures (CNN, RNN, GANs).",
	},
	{
		icon: <FaProjectDiagram size={32} />,
		title: "Data Science Project Management",
		description:
			"Managing end-to-end data projects: data collection, preprocessing, modeling, and deployment.",
	},
	{
		icon: <FaPython size={32} />,
		title: "Python for Data Analysis",
		description:
			"Proficient in Pandas, NumPy, Matplotlib, and Streamlit for EDA and interactive dashboards.",
	},
	{
		icon: <FaCloud size={32} />,
		title: "Big Data & Cloud Computing",
		description:
			"Skilled in PySpark, Google Cloud Platform, and deploying scalable machine learning solutions.",
	},
	{
		icon: <FaChartBar size={32} />,
		title: "Business Intelligence",
		description:
			"Building dashboards, customer segmentation, and data-driven decision support systems.",
	},
	{
		icon: <FaCode size={32} />,
		title: "Software Development",
		description:
			"Developing web applications with HTML, CSS, JavaScript, and integrating APIs for data-driven apps.",
	},
];

const TechnicalSkills: React.FC = () => {
	return (
		<section
			id="technical-skills"
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
