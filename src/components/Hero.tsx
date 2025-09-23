// src/components/Hero.tsx

"use client";

import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { FaLinkedin } from "react-icons/fa";

const Hero: React.FC = () => {
	return (
		<div
			className="mx-auto px-6 lg:px-8 flex items-center"
			style={{ minHeight: "80vh" }}>
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
				<div className="text-center lg:text-left">
					<p className="text-lg text-gray-400">Hello, My Name is</p>
					<h1 className="text-8xl font-bold tracking-tight text-white sm:text-7xl">
						Afriza Meidio Andhana
					</h1>
					<div className="mt-6 text-2xl md:text-3xl text-gray-300">
						I am a{" "}
						<TypeAnimation
							sequence={[
								"Tech Enthusiast.",
								2000,
								"ML Engineer.",
								2000,
								"Data Scientist.",
								2000,
								"Software Engineer.",
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
							href="https://www.linkedin.com/in/afrizaandhana8"
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center gap-x-3 rounded-md bg-linkedin-blue px-5 py-3 text-base font-semibold text-white shadow-lg hover:bg-blue-700 transition-all duration-300 ease-in-out transform hover:scale-105">
							<FaLinkedin size={20} />
							LinkedIn
						</a>
						<a
							href="#projects"
							className="text-base font-semibold leading-6 text-white group transition-all duration-300 ease-in-out">
							<span className="bg-left-bottom bg-gradient-to-r from-glow-pink to-glow-pink bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out pb-2">
								View Projects
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
						className="w-64 h-64 md:w-80 md:h-80 relative rounded-full shadow-glow-purple border-2 border-white/10 overflow-hidden 
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
