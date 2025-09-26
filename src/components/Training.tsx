// src/components/Training.tsx

import React from "react";
import Image from "next/image";
import SectionTitle from "./SectionTitle";
import { trainingData } from "../data/training";

const Training: React.FC = () => {
	return (
		<section
			id="training"
			className="py-20">
			<div className="container mx-auto px-4">
				<SectionTitle title="Training & Certification" />
				<div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{trainingData.map((training) => (
						<a
							key={training.id}
							href={training.fileUrl}
							target="_blank"
							rel="noopener noreferrer"
							className="block backdrop-blur-sm bg-white/5 rounded-lg border border-white/10 overflow-hidden group transform hover:-translate-y-2 transition-transform duration-300">
							<div className="relative w-full h-48">
								<Image
									src={training.thumbnailUrl}
									alt={`Thumbnail for ${training.title}`}
									layout="fill"
									objectFit="cover"
									className="group-hover:scale-105 transition-transform duration-300"
								/>
							</div>
							<div className="p-4 text-center">
								<h3 className="text-lg font-bold text-white">
									{training.title}
								</h3>
								<h4 className="text-sm text-gray-400">{training.issuer}</h4>
								{training.description && (
									<p className="mt-2 text-gray-100 text-sm">
										{training.description}
									</p>
								)}
							</div>
						</a>
					))}
				</div>
			</div>
		</section>
	);
};

export default Training;
