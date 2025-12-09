import { createContext, useContext, useState } from "react";




export const menuContext = createContext({})

export const useMenuContext = () => {
    return useContext(menuContext)
}


export function MenuContextProvider ({children}) {
    const [catName ,setCatName] = useState("shake")





    return <menuContext.Provider value={{
        catName,
    }} >
        {children}
    </menuContext.Provider>
}