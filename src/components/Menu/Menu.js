import { Box, ListItem, UnorderedList } from "@chakra-ui/react"
import React from 'react'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

export function Menu() {
    return (
        <Box bg="pink.500">
            <UnorderedList
                styleType="none"
                m="0"
                p="0"
                color="white"
                style={{ fontFamily: "Roboto", fontWeight: 500 }}
            >
                <ListItem
                    py="1"
                    px="3"
                    display={"flex"}
                    justifyContent="space-between"
                    alignItems={"center"}
                >
                    Косметика
                    <MdOutlineKeyboardArrowRight fontSize="1.8rem" />
                </ListItem>
                <ListItem
                    py="1"
                    px="3"
                    display={"flex"}
                    justifyContent="space-between"
                    alignItems={"center"}
                >
                    Парфюмерия
                    <MdOutlineKeyboardArrowRight fontSize="1.8rem" />
                </ListItem>
                <ListItem
                    py="1"
                    px="3"
                    display={"flex"}
                    justifyContent="space-between"
                    alignItems={"center"}
                >
                    Гигиена
                    <MdOutlineKeyboardArrowRight fontSize="1.8rem" />
                </ListItem>
            </UnorderedList>
        </Box>
    )
}
