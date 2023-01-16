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
                <button class="btn btn-outline-secondary" onClick={userSignOut}>{authUser.email}</button>
              </>
            : <button class="btn btn-outline-secondary" disabled>Wylogowany</button>}</div>
    )
}

export default  AuthDetails