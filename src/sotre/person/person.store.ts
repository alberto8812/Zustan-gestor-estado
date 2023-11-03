import { type StateCreator, create } from "zustand";//el type es para que no importe nada

import { StateStorage, createJSONStorage, persist } from "zustand/middleware";
import { customSessionStorage } from "..";
import { customFirebaseStorage } from "../storages/firebase-storage.storage";


interface PersonState{
    firstName:string,
    lastName:string,
    

}

interface Actions {
    setFirstName:(value:string)=>void,
    setLastName:(value:string)=>void,
    
}
const storeAPi: StateCreator<PersonState & Actions> = ( set ) => ( {

    firstName: '',
    lastName: '',
  
    setFirstName: ( value: string ) => set( ( { firstName: value } )),
    setLastName: ( value: string ) => set( ( { lastName: value } ) ),
  
  } );


export const usePersonStore = create<PersonState  & Actions>()(
  persist   (
        storeAPi,
        {
          name:'personStorage'
          ,storage:customFirebaseStorage,
        }

    )
  );//nombre del local staore que le quiero asignar 