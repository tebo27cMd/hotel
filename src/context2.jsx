import { createContext, useContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged} from "firebase/auth";
import { auth } from "./firebase";
import React from "react";

const UserAuthContext=createContext({
    auth: null
});


export function UserAuthContextProvider(props)
{   
    console.log(props);

    const [user,setUser]=useState("");
    // let loggedIn = false 

function signUp(email,password){
    return createUserWithEmailAndPassword(auth,email,password);
}
function login(email,password){
    return signInWithEmailAndPassword(auth,email,password);
}
useEffect(()=>{
    const unsubscribe= onAuthStateChanged(auth,(currentUser)=>{
         setUser(currentUser);
     });
     return ()=>
     {
         unsubscribe();
     }
 },[]);

 return <UserAuthContext.Provider value={{user,signUp,login}}>{props.children}</UserAuthContext.Provider>
}

export function useUserAuth() {
    return useContext(UserAuthContext);
}