import { Button, Flex, Text } from "@chakra-ui/react";
import React from 'react'
import { FcGoogle } from "react-icons/fc";
import { IoArrowBackOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil"
import { authModalState } from "../../atoms/authModalState";
import { Login } from "../../components/Login/Login";
import { SignUp } from "../SignUp/SignUp";

export function Auth() {
    const authPage = useRecoilValue(authModalState);

    return (
        <>
            <Flex
                bg={"gray.600"}
                py="2"
                px="3"
                align="center"
            >
                <Link to="/">
                    <IoArrowBackOutline
                        color="white"
                        fontSize={"2rem"}
                    />
                </Link>
                <Text
                    fontWeight={"900"}
                    fontSize={{ base: "1.5rem", md: "2rem" }}
                    color={"yellow.400"}
                    marginLeft="2"
                    marginTop="1"
                >
                    Z
                </Text>
                <Text
                    fontWeight={"900"}
                    fontSize={{ base: "1.5rem", md: "2rem" }}
                    color={"pink.400"}
                    letterSpacing={"2px"}
                    marginTop="1"
                >
                    PARFUME
                </Text>
            </Flex>
            <Flex
                justify={"center"}
                align="center"
                direction={"column"}
                p="3"
            >
                <Button
                    bg={"white"}
                    border="1px solid"
                    borderRadius="60px"
                    borderColor="gray.300"
                    height="44px"
                    _hover={{ bgColor: "gray.50" }}
                    color="gray"
                >

                    <FcGoogle fontSize="1.5rem" style={{ marginRight: ".5rem" }} />
                    Войти с помощью Google
                </Button>
                <Flex direction="row" w="100%" align="center">
                    <hr style={{ border: "1px solid lightgray", width: "100%" }} />
                    <Text mx="1" fontWeight={700} color={"gray.500"} my={4}>ИЛИ</Text>
                    <hr style={{ border: "1px solid lightgray", width: "100%" }} />
                </Flex>
                {authPage.view === "login" && <Login />}
                {authPage.view === "signup" && <SignUp />}
            </Flex>
        </>
    )
}
