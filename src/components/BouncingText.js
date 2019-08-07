import React from "react";

const BouncingText = ({ children, ...rest }) => {
	return (
		<p {...rest}>
			{String(children)
				.split("")
				.map((letter, index) => (
					<span
						key={index}
						className={"bounce-me"}
						style={{
							display: "inline-block",
							animationDelay: `${index * 100}ms`
						}}
					>
						{letter === " " ? <span>&nbsp;</span> : letter}
					</span>
				))}
		</p>
	);
};

export default BouncingText;
