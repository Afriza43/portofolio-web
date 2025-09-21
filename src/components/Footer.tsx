// src/components/Footer.tsx

import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer: React.FC = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="py-12 border-t border-white/10">
			<div className="container mx-auto px-4 text-center text-gray-400">
				<div className="flex justify-center space-x-6 mb-4">
					<a
						href="https://github.com/Afriza43"
						target="_blank"
						rel="noopener noreferrer"
						className="hover:text-white transition-colors">
						<FaGithub size={24} />
					</a>
					<a
						href="https://www.linkedin.com/in/afrizaandhana8/"
						target="_blank"
						rel="noopener noreferrer"
						className="hover:text-white transition-colors">
						<FaLinkedin size={24} />
					</a>
					<a
						href="mailto:emailanda@example.com"
						className="hover:text-white transition-colors">
						<FaEnvelope size={24} />
					</a>
				</div>
				<p>
					&copy; {currentYear} Afriza Meidio Andhana. Build with Next.js and
					React
				</p>
			</div>
		</footer>
	);
};

export default Footer;
