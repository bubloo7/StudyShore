"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import Image from "next/image";
const api_server = "http://localhost:5000/";

export default function Home() {
    async function onUploadButtonClick() {
        fetch(api_server + "/upload");
    }
    return (
        <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="picture">Drag and Drop Upload</Label>
            <Input
                id="picture"
                type="file"
                onChange={async (event) => {
                    const file = event.target.files[0];
                    console.log("uploaded", file);
                    const formData = new FormData();
                    formData.append("file", file);
                    const response = await fetch("http://localhost:5000/upload", {
                        method: "POST",
                        body: formData,
                    });
                    console.log("response:", await response.json());
                }}
            />
        </div>
    );
}
