import { useState, useEffect } from "react";

export default function FlashCards(props) {
    const [currentCard, setCurrentCard] = useState(0);
    const [side, setSide] = useState(0);

    useEffect(() => {
        const handleKeyPress = (event) => {
            console.log(event.key);
            event.preventDefault();
            if (event.key === "ArrowLeft") {
                setCurrentCard((prev) => {
                    if (prev === 0) {
                        return prev;
                    }
                    setSide(0);
                    return prev - 1;
                });
            } else if (event.key === "ArrowRight") {
                setCurrentCard((prev) => {
                    if (prev === props.data.length - 1) {
                        return prev;
                    }
                    setSide(0);
                    return prev + 1;
                });
            } else if (event.key === "ArrowUp") {
                setSide((prev) => prev ^ 1);
            } else if (event.key === "ArrowDown") {
                setSide((prev) => prev ^ 1);
            }
        };

        window.addEventListener("keydown", handleKeyPress);

        return () => {
            window.removeEventListener("keydown", handleKeyPress);
        };
    }, []);

    return (
        <div>
            <div
                style={{
                    alignContent: "center",
                    display: "flex",
                    flexDirection: "row",
                }}
            >
                <button
                    onClick={() => {
                        setCurrentCard((prev) => prev - 1);
                        setSide(0);
                    }}
                    disabled={currentCard == 0}
                >
                    LEFT ARROW
                </button>
                <div>{props.data[currentCard][side]} </div>
                <button
                    onClick={() => {
                        setCurrentCard((prev) => prev + 1);
                        setSide(0);
                    }}
                    disabled={currentCard == props.data.length - 1}
                >
                    RIGHT ARROW
                </button>
            </div>
            <button onClick={() => setSide((prev) => prev ^ 1)}>FLIP SIDE</button>
        </div>
    );
}
