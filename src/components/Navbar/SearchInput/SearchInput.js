import { Flex, Input, InputGroup, InputLeftElement, InputRightElement } from "@chakra-ui/react"
import { BsSearch } from "react-icons/bs";
import React, { useState } from 'react'
import { useSetRecoilState } from "recoil";
import { showSearchInputState } from "../../../atoms/showSearchInputState";
import { IoCloseCircleOutline } from "react-icons/io5";
import { isMobile } from "react-device-detect";

export function SearchInput() {

    const setShowSearchInput = useSetRecoilState(showSearchInputState);
    const [inputValue, setInputValue] = useState("");

    const handleRightIconClick = () => {
        if (inputValue.length !== 0) {
            setInputValue("");
        } else {
            setShowSearchInput((prev) => (!prev))
        }
    }

    return (
        <Flex flexGrow={1}>
            <form style={{ width: "100%" }}>
                <InputGroup>
                    <InputLeftElement
                        pointerEvents='none'
                    >
                        <BsSearch />
                    </InputLeftElement>
                    {isMobile && <InputRightElement onClick={handleRightIconClick}>
                        <IoCloseCircleOutline fontSize="1.5rem" />
                    </InputRightElement>}
                    <Input
                        placeholder='Поиск по каталогу'
                        _focus={{
                            outline: "none"
                        }}
                        onChange={e => setInputValue(e.target.value)}
                        value={inputValue}
                        autoFocus
                    />
                </InputGroup>
            </form>
        </Flex>
    )
}