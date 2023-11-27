import React from 'react';
import ThemeSwitcher from './ThemeSwitcher';

export default function Navbar({ openModal }) {
    return (
        <nav className="ui-primary z-20 flex w-full flex-col items-start gap-4 p-4 text-[28px] shadow-md lg:flex-row lg:items-center lg:justify-between">
            <h2 className="flex items-center gap-1">
                <span className="pr-2">🍻</span>
                <span className="tx-inverted hover:text-[#b066f3] transition-colors">Brest</span>
                <span className="gradient bg-clip-text text-transparent">bar</span>
            </h2>
            <div className="flex justify-between gap-2">
                <button
                    onClick={openModal}
                    className="bg-primary rounded-[4px] px-4 py-2 text-sm font-bold text-white transition-transform hover:scale-105">
                    🙋‍♀️ Faire une demande
                </button>
                <ThemeSwitcher />
            </div>
        </nav>
    )
}
