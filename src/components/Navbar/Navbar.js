import { Flex } from "@chakra-ui/react";
import React from "react";
import { isMobile } from "react-device-detect";
import { useRecoilValue } from "recoil";
import { showSearchInputState } from "../../atoms/showSearchInputState";
import { AuthModal } from "../AuthModal/AuthModal";
import { Logo } from "./Logo/Logo";
import { RightIcons } from "./RightIcons/RightIcons";
import { SearchInput } from "./SearchInput/SearchInput";

export function Navbar() {

    const showSearchInput = useRecoilValue(showSearchInputState);

    const getSearchInput = () => {
        if (isMobile && showSearchInput) {
            return <SearchInput />
        }
        else if (!isMobile) {
            return <SearchInput />
        }
    }

    return (
        <Flex
            direction={"row"}
            p={2}
            align={"center"}
        >
            <AuthModal />
            {!showSearchInput && <Logo />}
            {getSearchInput()}
            {!showSearchInput && <RightIcons />}
        </Flex>
    )
}
