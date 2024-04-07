import { Col, Row } from "antd";
import Link from "next/link";

export default function Footer() {
    return (
        <>
            <Row
                justify="space-around"
                align="middle"
                style={{
                    backgroundColor: "var(--main-dark)",
                    height: "120px",
                    width: "100%",
                }}
            >
                <Col>
                    <h3
                        style={{
                            fontSize: "28px",
                            color: "var(--main-white)",
                            cursor: "pointer",
                        }}
                    >
                        StudyShore.
                    </h3>
                </Col>
                <Col>
                    <Col>
                        <p
                            style={{
                                color: "var(--main-white)",
                                textAlign: "center",
                            }}
                        >
                            Copyright © 2024 StudyShore.
                        </p>
                        <p
                            style={{
                                color: "var(--main-white)",
                                textAlign: "center",
                                marginTop: "12px",
                            }}
                        >
                            DiamondHack 2024 ⊙ UCSD
                        </p>
                    </Col>
                </Col>
                <Col>
                    <h3
                        style={{
                            color: "var(--main-white)",
                        }}
                    >
                        Company
                    </h3>
                    <Row
                        justify="space-between"
                        align="middle"
                        style={{ marginTop: "12px" }}
                    >
                        <Link href="/about" passHref>
                            <p
                                style={{
                                    color: "var(--main-white)",
                                }}
                            >
                                About
                            </p>
                        </Link>
                        <Link href="/" passHref>
                            <p
                                style={{
                                    color: "var(--main-white)",
                                }}
                            >
                                Video
                            </p>
                        </Link>
                    </Row>
                </Col>
            </Row>
        </>
    );
}
