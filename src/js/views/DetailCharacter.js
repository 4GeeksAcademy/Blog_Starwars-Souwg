import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";


export const DetailCharacter = () => {
    const [currentCharacter, setCurrentCharacter] = useState({})
    const {uid} = useParams()
    const {store, actions} = useContext(Context)

    useEffect(()=>{
        if(store.characters){
            if(store.characters.length > 0 && uid){
                const result = store.characters.find(item => item.url.split("/")[5] == uid) 
                if(result){
                    result["uid"] = uid
                    setCurrentCharacter(result);
                }
            }
        }
    }, [store.characters, uid])
    return(
        <>
            {currentCharacter?.name}
            {currentCharacter?.eye_color}
        </>
    )
}