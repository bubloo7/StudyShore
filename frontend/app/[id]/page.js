"use client";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const api_server = "http://localhost:5000/";

export default function Page() {
    const path_name = usePathname();
    const id = path_name.substring(1, path_name.length);

    const [data, setData] = useState({});

    useEffect(() => {
        fetch(api_server + "/fetch_id", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ id }),
        })
            .then((res) => res.json())
            .then((response) => {
                setData(response);
                console.log("RESPONSE:", response);
            });
    }, [id]);
    return <div>{JSON.stringify(data)}</div>;
}
