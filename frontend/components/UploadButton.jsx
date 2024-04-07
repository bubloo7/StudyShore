"use client"
import { Button, Input } from "antd";

const UploadButton = () => {
    return (
        <Button
            className="button-default"
            type="null"
        >
            <label htmlFor="file-upload" className="custom-file-upload">
                Upload File
            </label>
            <Input
                id="file-upload"
                type="file"
                onChange={async (event) => {
                    const file = event.target.files[0];
                    console.log("uploaded", file);
                    const formData = new FormData();
                    formData.append("file", file);
                    const response = await fetch(
                        "http://localhost:5000/upload",
                        {
                            method: "POST",
                            body: formData,
                        }
                    );
                    const response_json = await response.json();
                    console.log("response:", response_json.data);
                    window.location.href = "/" + response_json.id;
                }}
            />
        </Button>
    );
};

export default UploadButton;
