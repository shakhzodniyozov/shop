import { Box, Divider, ListItem, Stack, Text, UnorderedList } from "@chakra-ui/react"
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
                <Divider />
                <ListItem
                    py="1"
                    px="3"
                    display={"flex"}
                    alignItems={"center"}
                >
                    <Stack spacing="0">
                        <Text fontSize="1.5rem" fontWeight="700">+992 98 890 09 22</Text>
                        <Text fontSize="0.8rem">телефон для связи</Text>
                    </Stack>
                </ListItem>
            </UnorderedList>
        </Box>
    )
}
