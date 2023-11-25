"use client"
import { useTheme } from 'next-themes';
import React from 'react'
import { BsSun, BsMoon } from 'react-icons/bs';

export default function ThemeSwitcher() {
    const { theme, setTheme } = useTheme();
    const changeTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark")
    }

    return (
        <button
            className="bg-primary rounded-[4px] px-4 py-2 text-white transition-transform hover:scale-105"
            onClick={changeTheme}>
            {theme === "light" ? <BsSun className="w-4" /> : <BsMoon className="w-4" />}
        </button>
    )
}
