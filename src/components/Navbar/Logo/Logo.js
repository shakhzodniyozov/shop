import { Box, Flex, Text } from "@chakra-ui/react"
import React from 'react'
import { IoMenuOutline } from "react-icons/io5"
import { Link } from "react-router-dom"
import { useSetRecoilState } from "recoil"
import { showMenuState } from "../../../atoms/showMenuState"

export function Logo() {
    const setShowMenu = useSetRecoilState(showMenuState);

    const handleMenuClick = () => {
        setShowMenu((prev) => (!prev));
    }

    return (
        <Flex px={3} w={{ base: "50%", md: "20%" }} align="center">
            <Box onClick={handleMenuClick}>
                <IoMenuOutline fontSize="2rem" style={{ marginRight: ".25rem" }} />
            </Box>
            <Link to={"/"}>
                <Flex
                    flexDirection={"row"}
                    justify="center"
                    align="center"
                >
                    <Text
                        fontWeight={"500"}
                        fontSize={{ base: "1.2rem", md: "2rem" }}
                        color={"yellow.400"}
                    >
                        Z
                    </Text>
                    <Text
                        fontWeight={"500"}
                        fontSize={{ base: "1.2rem", md: "2rem" }}
                        color={"pink.400"}
                        letterSpacing={"2px"}
                    >
                        PARFUME
                    </Text>
                </Flex>
            </Link>
        </Flex>
    )
}
