import Question from "./Question";
import { useState, useEffect } from "react";

export default function Quiz(props) {
    const [selectedAnswer, setSelectedAnswer] = useState(Array(props.data.length).fill(-1));
    const [submitted, setSubmitted] = useState(false);
    const [grade, setGrade] = useState("");

    useEffect(() => {
        let correct = 0;
        for (let i = 0; i < props.data.length; i++) {
            if (props.data[i]["index"] === selectedAnswer[i]) {
                correct += 1;
            }
        }
        let percentage = Math.round((correct * 100) / props.data.length);
        setGrade(percentage + "%");
    }, [submitted]);
    return (
        <div>
            {props.data.map((val, i) => (
                <Question
                    key={i}
                    question={val.question}
                    possible_answers={val.possible_answers}
                    index={i}
                    selectedAnswer={selectedAnswer}
                    setSelectedAnswer={setSelectedAnswer}
                    submitted={submitted}
                    answer={val["index"]}
                />
            ))}
            <button
                style={{ fontSize: "33px" }}
                onClick={() => {
                    setSubmitted(true);
                }}
            >
                Submit
            </button>

            {submitted ? <div>Grade: {grade} </div> : <div></div>}
        </div>
    );
}
