// src/components/FadeInSection.tsx

"use client";

import React, { ReactNode } from "react";
import { useInView } from "react-intersection-observer";

interface Props {
	children: ReactNode;
}

const FadeInSection: React.FC<Props> = ({ children }) => {
	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0.1,
	});

	return (
		<div
			ref={ref}
			className={`transition-all duration-1000 ease-in-out transform ${
				inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
			}`}>
			{children}
		</div>
	);
};

export default FadeInSection;
