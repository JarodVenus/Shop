import { createContext, useState } from "react";

const NavigationContext = createContext();

function NavigationContextProvider(props){
    const [ navigation, setNavigation ] = useState("")

    function Navigate(destination){
        setNavigation(destination);
    }


    return <NavigationContext.Provider value={{ navigation, setNavigation }} >
        {props.children}
    </NavigationContext.Provider>
}