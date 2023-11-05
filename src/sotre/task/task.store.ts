import { StateCreator, create } from "zustand";
import { Task, TaskStatus } from "../../interfaces";
import { devtools } from "zustand/middleware";

interface TaskStake{
    //arrego de tareas 
    tasks:Record<string,Task>,//{[key:string]:Task}
    dragginTaskId?:string,//propieda de guarda la tarea


    getByStatus:(status:TaskStatus)=>Task[],
    setDraggintTaskId:(taskId:string)=>void,//cremos un metodo que consigue el id de la tarea 
    removeDragginTaskId:()=>void,
}

interface Actions{

}

const storeApi:StateCreator<TaskStake>=(set,get)=>({

    tasks:{
        'ABC-1':{id:'ABC-1',title:'Task1',status:'open'},
        'ABC-2':{id:'ABC-2',title:'Task2',status:'open'},
        'ABC-3':{id:'ABC-3',title:'Task3',status:'in-progress'},
        'ABC-4':{id:'ABC-4',title:'Task4',status:'open'},
    },
    dragginTaskId:undefined,

    getByStatus:(status:TaskStatus)=>{
        
        return Object.values(get().tasks).filter(task=>task.status===status)
    },
    setDraggintTaskId:(taskId:string)=>(
        set({dragginTaskId:taskId})
    ),
    removeDragginTaskId:()=>(set({dragginTaskId:undefined}))

})

export const useTaksStore=create<TaskStake>()(
   devtools(
     storeApi
   )
    );