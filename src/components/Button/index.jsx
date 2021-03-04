import React from "react";

function Button({ className, text, handleClick, disabled }) {
	return (
		<button className={className} onClick={handleClick} disabled={disabled}>
			{text}
		</button>
	);
}

export { Button };
