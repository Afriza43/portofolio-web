// src/components/Contact.tsx

import React from "react";
import SectionTitle from "./SectionTitle";

const Contact: React.FC = () => {
	return (
		<section
			id="contact"
			className="py-20">
			<div className="container mx-auto px-4 max-w-2xl text-center">
				<SectionTitle title="Get In Touch" />
				<p className="mt-4 text-gray-400">
					Have a question or want to collaborate? Feel free to reach out.
				</p>

				<div className="mt-10 backdrop-blur-sm bg-white/5 p-8 rounded-lg border border-white/10">
					<form
						action="https://formspree.io/f/xyzngkoe"
						method="POST">
						<div className="mb-4 text-left">
							<label
								htmlFor="name"
								className="block mb-2 text-sm font-medium">
								Name
							</label>
							<input
								type="text"
								id="name"
								name="name"
								required
								className="w-full p-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:ring-glow-indigo focus:border-glow-indigo"
							/>
						</div>
						<div className="mb-4 text-left">
							<label
								htmlFor="email"
								className="block mb-2 text-sm font-medium">
								Email
							</label>
							<input
								type="email"
								id="email"
								name="email"
								required
								className="w-full p-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:ring-glow-indigo focus:border-glow-indigo"
							/>
						</div>
						<div className="mb-6 text-left">
							<label
								htmlFor="message"
								className="block mb-2 text-sm font-medium">
								Message
							</label>
							<textarea
								id="message"
								name="message"
								rows={5}
								required
								className="w-full p-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:ring-glow-indigo focus:border-glow-indigo"></textarea>
						</div>
						<button
							type="submit"
							className="rounded-md bg-glow-indigo px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 transition-colors">
							Send Message
						</button>
					</form>
				</div>
			</div>
		</section>
	);
};

export default Contact;
