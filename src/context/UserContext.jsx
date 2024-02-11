import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'
import { auth } from '../utility/firebaseApp'
import { useEffect } from 'react'

export const UserContext = createContext();
export const UserProvider = ({children}) => {
    /**az összes gyerekre fog vonatkozni, azok gyűjteménye lesz is az usercontextben, itt például a bejelentekzés ellenőrzése, returnba pedig átadjuk neki
     * így nem a firebaset szemeteljük tele
    */
    const [user, setUser] = useState(null)


    /**így a firebasebe is mentődik */
    useEffect(()=>{
        onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser)
        })
    },[])

/**REGISZTRÁCIÓ */
    const singUpUser = async(email, password)  => {     //kimentjük az emailt és a jelszót, ami a consolon jelent meg
        try{
            await createUserWithEmailAndPassword(auth, email, password)
            alert("Sikeres regisztráció!")
        }
    
        catch(err){
            console.log(err)
        }
    }
/**BEJELENTKEZÉS */
    const signInUser = async(email, password) =>{
        try{
            await signInWithEmailAndPassword(auth, email, password)
            alert("Sikeres bejelentkezés")
            }
        
            catch(err){
                console.log(err)
            }
    }

/**KIJELENTKEZÉS */
    const logoutUser = async() => {
        await signOut()
    }



  return (
        <UserContext.Provider value={{user, singUpUser, logoutUser, signInUser}}>
            {children}
        </UserContext.Provider>
  )
}
