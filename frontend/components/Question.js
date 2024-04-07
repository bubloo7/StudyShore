export default function Question(props) {
    function getColor(submitted, selectedAnswer, answer) {
        if (!submitted) return "black";
        if (selectedAnswer === answer) return "green";
        return "red";
    }
    return (
        <div>
            <div
                style={{
                    fontSize: 20,
                    fontWeight: "bold",
                    color: getColor(props.submitted, props.selectedAnswer[props.index], props.answer),
                }}
            >
                {props.question}
            </div>
            {props.possible_answers.map((value, ind) => {
                return (
                    <div
                        key={(ind + 1) * 3}
                        style={{
                            alignContent: "center",
                            display: "flex",
                            flexDirection: "row",
                        }}
                    >
                        <input
                            key={(ind + 1) * 5}
                            type={"checkbox"}
                            checked={props.selectedAnswer[props.index] === ind}
                            onChange={() => {
                                props.setSelectedAnswer((old) => {
                                    let newAnswer = [...old];
                                    newAnswer[props.index] = newAnswer[props.index] === ind ? -1 : ind;
                                    return newAnswer;
                                });
                            }}
                            disabled={props.submitted}
                        />
                        <div key={(ind + 1) * 7}> {value}</div>
                    </div>
                );
            })}
        </div>
    );
}
