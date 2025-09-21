// src/components/Expertise.tsx

"use client";

import React from "react";
import SectionTitle from "./SectionTitle";
// Impor ikon dari react-icons
import { FaPython, FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";
import { SiNextdotjs, SiTensorflow, SiPandas } from "react-icons/si";

// Data keahlian kita
const skills = [
	{ name: "Python", icon: <FaPython size={40} /> },
	{ name: "React", icon: <FaReact size={40} /> },
	{ name: "Next.js", icon: <SiNextdotjs size={40} /> },
	{ name: "Node.js", icon: <FaNodeJs size={40} /> },
	{ name: "TensorFlow", icon: <SiTensorflow size={40} /> },
	{ name: "Pandas & NumPy", icon: <SiPandas size={40} /> },
	{ name: "SQL & Databases", icon: <FaDatabase size={40} /> },
	// Tambahkan skill lain di sini
];

const Expertise: React.FC = () => {
	return (
		<section
			id="expertise"
			className="py-20">
			<div className="container mx-auto px-4 text-center max-w-4xl">
				<SectionTitle title="My Expertise" />
				<p className="mt-6 text-lg text-gray-300 leading-relaxed">
					Saya fokus mengubah data menjadi wawasan. Berikut adalah beberapa
					kompetensi inti dan teknologi yang saya kuasai.
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
