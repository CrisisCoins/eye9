'use client'
import { useTheme } from "next-themes"
import { useState , useEffect } from "react"
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid"

function DarkModeButton() {
    const [mounted, setMounted] = useState(false);
    const { systemTheme, theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }


    const currentTheme = theme === "system" ? systemTheme : theme;

    return  (
        <div>
            {currentTheme == "dark" ? (
                <SunIcon 
                    className="h-8 w-8 cursor-pointer text-[#FFE878]"
                    onClick={() => setTheme("Light")}
                />
            ) : (
                <MoonIcon 
                    className="h-8 w-8 cursor-pointer text-[#3B3B3B]"
                    onClick={() => setTheme("dark")}/>
            )}
        </div>
    );
}

export default DarkModeButton