import { Col, Row, Space, Divider, Button, Flex } from "antd";
import Image from "next/image";
import { FolderUp, BookCopy, BookOpenCheck } from "lucide-react";

const Home = () => {
    return (
        <Row justify="center" align="middle" style={{ marginBottom: "100px" }}>
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
                <h1 style={{ textAlign: "center", marginTop: "80px" }}>
                    AI{" "}
                    <span style={{ color: "var(--main-blue)" }}>learning</span>
                </h1>
                <h1
                    style={{
                        textAlign: "center",
                        marginTop: "-20px",
                    }}
                >
                    assistant.
                </h1>

                <h3 style={{ marginTop: "20px" }}>📝 Flashcards to Study</h3>

                <h3 style={{ marginTop: "100px" }}>
                    Upload MP4, PDF, or Hand-Written to Get Started
                </h3>
                <Button
                    className="button-default"
                    style={{ marginTop: "20px" }}
                    type="null"
                >
                    Upload File
                </Button>

                <h2 style={{ marginTop: "150px" }}>Instructions</h2>
                <Flex
                    justify="center"
                    align="space-between"
                    style={{ marginTop: "30px" }}
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
                            Our AI Tool will use your uploaded files to create a
                            personalized summary, flashcards, and quiz
                        </p>
                    </Col>
                    <Col
                        justify="center"
                        align="middle"
                        span={6}
                        style={{ marginLeft: "20px" }}
                    >
                        <BookOpenCheck size={30} color="#3b82f6" />
                        <h3 style={{ marginTop: "10px" }}>Export and Study</h3>
                        <p
                            style={{
                                marginRight: "10px",
                                marginLeft: "10px",
                                marginTop: "15px",
                            }}
                        >
                            Study using the material and share it with peers.
                            Instead, make it public to
                        </p>
                    </Col>
                </Flex>
            </Col>
        </Row>
    );
};

export default Home;
