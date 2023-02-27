import { Button, Flex, Input, Text } from "@chakra-ui/react"
import React, { useState } from 'react'
import { useSetRecoilState } from "recoil";
import { authModalState } from "../../atoms/authModalState";

export function Login() {

    const [loginForm, setLoginForm] = useState({
        email: "",
        password: ""
    });

    const setAuthPageState = useSetRecoilState(authModalState);

    const handleSubmit = (e) => {

    }

    const onChange = (e) => {
        setLoginForm({ ...loginForm, [e.target.name]: e.target.value });
    }

    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <Input
                required
                name="email"
                type={"email"}
                placeholder="Электронная почта"
                mb={2}
                onChange={(e) => onChange(e)}
                fontSize="10pt"
                bg={"gray.50"}
                _placeholder={{ color: "gray.600" }}
                _hover={{
                    bg: "white",
                    border: "1px solid",
                    borderColor: "blue.500"
                }}
                _focus={{
                    outline: "none",
                    bg: "white",
                    border: "1px solid",
                    borderColor: "blue.500"
                }}
            />
            <Input
                required
                name="password"
                type={"password"}
                placeholder="Пароль"
                onChange={(e) => onChange(e)}
                bg={"gray.50"}
                fontSize="10pt"
                _placeholder={{ color: "gray.600" }}
                _hover={{
                    bg: "white",
                    border: "1px solid",
                    borderColor: "blue.500"
                }}
                _focus={{
                    outline: "none",
                    bg: "white",
                    border: "1px solid",
                    borderColor: "blue.500"
                }}
            />
            <Button w="100%" mt="2" colorScheme="pink" type="submit">Войти</Button>
            <Flex mt="2" fontSize={{ base: "0.9rem", lg: "0.8rem" }}>
                <Text>У вас нет аккаунта?</Text>
                <Text
                    color="blue.500"
                    onClick={() => setAuthPageState((prev) => ({ ...prev, view: "signup" }))}
                    ms="1"
                    _hover={{ cursor: "pointer" }}
                >
                    Зарегистрироваться
                </Text>
            </Flex>
        </form>
    )
}
