import { Flex } from "@chakra-ui/react";
import React from 'react'
import { useRecoilValue } from "recoil";
import { authModalState } from "../../atoms/authModalState";
import { SignUp } from "../../pages/SignUp/SignUp";
import { Login } from "../Login/Login";

export function AuthInputs() {
    const authModal = useRecoilValue(authModalState);

    return (
        <Flex>
            {authModal.view === "login" && <Login />}
            {authModal.view === "signup" && <SignUp />}
        </Flex>
    )
}
