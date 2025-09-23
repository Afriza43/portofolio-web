"use client";

import React from "react";
import { FaLock, FaArrowLeft } from "react-icons/fa";
import Link from "next/link";
import FadeInSection from "@/components/FadeInSection";

const PrivateProjectPage: React.FC = () => {
	return (
		<div className="container mx-auto px-6 lg:px-8 max-w-4xl py-24 sm:py-32">
			<FadeInSection>
				{/* Kartu Kaca Utama */}
				<div className="backdrop-blur-lg bg-white/5 p-8 sm:p-12 rounded-2xl border border-white/10 text-center">
					{/* Ikon */}
					<div className="flex justify-center mb-6">
						<div className="p-4 bg-glow-pink/20 rounded-full">
							<FaLock
								size={40}
								className="text-glow-pink"
							/>
						</div>
					</div>

					{/* Judul dan Penjelasan */}
					<h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
						This Project is Confidential
					</h1>
					<p className="text-gray-300 max-w-2xl mx-auto">
						Due to a Non-Disclosure Agreement (NDA) or the inclusion of
						sensitive company data, the source code and live demo for this
						project cannot be shared publicly.
					</p>
					<p className="text-gray-300 max-w-2xl mx-auto mt-2">
						However, I can share the key details of my contribution.
					</p>

					{/* Garis Pemisah */}
					<div className="my-8 border-t border-white/10"></div>

					{/* Detail Proyek */}
					<div className="text-left grid grid-cols-1 md:grid-cols-2 gap-8">
						<div>
							<h3 className="font-semibold text-white text-lg mb-2">My Role</h3>
							<p className="text-gray-400">
								[Software Engineer, Software Developer]
							</p>
						</div>
						<div>
							<h3 className="font-semibold text-white text-lg mb-2">
								Core Technologies and Tools
							</h3>
							<p className="text-gray-400">
								[Python (Flask), React.js, Machine Learning, Plotly, Dataiku]
							</p>
						</div>
						<div className="md:col-span-2">
							<h3 className="font-semibold text-white text-lg mb-2">
								Key Achievements & Responsibilities
							</h3>
							<ul className="list-disc list-inside text-gray-400 space-y-2">
								<li>
									Develop a ML-integrated system to increase the speed of log
									quality and interpretation analysis.
								</li>
								<li>
									Built interactive log plotting dashboards to visualize many
									well conditions across depth.
								</li>
								<li>
									Designed and implemented a scalable data storage system on the
									Dataiku platform.
								</li>
							</ul>
						</div>
					</div>

					{/* Tombol Aksi */}
					<div className="mt-10">
						<Link
							href="/"
							className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-glow-pink transition-colors">
							<FaArrowLeft />
							Back to Portfolio
						</Link>
					</div>
				</div>
			</FadeInSection>
		</div>
	);
};

export default PrivateProjectPage;
