import React from "react";

interface SectionTitleProps {
	title: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {
	return <h2 className="text-4xl font-bold text-center mb-12">{title}</h2>;
};

export default SectionTitle;
