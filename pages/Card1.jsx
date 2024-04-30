import React from "react";
import { Flex, Box, Button, Inset, Text, Separator } from "@radix-ui/themes";

const Card1 = () => {
    return (
        <Flex gap="1" direction="row">
            <Flex gap="0" direction="column" width="600px">
                <Flex gap="1" direction="row">
                    <Box width="300px">
                        <Inset clip="padding-box" side="top" pb="current">
                            <img
                                src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/455957577df541d385f1a87c6ecf591c_9366/GAZELLE_INDOOR_Green_IG1596_03_standard.jpg"
                                alt="Bold typography"
                                style={{
                                    display: "block",
                                    objectFit: "cover",
                                    width: 300,
                                    height: 300,
                                    backgroundColor: "var(--gray-5)",
                                }}
                            />
                        </Inset>
                    </Box>
                    <Box width="300px">
                        <Inset clip="padding-box" side="top" pb="current">
                            <img
                                src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/f2e2d887f055454e876d1dd390861d1f_9366/GAZELLE_INDOOR_Green_IG1596_04_standard.jpg"
                                alt="Bold typography"
                                style={{
                                    display: "block",
                                    objectFit: "cover",
                                    width: 300,
                                    height: 300,
                                    backgroundColor: "var(--gray-5)",
                                }}
                            />
                        </Inset>
                    </Box>
                </Flex>
                <Flex
                    width="600px"
                    align="center"
                    content="center"
                    direction="column"
                >
                    <Button
                        size="2"
                        variant="soft"
                        style={{
                            marginTop: "-20px",
                            marginBottom: "60px",
                            backgroundColor: "white",
                            color: "black",
                            border: "1px solid black",
                        }}
                    >
                        SHOW MORE{" "}
                        <svg
                            width="10"
                            height="10"
                            viewBox="0 0 10 10"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            style={{ marginLeft: "5px" }}
                        >
                            <path
                                d="M1 3L5 7L9 3"
                                stroke="black"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                            />
                        </svg>
                    </Button>
                    <Box width="100%">
                        <Separator my="3" size="4" />
                        <Button
                            size="2"
                            variant="soft"
                            style={{
                                backgroundColor: "white",
                                color: "black",
                                width: "100%",
                                justifyContent: "space-between",
                            }}
                        >
                            Reviews{" "}
                            <Flex gap="1" direction="row" align="center">
                                <Text weight="medium" size="1">
                                    4.8
                                </Text>
                                {[...Array(5)].map((_, index) => (
                                    <span
                                        key={index}
                                        style={{
                                            color: "#2ada71",
                                            fontSize: "0.9em",
                                        }}
                                    >
                                        ★
                                    </span>
                                ))}
                                <svg
                                    width="10"
                                    height="10"
                                    viewBox="0 0 10 10"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    style={{ marginLeft: "5px" }}
                                >
                                    <path
                                        d="M1 3L5 7L9 3"
                                        stroke="black"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                    />
                                </svg>
                            </Flex>
                        </Button>
                        <Separator my="3" size="4" />
                        <Button
                            size="2"
                            variant="soft"
                            style={{
                                backgroundColor: "white",
                                color: "black",
                                width: "100%",
                                justifyContent: "space-between",
                            }}
                        >
                            Details{" "}
                            <svg
                                width="10"
                                height="10"
                                viewBox="0 0 10 10"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                style={{ marginLeft: "5px" }}
                            >
                                <path
                                    d="M1 3L5 7L9 3"
                                    stroke="black"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                />
                            </svg>
                        </Button>
                        <Separator my="3" size="4" />
                        <Button
                            size="2"
                            variant="soft"
                            style={{
                                backgroundColor: "white",
                                color: "black",
                                width: "100%",
                                justifyContent: "space-between",
                            }}
                        >
                            How to style{" "}
                            <svg
                                width="10"
                                height="10"
                                viewBox="0 0 10 10"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                style={{ marginLeft: "5px" }}
                            >
                                <path
                                    d="M1 3L5 7L9 3"
                                    stroke="black"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                />
                            </svg>
                        </Button>
                    </Box>
                </Flex>
            </Flex>
            <Flex
                gap="0"
                direction="column"
                width="300px"
                align="center"
                style={{ padding: "10px 20px" }}
            >
                <Flex
                    direction="row"
                    align="center"
                    justify="between"
                    width="100%"
                >
                    <Text
                        style={{
                            fontSize: "0.8em",
                            marginRight: "5px",
                        }}
                    >
                        Men's <span>&#8226;</span> Originals
                    </Text>
                    <Box style={{ textAlign: "right" }}>
                        {" "}
                        {[...Array(5)].map((_, index) => (
                            <span
                                key={index}
                                style={{
                                    color: "black",
                                    fontSize: "0.7em",
                                }}
                            >
                                ★
                            </span>
                        ))}{" "}
                        <Text
                            style={{
                                fontSize: "0.8em",
                                textDecoration: "underline",
                            }}
                        >
                            28
                        </Text>
                    </Box>
                </Flex>
            </Flex>
        </Flex>
    );
};

export default Card1;
