// src/components/About.tsx

import React from "react";
import SectionTitle from "./SectionTitle";

const About: React.FC = () => {
	return (
		<section
			id="about"
			className="py-20">
			<div className="container mx-auto px-4 text-center max-w-4xl">
				<SectionTitle title="About Me" />
				<p className="mt-6 text-lg text-gray-300 leading-relaxed">
					IT Graduate with project experience in developing Machine
					Learning–integrated systems for Well Log Quality Control, Reservoir
					Fluid Interpretation, and Data Management Project at Pertamina Hulu
					Rokan. Recognized as a Bangkit 2024 Distinction Graduate and Top 50
					Capstone Project Awardee among 588 teams, with additional experience
					as a Laboratory Assistant coordinating assistants and teaching 350+
					students across multiple IT disciplines.
				</p>
			</div>
		</section>
	);
};

export default About;
