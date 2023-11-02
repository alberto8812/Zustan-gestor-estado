import { create } from 'zustand'

interface Bear{
    id:number,
    name:string
}


interface BearState{
    blackBears:number,
    polarBears:number,
    pandaBears:number,
    osoData:Bear[],

    increaseblackBears:(by:number)=>void,
    increasepolarBears:(by:number)=>void,
    incresepandaBears:(by:number)=>void,
    doNathing:()=>void,
    addBear:()=>void,
    clearBear:()=>void,
    computed:{
        totalbears:number
    },

}

export const useBearStore = create<BearState>()((set,get) => ({
    blackBears: 0,
    polarBears:5,
    pandaBears:10,
    osoData:[{id:1,name:'ospanda'}],
    computed:{
       get totalbears(){
         return get().blackBears + get().pandaBears + get().polarBears
       }
    },

    increaseblackBears: (by:number) => set((state) => ({ blackBears: state.blackBears + by })),
    increasepolarBears: (by:number) => set((state) => ({ polarBears: state.polarBears + by })),
    incresepandaBears:  (by:number) => set((state) => ({pandaBears:state.pandaBears + by})),
    doNathing:  () => set((state) => ({osoData:[...state.osoData]})),
    addBear:  () => set((state) => ({osoData:[...state.osoData,{id:state.osoData.length+1,name:`Oso #${state.osoData.length+1}`}]})),//adicionar elemento
    clearBear:  () => set({osoData:[]}),// como estamos limipiando no es necesario el state

}))