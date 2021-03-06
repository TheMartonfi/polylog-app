import React from "react";
import { ReactComponent as QuizIcon } from "./done_all-24px.svg";
import Question from "./Question";
import Message from "./Message";
import Button from "../Button/Button";

export default function Card(props) {
	const quizQuestionsList = props.questions.map(question => {
		return (
			<Question
				key={question.id}
				id={question.id}
				question={question.question}
				answers={question.answers}
				session={props.session}
			/>
		);
	});

	return (
		<section>
			<QuizIcon />
			{quizQuestionsList}
			{props.session && <Message />}
			{props.session && <Button variant="submit">SUBMIT</Button>}
		</section>
	);
}
