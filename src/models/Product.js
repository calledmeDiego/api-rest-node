import { db } from "./firebase.js";

import { collection, doc, getDocs, getDoc } from "firebase/firestore"

const productsCollection = collection(db,"products")

export const getDataProducts = async () => {

    try {
        const snapshot = await getDocs(productsCollection);

        return snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data()
        }));
    } catch (error) {
        console.error(error);
    }
}

export const getDataById = async (id) => {

    try {
        const productRef = doc(productsCollection,id);

        const snapshot = await getDoc(productRef);

        return snapshot.exists() ? {
            id: snapshot.id,
            ...snapshot.data()
        } : null;        
        
    } catch (error) {
        console.error(`Error al obtener el producto con ID ${id}:`, error);
        
    }
}