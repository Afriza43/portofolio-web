import React from "react";

interface ButtonProps {
	text: string;
}

const Button: React.FC<ButtonProps> = ({ text }) => {
	return (
		<button className="mt-8 bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded">
			{text}
		</button>
	);
};

export default Button;
