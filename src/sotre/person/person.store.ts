import { type StateCreator, create } from "zustand";//el type es para que no importe nada

import { StateStorage, createJSONStorage, devtools, persist } from "zustand/middleware";
import { customSessionStorage } from "..";
import { customFirebaseStorage } from "../storages/firebase-storage.storage";
import { logger } from "../middleware/logger.middleware";


interface PersonState{
    firstName:string,
    lastName:string,
    

}

interface Actions {
    setFirstName:(value:string)=>void,
    setLastName:(value:string)=>void,
    
}
const storeAPi: StateCreator<PersonState & Actions,[["zustand/devtools", never]]> = ( set ) => ( {

    firstName: '',
    lastName: '',
  
    setFirstName: ( value: string ) => set( (state)=> ( { firstName: value } ),false,'setFirstName'),
    setLastName: ( value: string ) => set( (state)=>( { lastName: value } ),false,'setLastName' ),
  
  } );


export const usePersonStore = create<PersonState  & Actions>()(
 
  devtools(
  persist   (
        storeAPi,
        {
          name:'personStorage'
         // ,storage:customFirebaseStorage,
        }

    )
  )
  );//nombre del local staore que le quiero asignar 