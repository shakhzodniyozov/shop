import { Button, Flex, Input, Text } from "@chakra-ui/react"
import React, { useState } from 'react'
import { useSetRecoilState } from "recoil";
import { authModalState } from "../../atoms/authModalState";

export function SignUp() {
    const setAuthPageState = useSetRecoilState(authModalState);
    const [signUpForm, setSignUpForm] = useState({ email: "", password: "" });

    const handleSubmit = (e) => {

    }

    const onChange = (e) => {
        setSignUpForm({ ...signUpForm, [e.target.name]: e.target.value });
    }

    return (
        <>
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
                    mb="2"
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
                <Input
                    required
                    name="password"
                    type={"password"}
                    placeholder="Подтвердите пароль"
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
                <Button w="100%" mt="2" colorScheme="pink" type="submit">Зарегистрироваться</Button>
                <Flex fontSize={{ base: "0.9rem", lg: "0.8rem" }} mt="2">
                    <Text>У вас уже есть аккаунт?</Text>
                    <Text
                        ms="1"
                        color="blue.500"
                        onClick={() => setAuthPageState((prev) => ({ ...prev, view: "login" }))}
                        _hover={{
                            cursor: "pointer"
                        }}
                    >
                        Войти
                    </Text>
                </Flex>
            </form>
        </>
    )
}
