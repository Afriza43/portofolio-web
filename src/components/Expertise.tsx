// src/components/Expertise.tsx

"use client";

import React from "react";
import SectionTitle from "./SectionTitle";
import { FaPython, FaReact, FaLaravel, FaDatabase } from "react-icons/fa";
import {
	SiNextdotjs,
	SiTensorflow,
	SiTableau,
	SiFlutter,
} from "react-icons/si";

const skills = [
	{ name: "Python", icon: <FaPython size={40} /> },
	{ name: "TensorFlow", icon: <SiTensorflow size={40} /> },
	{ name: "Tableau", icon: <SiTableau size={40} /> },
	{ name: "SQL & Databases", icon: <FaDatabase size={40} /> },
	{ name: "React", icon: <FaReact size={40} /> },
	{ name: "Next.js", icon: <SiNextdotjs size={40} /> },
	{ name: "Laravel", icon: <FaLaravel size={40} /> },
	{ name: "Flutter", icon: <SiFlutter size={40} /> },
];

const Expertise: React.FC = () => {
	return (
		<section
			id="expertise"
			className="py-20">
			<div className="container mx-auto px-4 text-center max-w-4xl">
				<SectionTitle title="Tools and Programming Languages" />
				<p className="mt-6 text-lg text-gray-300 leading-relaxed">
					Here are some core tools and programming languages that I use to
					develop software, data analysis, and machine learning applications.
				</p>
				<div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
					{skills.map((skill, index) => (
						<div
							key={index}
							className="flex flex-col items-center justify-center p-6 bg-primary-dark/50 rounded-lg border border-gray-700 hover:border-glow-indigo hover:scale-105 transition-transform duration-300">
							<div className="text-glow-pink mb-3">{skill.icon}</div>
							<h3 className="font-semibold text-gray-200">{skill.name}</h3>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Expertise;
