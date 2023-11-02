import { type StateCreator, create } from "zustand";//el type es para que no importe nada

import { StateStorage, createJSONStorage, devtools, persist } from "zustand/middleware";
import { customSessionStorage } from "..";


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


export const usePersonStore = create<PersonState & Actions>()(
    devtools(
      persist(
        storeAPi
        , {
          name: 'person-storage',
         storage: customSessionStorage,
        } )
    )
  );//nombre del local staore que le quiero asignar 