import { db } from "../firebaseConfig"
import { getDocs, collection, query, where } from "firebase/firestore"

export const getProducts = (categoriaId) => {
    return new Promise((resolve, reject) => {
         //const productsRef = collection(db,'productos')
         const productsRef = categoriaId
             ? query(collection(db,'productos'), where('categoria','==',categoriaId))
             : collection(db,'productos')
      
         getDocs(productsRef)
         .then(querySnapshot => {
           // console.log(querySnapshot)
            const productsAdapted = querySnapshot.docs.map(documentSnapshot => {
                const fields = documentSnapshot.data()
                return {
                    id: documentSnapshot.id,
                    ...fields
                }
            })
           // console.log(productsAdapted)
            resolve(productsAdapted)
         })
         .catch(error => {
            reject(error)
         })

    })
}