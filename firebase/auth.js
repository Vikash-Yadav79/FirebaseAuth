import config from './config';
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from 'firebase/auth';
export const auth = getAuth(config)

export const emailSignup = async (email,password)=>{
    try {
        const {user} = await createUserWithEmailAndPassword(auth,email,password);
        return {data: user, error: null}
    }
    catch({message})
    {
        return {data: null, error: {message}}
    }
}

export const emailSignin = async (email,password)=>{
    try {
        const {user} = await signInWithEmailAndPassword(auth,email,password);
        return {data: user, error: null}
    }
    catch({message})
    {
        return {data: null, error: {message}}
    }
}

export const logout = async ()=>{
    await signOut(auth)
}