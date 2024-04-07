import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function Summary({ data }) {
    return (
        <div>
            <ReactMarkdown children={data} remarkPlugins={[remarkGfm]} />
        </div>
    );
}
