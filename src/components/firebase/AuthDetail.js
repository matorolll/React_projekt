import React, { useEffect, useState } from 'react'
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from './firebase'

const AuthDetails = () => {
    const [authUser,setAuthUser] = useState(null);

    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) =>{
            if (user) {
                setAuthUser(user)
            } else {
                setAuthUser(null);
            }
        })


        return () => {  listen();  }

    }, [])

    const userSignOut = () => {
        signOut(auth).then(() => {
            console.log('wylogowano')
        }).catch(error => console.log(error))
    }


    return(
        <div>{
            authUser 
            ? <>
                <button onClick={userSignOut}><p>Zalogowano jako {authUser.email}</p></button>
              </>
            : <p>Wylogowany</p>}</div>
    )
}

export default  AuthDetails