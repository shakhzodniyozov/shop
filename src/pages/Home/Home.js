import React from 'react'
import { useRecoilValue } from "recoil"
import { showMenuState } from "../../atoms/showMenuState"
import { Menu } from "../../components/Menu/Menu";
import { Navbar } from "../../components/Navbar/Navbar"

export function Home() {
    const showMenu = useRecoilValue(showMenuState);
    return (
        <div>
            <Navbar />
            {showMenu && <Menu />}
        </div>
    )
}
