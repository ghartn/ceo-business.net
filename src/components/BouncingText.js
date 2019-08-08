import React from "react";

const BouncingText = ({ children, ...rest }) => {
	const sentence = String(children).split(" ");
	return (
		<p {...rest}>
			{sentence.map((word, index) =>
				_renderBouncingWord(
					index === sentence.length - 1 ? word : String(word).concat(" ")
				)
			)}
		</p>
	);
};

const _renderBouncingWord = word => {
	return String(word)
		.split("")
		.map((letter, index) => (
			<span
				key={letter + index}
				className={"bounce-me"}
				style={{
					display: "inline-block",
					animationDelay: `${index * 80}ms`
				}}
			>
				{letter === " " ? <span>&nbsp;</span> : letter}
			</span>
		));
};

export default BouncingText;
