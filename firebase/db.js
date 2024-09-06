import config from './config';
import {
    getFirestore, 
    collection, 
    addDoc, 
    getDocs,
    getDoc,
    doc,
    deleteDoc,
    updateDoc,
    query,
    where
} from 'firebase/firestore';
const db = getFirestore(config);

const model = {
    data: null,
    error: null
}

export const insert = async (name,data)=>{
    try {
        const {id} = await addDoc(collection(db,name),data);
        return {data: {id, ...data}, error: null}
    }
    catch({message})
    {
        return {data: null, error: {message}}
    }
}

export const find = async (name)=>{
    try {
        const data = [];
        const response = await getDocs(collection(db,name));
        response.forEach((item)=>{
            data.push({id: item.id,...item.data()})
        });
        return {data, error: null}
    }
    catch({message})
    {
        return {data: null, error: {message}}
    }
}

export const findById = async (name,id)=>{
    try {
       const response = await getDoc(doc(db,name,id));
       const data = {id: response.id,...response.data()}
       return {data, error: null}
    }
    catch({message})
    {
        return {data: null, error: {message}}
    }
}

export const deleteById = async (name,id)=>{
    try {
       await deleteDoc(doc(db,name,id));
       return {data: {success: true}, error: null}
    }
    catch({message})
    {
        return {data: null, error: {message}}
    }
}

export const updateById = async (name,id,update)=>{
    try {
       await updateDoc(doc(db,name,id),update);
       const response = await getDoc(doc(db,name,id));
       const data = {id, ...response.data()}
       return {data, error: null}
    }
    catch({message})
    {
        return {data: null, error: {message}}
    }
}

export const findByQuery = async (name,match,op="==")=>{
    try {
        const clause = [];
        const data = [];

        for(let key in match)
        {
            clause.push(where(key,op,match[key]));
        }
        const q = query(collection(db,name),...clause);
        const response = await getDocs(q);
        response.forEach((item)=>{
            data.push({id: item.id, ...item.data()})
        });
        return {data, error: null}
    }
    catch({message})
    {
        return {data: null, error: {message}}
    }
}