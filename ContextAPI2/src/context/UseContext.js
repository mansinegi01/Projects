import {createContext,useContext} from 'react'

export const ThemeContext = createContext({
    Theme : "light",
    lightTheme : ()=>{},
    darkTheme : ()=>{}
})

export const ThemeProvider = ThemeContext.Provider


export default function useTheme(){
    return useContext(ThemeContext)
}