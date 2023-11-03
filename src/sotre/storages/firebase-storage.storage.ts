import { StateStorage, createJSONStorage } from "zustand/middleware";



const urlFireBase="https://zustan-storages-default-rtdb.firebaseio.com/"


export  const storageApi:StateStorage={
    getItem:async function (name: string): Promise<string | null>  {
        /**
         * revisamos el session storage
         */
       try {
        
        const data= await fetch(`${urlFireBase}/${name}.json`).then(res=>res.json())
        return JSON.stringify(data);//CONBERTIMOS A UN OBJETO
       } catch (error) {
          throw error;
       }

        /**
         * return un valoe
         */
    },
    setItem: async function (name: string, value: string): Promise<void> {
        /**
         * para estableser un elemento
         */

        try {
        
            const data= await fetch(`${urlFireBase}/${name}.json`,{
                method:'PUT',
                body:value  
            }).then(res=>res.json())
            sessionStorage.setItem(name,data)
           } catch (error) {
              throw error;
           }


     sessionStorage.setItem(name,value)
    },
        
    removeItem: function (name: string): void | Promise<void> {
       console.log('remove',name)
    }
};

 export const customFirebaseStorage=createJSONStorage(()=>storageApi)