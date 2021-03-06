import React from "react";
import TextareaAutosize from "react-textarea-autosize";
import NewAnswerIcon from "../NewIcon/NewIcon";
import Button from "../Button/Button";
import Answer from "./Answer";
import "./quiz.css";
import "fontsource-roboto";

export default function Question(props) {
	const [question, setQuestion] = React.useState(props.question || "");

	const quizAnswersList = props.answers.map(answer => {
		return (
			<Answer
				key={answer.id}
				id={answer.id}
				quiz_card_id={props.quiz_card_id}
				quiz_question_id={props.id}
				answer={answer}
				activity={props.activity}
				onAnswer={props.onAnswer}
				onResponse={props.onResponse}
				session={props.session}
				user={props.user}
				lecturer={props.lecturer}
			/>
		);
	});

	quizAnswersList.sort((a, b) => {
		return Number(a.key) > Number(b.key) ? 1 : -1;
	});

	return (
		<div>
			<div className={"quiz-question"}>
				{props.lecturer === props.user && (
					<Button
						className="quiz-delete"
						onClick={() => props.onQuestion.deleteQuizQuestion(props.id)}
					>
						delete
					</Button>
				)}
				<TextareaAutosize
					className="quiz-question"
					placeholder="Enter quiz question"
					test_id="quiz-question"
					value={question}
					onChange={event => {
						setQuestion(event.target.value);
						props.onQuestion.editQuizQuestion(props.id, event.target.value);
					}}
					readOnly={props.lecturer !== props.user}
				/>
			</div>

			{quizAnswersList}
			{props.lecturer === props.user && (
				<NewAnswerIcon
					onNew={() => props.onAnswer.newQuizAnswer(props.id, null, false)}
				/>
			)}
		</div>
	);
}
