import React from 'react'
import { Outlet } from "react-router-dom";
import { useRecoilValue } from "recoil"
import { showMenuState } from "../../atoms/showMenuState"
import { Menu } from "../../components/Menu/Menu";
import { Navbar } from "../../components/Navbar/Navbar"

export function Main() {
    const showMenu = useRecoilValue(showMenuState);

    return (
        <>
            <Navbar />
            {showMenu && <Menu />}
            <Outlet />
        </>
    )
}