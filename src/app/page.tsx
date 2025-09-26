// src/app/page.tsx

import Hero from "@/components/Hero";
import About from "@/components/About";
import Expertise from "@/components/Expertise";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import TechnicalSkills from "@/components/TechnicalSkills";
import FadeInSection from "@/components/FadeInSection";
import Achievements from "@/components/Achievements";
import Training from "@/components/Training";

export default function Home() {
	return (
		<div className="container mx-auto px-6 lg:px-8 max-w-7xl">
			<FadeInSection>
				<Hero />
			</FadeInSection>
			<FadeInSection>
				<About />
			</FadeInSection>
			<FadeInSection>
				<Expertise />
			</FadeInSection>
			<FadeInSection>
				<TechnicalSkills />
			</FadeInSection>
			<FadeInSection>
				<Projects />
			</FadeInSection>
			<FadeInSection>
				<Training />
			</FadeInSection>
			<FadeInSection>
				<Achievements />
			</FadeInSection>
			<FadeInSection>
				<Contact />
			</FadeInSection>
		</div>
	);
}
