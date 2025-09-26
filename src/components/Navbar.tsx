import React from "react";
import { FaFilePdf } from "react-icons/fa"; // 1. Import the icon

const Navbar: React.FC = () => {
	const navLinks = [
		"About",
		"Expertise",
		"Skills",
		"Projects",
		"Training",
		"Achievements",
		"Contact",
	];

	return (
		<header className="fixed inset-x-0 top-0 z-50 backdrop-blur-sm bg-primary-dark/30">
			<nav className="container mx-auto flex items-center justify-between p-6 lg:px-8 max-w-7xl">
				<div className="flex lg:flex-1">
					<a
						href="#"
						className="text-xl font-bold">
						Afriza M.A.
					</a>
				</div>
				<ul className="hidden lg:flex lg:gap-x-12">
					{navLinks.map((item) => (
						<li key={item}>
							<a
								href={`#${item.toLowerCase()}`}
								className="text-sm font-semibold leading-6 relative group pb-2">
								{item}
								<span className="absolute bottom-0 left-0 w-full h-0.5 bg-glow-pink scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"></span>
							</a>
						</li>
					))}
				</ul>
				{/* 2. Add the CV button here */}
				<div className="hidden lg:flex lg:flex-1 lg:justify-end">
					<a
						href="https://drive.google.com/file/d/1Y8kI5j1I3wxiZ_rqmdYsFuXcUCyPzdWg/view?usp=sharing"
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center gap-x-2 rounded-md border border-glow-black/50 px-4 py-2 text-sm font-semibold text-glow-white transition-colors duration-300 hover:bg-glow-pink hover:text-primary-dark ">
						<FaFilePdf />
						CV
					</a>
				</div>
			</nav>
		</header>
	);
};

export default Navbar;
