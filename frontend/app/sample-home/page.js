import { Col, Row, Space, Divider, Button } from "antd";

const Home = () => {
    return (
        <Row justify="center" align="middle">
            <Col
                xs={24}
                sm={18}
                md={10}
                lg={10}
                xl={10}
                xxl={10}
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

                <h3 style={{ marginTop: "60px" }}>
                    Upload MP4, PDF, or Hand-Written to Get Started
                </h3>
                <Button
                    className="button-default"
                    style={{ marginTop: "20px" }}
                    type="null"
                >
                    Upload File
                </Button>
            </Col>
        </Row>
    );
};

export default Home;
