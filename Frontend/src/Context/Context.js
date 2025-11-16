import { createContext } from "react";
import { useState } from "react";

export const AppContext = createContext();

export const AppContextProvider = (props) => {
    const [loggedInUser, setLoggedInUser] = useState(null)

    return (
        <AppContext.Provider value={{ loggedInUser, setLoggedInUser }}>
            {props.children}
        </AppContext.Provider>
    )
}