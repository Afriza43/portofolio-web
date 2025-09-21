// src/app/page.tsx

import Hero from "@/components/Hero";
import About from "@/components/About";
import Expertise from "@/components/Expertise";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import TechnicalSkills from "@/components/TechnicalSkills";
import FadeInSection from "@/components/FadeInSection";
import Awards from "@/components/Awards";

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
				<Awards />
			</FadeInSection>
			<FadeInSection>
				<Contact />
			</FadeInSection>
		</div>
	);
}
