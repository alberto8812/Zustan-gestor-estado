import { DragEvent } from 'react';
import { IoCheckmarkCircleOutline, IoEllipsisHorizontalOutline, IoReorderTwoOutline } from 'react-icons/io5';
import { Task, TaskStatus } from '../../interfaces';
import { SingleTask } from '../../pages';
import { useTaksStore } from '../../sotre';
import classNames from 'classnames';


interface Props {
  title: string;
  value: TaskStatus;
  tasks:Task[];
}


export const JiraTasks = ({ title,tasks,value }: Props) => {

  const isDragging=useTaksStore(state=>!!state.dragginTaskId);//PARE MANEJAR VALORES BOOLEANOS
  const ontaskDrop=useTaksStore(state=>state.ontaskDrop);//PARE MANEJAR VALORES BOOLEANOS


  const handleDragOver=(event:DragEvent<HTMLDivElement>)=>{
    event.preventDefault();
    console.log('over')
  }
  const handleDragLeave=(event:DragEvent<HTMLDivElement>)=>{

    console.log('leave')
  }
  const handleDrog=(event:DragEvent<HTMLDivElement>)=>{
 
    ontaskDrop(value)
  }



return(
  <div 
  onDragOver={handleDragOver}// es cuando muevo elemento dentro del contenedor padre
  onDragLeave={handleDragLeave}//cuando saco el elemento del contenedor padre
  onDrop={handleDrog}//solo se dispara una vez cuando se suelta el elemento sobre otro contenedor  - ojo usar preventDefould

  className={
    classNames("!text-black border-4 relative flex flex-col rounded-[20px] bg-white bg-clip-border shadow-3xl shadow-shadow-500  w-full !p-4 3xl:p-![18px] "
    ,{" border-blue-700 border-dotted":isDragging}//lo agrega si esta en verdadero el estado
    )
  }
  >


    {/* Task Header */}
    <div className="relative flex flex-row justify-between">

      <div className="flex items-center justify-center">

        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-100">
          <span className="flex justify-center items-center h-6 w-6 text-brand-500">
            <IoCheckmarkCircleOutline style={{ fontSize: '50px' }} />
          </span>
        </div>

        <h4 className="ml-4 text-xl font-bold text-navy-700">{title}</h4>
      </div>

      <button>
        <IoEllipsisHorizontalOutline />
      </button>

    </div>

    {/* Task Items */}
    <div className="h-full w-full">
     {
      tasks.map(task=>( <SingleTask  task={task}  key={task.id}/>))
     }




    </div>
  </div>
)

    };