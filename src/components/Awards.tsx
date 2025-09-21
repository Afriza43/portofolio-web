// src/components/Awards.tsx

import React from "react";
import Image from "next/image";
import SectionTitle from "./SectionTitle";
import { awardsData } from "@/data/award";

const Awards: React.FC = () => {
	return (
		<section
			id="awards"
			className="py-20">
			<div className="container mx-auto px-4">
				<SectionTitle title="Penghargaan & Sertifikasi" />
				<div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{awardsData.map((award) => (
						<div
							key={award.id}
							className="backdrop-blur-sm bg-white/5 p-6 rounded-lg border border-white/10 text-center transform hover:-translate-y-2 transition-transform duration-300">
							<div className="relative w-full h-48 mb-4 rounded-md overflow-hidden">
								<Image
									src={award.imageUrl}
									alt={award.title}
									layout="fill"
									objectFit="cover"
								/>
							</div>
							<h3 className="text-xl font-bold text-white">{award.title}</h3>
							<p className="text-gray-400">{award.issuer}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Awards;
