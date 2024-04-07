import { Col, Row, Space, Flex } from "antd";
import Image from "next/image";
import { FolderUp, BookCopy, BookOpenCheck } from "lucide-react";
import BlueBlur from "@/public/images/blue-blur.svg";
import PurpleBlur from "@/public/images/purp-blur.svg";
import CustomTypewriter from "@/components/CustomTypewriter";
import UploadButton from "@/components/UploadButton";

const api_server = "http://localhost:5000/";

const Home = () => {
    async function onUploadButtonClick() {
        fetch(api_server + "/upload");
    }

    return (
        <>
            <Row
                justify="center"
                align="middle"
                style={{
                    marginTop: "84px",
                    marginBottom: "120px",
                }}
            >
                <div className="circular-blue"></div>
                <div className="circular-purple"></div>

                <Col
                    xs={24}
                    sm={20}
                    md={20}
                    lg={20}
                    xl={20}
                    xxl={20}
                    justify="center"
                    align="middle"
                >
                    <h1 style={{ textAlign: "center", marginTop: "100px" }}>
                        AI{" "}
                        <span style={{ color: "var(--main-blue)" }}>
                            learning
                        </span>
                    </h1>
                    <h1
                        style={{
                            textAlign: "center",
                            marginTop: "-16px",
                        }}
                    >
                        assistant.
                    </h1>

                    <h3 style={{ marginTop: "20px" }}>
                        <CustomTypewriter />
                    </h3>

                    <h3 style={{ marginTop: "100px", marginBottom: "20px" }}>
                        Upload MP4, PDF, or Hand-Written to Get Started
                    </h3>
                    <UploadButton />

                    <h2 style={{ marginTop: "120px" }}>Instructions</h2>
                    <Flex
                        justify="center"
                        align="space-between"
                        style={{ marginTop: "40px" }}
                        gap="large"
                    >
                        <Col
                            justify="center"
                            align="middle"
                            span={6}
                            style={{ marginRight: "20px" }}
                        >
                            <FolderUp size={30} color="#3b82f6" />
                            <h3 style={{ marginTop: "10px" }}>Upload File</h3>
                            <p
                                style={{
                                    marginRight: "10px",
                                    marginLeft: "10px",
                                    marginTop: "15px",
                                }}
                            >
                                Upload a video (MP4) or a PDF document of your
                                lecture slides, personal notes, lecture notes
                            </p>
                        </Col>
                        <Col
                            justify="center"
                            align="middle"
                            span={6}
                            style={{
                                marginRight: "20px",
                                marginLeft: "20px",
                            }}
                        >
                            <BookCopy size={30} color="#3b82f6" />
                            <h3 style={{ marginTop: "10px" }}>
                                Get Customized Study Tools
                            </h3>
                            <p
                                style={{
                                    marginRight: "10px",
                                    marginLeft: "10px",
                                    marginTop: "15px",
                                }}
                            >
                                Our AI Tool will use your uploaded files to
                                create a personalized summary, flashcards, and
                                quiz
                            </p>
                        </Col>
                        <Col
                            justify="center"
                            align="middle"
                            span={6}
                            style={{ marginLeft: "20px" }}
                        >
                            <BookOpenCheck size={30} color="#3b82f6" />
                            <h3 style={{ marginTop: "10px" }}>
                                Export and Study
                            </h3>
                            <p
                                style={{
                                    marginRight: "10px",
                                    marginLeft: "10px",
                                    marginTop: "15px",
                                }}
                            >
                                Study using the material and share it with
                                peers. Instead, also make it publicly avaliable.
                            </p>
                        </Col>
                    </Flex>
                </Col>
            </Row>
        </>
    );
};

export default Home;
