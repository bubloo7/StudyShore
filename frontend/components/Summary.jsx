import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function Summary({ data }) {
    return (
        <div
            style={{
                textAlign: "left",
                fontSize: "16px",
                lineHeight: "2.0",
                marginBottom: "30px",
                paddingLeft: "50px",
            }}
        >
            <style>{`
            strong {
                font-size: 24px; /* Adjust the font size as desired */
                font-weight: bold; /* Ensure bold weight */
            }`}</style>
            <ReactMarkdown children={data} />
        </div>
    );
}
