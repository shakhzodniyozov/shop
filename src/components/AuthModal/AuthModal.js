import { Button, Flex, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Text } from "@chakra-ui/react";
import React from 'react'
import { FcGoogle } from "react-icons/fc";
import { useRecoilState } from "recoil"
import { authModalState } from "../../atoms/authModalState"
import { AuthInputs } from "../AuthInputs/AuthInputs";

export function AuthModal() {
    const [authModal, setAuthModal] = useRecoilState(authModalState);

    const handleClose = () => {
        setAuthModal((prev) => ({
            ...prev, open: false
        }))
    }

    return (
        <>
            <Modal isOpen={authModal.open} onClose={handleClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader textAlign={"center"}>
                        {authModal.view === "login" && "Войти"}
                        {authModal.view === "signup" && "Регистрация"}
                        {authModal.view === "resetPassword" && "Восстановить пароль"}
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody
                        display={"flex"}
                        direction={"column"}
                        align={"center"}
                        justifyContent={"center"}
                        pb={6}
                    >
                        <Flex
                            direction={"column"}
                            align={"center"}
                            justify={"center"}
                            width={"70%"}
                        >
                            {authModal.view === "login" || authModal.view === "signup" ? (
                                <>
                                    <Flex
                                        justify={"center"}
                                        align="center"
                                        direction={"column"}
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
                                    </Flex>
                                    <AuthInputs />
                                </>
                            ) : (
                                // <ResetPassword />
                                <p>Reset Password</p>
                            )}
                        </Flex>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}
