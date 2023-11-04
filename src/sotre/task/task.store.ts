import { StateCreator, create } from "zustand";
import { Task, TaskStatus } from "../../interfaces";

interface TaskStake{
    //arrego de tareas 
    tasks:Record<string,Task>,//{[key:string]:Task}

    getByStatus:(status:TaskStatus)=>Task[],
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

    getByStatus:(status:TaskStatus)=>{
        
        return Object.values(get().tasks).filter(task=>task.status===status)
    }

})

export const useTaksStore=create<TaskStake>()(storeApi);