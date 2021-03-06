import React from "react";
import confusedEmoji from "./question_mark.png";
import "./ConfusedEmoji.css";

function ConfusedEmoji(props) {
	return (
		<div>
			<img
				className="confused-emoji"
				src={confusedEmoji}
				alt={"confused emoji"}
				onClick={props.onClick}
			/>
		</div>
	);
}

export default ConfusedEmoji;
