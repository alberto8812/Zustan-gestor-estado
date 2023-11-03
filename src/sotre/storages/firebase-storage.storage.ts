import { StateStorage, createJSONStorage } from "zustand/middleware";

export  const storageApi:StateStorage={
    getItem: function (name: string): string | Promise<string | null> | null {
        /**
         * revisamos el session storage
         */
        const data=sessionStorage.getItem(name);

        /**
         * return un valoe
         */
        return data;


    },
    setItem: function (name: string, value: string): void | Promise<void> {
        /**
         * para estableser un elemento
         */
     sessionStorage.setItem(name,value)
    },
        
    removeItem: function (name: string): void | Promise<void> {
       console.log('remove',name)
    }
};

 export const customFirebaseStorage=createJSONStorage(()=>storageApi)