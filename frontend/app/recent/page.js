"use client"
import { useState, useEffect } from "react";
export default function recent() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/recent")
            .then((response) => response.json())
            .then((result) => setData(result["recent"]));
    }, []);

    return data.map((val, ind) => (
        <div
            key={ind}
            style={{}}
            onClick={() => {
                window.location.href = "/" + val.id;
            }}
        >
            {val.title}
        </div>
    ));
}
