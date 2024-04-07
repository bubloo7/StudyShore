"use client";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Loading from "../../components/Loading";
import Selector from "../../components/Selector";
import Summary from "../../components/Summary";
import FlashCards from "../../components/FlashCards";
import Quiz from "../../components/Quiz";
import { Row, Col } from "antd";
import ExportButton from "@/components/ExportButton";

const api_server = "http://localhost:5000/";

export default function Page() {
    const path_name = usePathname();
    const id = path_name.substring(1, path_name.length);

    const [loading, setLoading] = useState(true);
    const [data, setData] = useState({});
    const [selected, setSelected] = useState(0);

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
                setLoading(false);
                console.log("RESPONSE:", response);
            });
    }, [id]);

    if (loading) {
        return <Loading />;
    } else {
        return (
            <>
                <Row
                    justify="center"
                    align="middle"
                    style={{
                        marginTop: "184px",
                        marginBottom: "120px",
                    }}
                >
                    <Col
                        xs={24}
                        sm={24}
                        md={24}
                        lg={24}
                        xl={24}
                        xxl={24}
                        justify="center"
                        align="middle"
                    >
                        <h1
                            style={{
                                fontSize: "48px",
                                color: "var(--main-blue)",
                            }}
                        >
                            Study{" "}
                            <span style={{ color: "var(--main-dark)" }}>
                                Material
                            </span>
                        </h1>
                        <h3 style={{ marginTop: "20px" }}>{data.title}</h3>

                        <ExportButton data={data} selected={selected} />

                        <Row
                            justify="center"
                            align="middle"
                            style={{ marginTop: "60px", marginBottom: "60px" }}
                        >
                            <Selector
                                selected={selected}
                                setSelected={setSelected}
                            />
                        </Row>

                        {selected == 0 ? (
                            <Summary data={data["summary"]} />
                        ) : selected == 1 ? (
                            <FlashCards data={data["flash_cards"]} />
                        ) : (
                            <Quiz data={data["quiz"]} />
                        )}
                    </Col>
                </Row>
            </>
        );
    }
}
