"use client";

import { useState } from "react";
import { LinkMeniu } from "./LinkMeniu";

export function Navbar() {
    const [isCartShown, setIsCartShown] = useState(false);

    return (
        <div className=" bg-zinc-800 flex justify-between p-10 border-solid border-b-4 border-color-white">
            <a href="/" className=" hover:scale-110 hover:cursor-pointer hover:text-green-400 transition-all duration-300 font-bold text-slate-50">
                Urban Universe
            </a>

            {/* right */}
            <div className=" flex gap-8">
                <a href="/" className=" hover:scale-110 hover:cursor-pointer hover:text-green-400 transition-all duration-300 font-bold text-slate-50">Home</a>
                <a href="/about" className=" hover:scale-110 hover:cursor-pointer hover:text-green-400 transition-all duration-300 font-bold text-slate-50">About</a>
                <a href="/products" className=" hover:scale-110 hover:cursor-pointer hover:text-green-400 transition-all duration-300 font-bold text-slate-50">Products</a>
                {/* Cart link */}
                <div
                    onMouseEnter={(e) => {
                        setIsCartShown(true);
                    }}
                    onMouseLeave={(e) => {
                        setIsCartShown(false);
                    }}
                    className="ml-4 cursor-pointer">
                    <div className="hover:-rotate-180 duration-500 scale-150">🛒</div>
                    {/* cart drop menu */}
                    <div
                        className={`bg-zinc-700 duration-500 py-4 absolute right-0 top-[104px] w-72 max-h-[50vh] ${isCartShown
                            ? "translate-y-0"
                            : " translate-y-[-50vh] delay-500"
                            }`}>
                        cart
                    </div>
                </div>
            </div>
        </div>
    );
}
