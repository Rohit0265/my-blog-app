"use client";

import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext()

const getFormLocalStorage = () => {
    if (typeof globalThis !== "undefined" && globalThis.localStorage) {
        const value = globalThis.localStorage.getItem("theme");
        return value || "light";
    }
    return "light";
};


export const ThemeContextProvider = ({children})=>{
    const [theme,setTheme] = useState(()=>{
        return getFormLocalStorage();
    });  
    const toogle = ()=>{
        setTheme(theme === "light" ? "dark" :"light")
    }
    useEffect(()=>{
        localStorage.setItem("theme",theme)
    },[theme])
    return <ThemeContext.Provider value={{theme,toogle}}>{children}</ThemeContext.Provider>
}