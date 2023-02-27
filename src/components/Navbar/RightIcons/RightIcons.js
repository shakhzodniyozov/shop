import { Badge, Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { isMobile } from "react-device-detect";
import { IoCartOutline, IoLogInOutline, IoSearchOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { authModalState } from "../../../atoms/authModalState";
import { showSearchInputState } from "../../../atoms/showSearchInputState";
import { AuthModal } from "../../AuthModal/AuthModal";

export function RightIcons() {
    const setAuthModal = useSetRecoilState(authModalState);
    const setShowSearchInputState = useSetRecoilState(showSearchInputState);

    const navigate = useNavigate();

    const handleLoginClick = (e) => {
        e.preventDefault();
        if (isMobile) {
            navigate("login");
        }
        else {
            setAuthModal((prev) => ({
                ...prev, open: true
            }));
        }
    }

    const handleSearchClick = () => {
        setShowSearchInputState((prev) => (!prev));
    }

    return (
        <Flex
            width={{ base: "50%", md: "20%" }}
            justify={"center"}
            align="center"
        >
            <AuthModal />
            <Box display={{ base: "block", lg: "none" }} p={{ base: "0", lg: "1" }} onClick={handleSearchClick}>
                <Flex>
                    <IoSearchOutline fontSize="2rem" />
                </Flex>
            </Box>
            <Link to={"cart"} style={{ margin: "0 5px" }}>
                <Flex
                    direction={"column"}
                    alignItems="center"
                    justifyContent="center"
                >
                    <Flex align={"center"}>
                        <IoCartOutline
                            fontSize="2rem"
                        />
                        <Badge variant="solid" colorScheme="red">12</Badge>
                    </Flex>
                    <Text display={{ base: "none", md: "inline" }}>Корзина</Text>
                </Flex>
            </Link>
            <a href="/login" onClick={(e) => handleLoginClick(e)}>
                <Flex
                    direction={"column"}
                    align="center"
                    justify="center"
                >
                    <IoLogInOutline
                        fontSize="2rem"
                    />
                    <Text display={{ base: "none", md: "inline" }}>Войти</Text>
                </Flex>
            </a>
        </Flex >
    )
}
