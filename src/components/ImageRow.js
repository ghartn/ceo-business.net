import React from "react";

const ImageRow = ({
	imgSrc,
	imgAlt,
	imgClassName,
	howMany,
	spacing,
	...rest
}) => {
	let row = [];
	for (let i = 0; i < howMany; i++) {
		row.push(
			<img
				key={i}
				src={imgSrc}
				alt={imgAlt}
				className={`${imgClassName} ${`mr-${spacing}`}`}
			/>
		);
	}
	return <div {...rest}>{row}</div>;
};

export default ImageRow;
