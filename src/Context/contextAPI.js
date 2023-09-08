import React, {createContext, useState, useEffect} from "react"

import {fetchdata} from "../utils/api";

export const Context=createContext();
export const AppContext = (props)=>{
    const[loading,setLoading]=useState(false)
    const[searchResults,setSearchResults]=useState([])
    const[selectcategories,setSelectCategories]=useState("New")
    const[mobilemenu,setMobilemenu]=useState(false)

    useEffect(()=>{
          fetchselected(selectcategories)
    },[selectcategories])

    const fetchselected=(query)=>{
       setLoading(true)
       fetchdata(`search/?q=${query}`).then(({contents})=>{
        console.log(contents)
        setSearchResults(contents)
        setLoading(false)
       })
    }
    return(
        <Context.Provider value={{
            loading,
         setLoading,
         searchResults,
         setSearchResults,
         selectcategories,
         setSelectCategories,
         mobilemenu,
         setMobilemenu
        }}>
            {props.children}
        </Context.Provider>
    )
}