import { JiraTasks } from '../../components';
import { useTaksStore } from '../../sotre';

export const JiraPage = () => {
  const pendingTask=useTaksStore(state=>state.getByStatus('in-progress'));
  const inprogressTask=useTaksStore(state=>state.getByStatus('done'));
  const doneTask=useTaksStore(state=>state.getByStatus('open'));


  return (
    <>
      <h1>Tareas</h1>
      <p>Manejo de estado con objectos de Zustand</p>
      <hr />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          
          <JiraTasks title='Pendientes' value='open' tasks={pendingTask} />
          
          <JiraTasks title='Avanzando' value='in-progress' tasks={inprogressTask} />
          
          <JiraTasks title='Terminadas' value='done' tasks={doneTask} />

      </div>

      



    </>
  );
};