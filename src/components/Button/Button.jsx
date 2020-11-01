import React from "react";
import "./Button.css";

function Button(props) {
	const { variant = "SIGN UP", children, ...rest } = props;
	return (
		<button className={`button ${variant}`} {...rest} onClick={props.onSubmit}>
			{children}
		</button>
	);
}

export default Button;
