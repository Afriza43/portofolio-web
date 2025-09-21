// src/app/layout.tsx

import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
	title: "Portofolio Afriza Meidio",
	description: "Portfolio website built with Next.js and Tailwind CSS",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`bg-primary-dark text-gray-200`}>
				<div
					aria-hidden="true"
					className="fixed inset-0 -z-10 transform-gpu overflow-hidden blur-3xl">
					<div
						style={{
							clipPath:
								"polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
						}}
						className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-glow-pink to-glow-indigo opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
					/>
				</div>

				<Navbar />
				<main className="pt-24">{children}</main>
				<Footer />
			</body>
		</html>
	);
}
