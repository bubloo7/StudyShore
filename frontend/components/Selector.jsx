export default function Selector(props) {
    return (
        <div>
            <button
                onClick={() => {
                    props.setSelected(0);
                }}
                style={{
                    color: props.selected == 0 ? "green" : "red",
                    fontSize: 32,
                }}
            >
                Summary
            </button>
            <button
                onClick={() => {
                    props.setSelected(1);
                }}
                style={{
                    color: props.selected == 1 ? "green" : "red",
                    fontSize: 32,
                }}
            >
                Flash Cards
            </button>
            <button
                onClick={() => {
                    props.setSelected(2);
                }}
                style={{
                    color: props.selected == 2 ? "green" : "red",
                    fontSize: 32,
                }}
            >
                Quiz
            </button>
        </div>
    );
}
