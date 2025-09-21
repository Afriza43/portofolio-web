// src/components/Hero.tsx

"use client";

import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const Hero: React.FC = () => {
	return (
		<div
			className="mx-auto px-6 lg:px-8 flex items-center"
			style={{ minHeight: "80vh" }}>
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
				<div className="text-center lg:text-left">
					<p className="text-lg text-gray-400">Halo, nama saya</p>
					<h1 className="text-8xl font-bold tracking-tight text-white sm:text-7xl">
						Afriza Meidio Andhana
					</h1>
					<div className="mt-6 text-2xl md:text-3xl text-gray-300">
						Saya seorang{" "}
						<TypeAnimation
							sequence={[
								"Web Developer.",
								2000,
								"Mahasiswa.",
								2000,
								"Tech Enthusiast.",
								2000,
							]}
							wrapper="span"
							speed={50}
							repeat={Infinity}
							className="text-glow-pink font-bold"
						/>
					</div>
					<div className="mt-10 flex items-center justify-center lg:justify-start gap-x-8">
						<a
							href="#contact"
							className="rounded-md bg-glow-indigo px-5 py-3 text-base font-semibold text-white shadow-lg hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 transition-all duration-300 ease-in-out transform hover:scale-105">
							Hubungi Saya
						</a>
						<a
							href="#projects"
							className="text-base font-semibold leading-6 text-white group transition-all duration-300 ease-in-out">
							<span className="bg-left-bottom bg-gradient-to-r from-glow-pink to-glow-pink bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out pb-2">
								Lihat Proyek
							</span>
							<span
								aria-hidden="true"
								className="ml-2 transition-transform transform group-hover:translate-x-2">
								→
							</span>
						</a>
					</div>
				</div>

				<div className="flex justify-center lg:justify-end">
					<div
						className="w-64 h-64 md:w-80 md:h-80 relative rounded-full shadow-lg shadow-glow-purple border-2 border-white/10 overflow-hidden 
                                  transition-all duration-300 ease-in-out 
                                  hover:scale-[1] hover:border-glow-indigo hover:shadow-glow-indigo cursor-pointer">
						<Image
							src="/image/profile.jpg"
							alt="Foto Profil"
							layout="fill"
							objectFit="cover"
							className="rounded-full object-top"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
