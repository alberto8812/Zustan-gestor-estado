import { useShallow } from 'zustand/react/shallow';
import { WhiteCard } from '../../components';
import { useBearStore } from '../../sotre';

export const BearPage = () => {

  const balckBears=useBearStore(state=>state.blackBears);//se llama el estado inicial 
  const increaseblackBears=useBearStore(state=>state.increaseblackBears);//se llama la fuancion 
  return (
    <>
      <h1>Contador de Osos</h1>
      <p>Manejo de estado simple de Zustand</p>
      <hr />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">

        <BalckBears />

        <PolarBears/>

        <PandaBears/>

        <Json/>
      </div>

    </>
  );
};


export const BalckBears = () => {
  const balckBears=useBearStore(state=>state.blackBears);//se llama el estado inicial 
  const increaseblackBears=useBearStore(state=>state.increaseblackBears);//se llama la fuancion 
  return (
    <WhiteCard centered>
      <h2>Osos Negros</h2>

      <div className="flex flex-col md:flex-row">
        <button onClick={()=>increaseblackBears(1)}> +1</button>
        <span className="text-3xl mx-2 lg:mx-10"> {balckBears} </span>
        <button onClick={()=>increaseblackBears(-1)}>-1</button>
      </div>

  </WhiteCard>
  )
}



export const PolarBears = () => {
  const PolarBears=useBearStore((state)=>state.polarBears);
  const increasepolarBears=useBearStore((state)=>state.increasepolarBears)
  return (
   
     <WhiteCard centered>
      <h2>Osos Polares</h2>

      <div className="flex flex-col md:flex-row">
        <button onClick={()=>increasepolarBears(1)}> +1</button>
        <span className="text-3xl mx-2 lg:mx-10">{PolarBears} </span>
        <button onClick={()=>increasepolarBears(-1)}>-1</button>

      </div>

    </WhiteCard>
  )
}

export const PandaBears = () => {
  const pandaBears=useBearStore((state)=>state.pandaBears);
  const incresepandaBears=useBearStore((state)=>state.incresepandaBears)
  return (
    <WhiteCard centered>
      <h2>Osos Pandas</h2>

      <div className="flex flex-col md:flex-row">
        <button onClick={()=>incresepandaBears(1)}> +1</button>
        <span className="text-3xl mx-2 lg:mx-10">{pandaBears} </span>
        <button onClick={()=>incresepandaBears(-1)}>-1</button>
      </div>

   </WhiteCard>
  )
}


export const Json = () => {
  const osoData=useBearStore(useShallow((state)=>state.osoData));
  //const osoData=useBearStore((state)=>state.osoData);
  const doNathing=useBearStore((state)=>state.doNathing);
  const addBear=useBearStore((state)=>state.addBear);
  const clearBear=useBearStore((state)=>state.clearBear);
  return (
    <WhiteCard centered>
      
      <button  className='mt-2' onClick={()=>doNathing()}>doNathing</button>
      <button  className='mt-2' onClick={()=>addBear()}>Agrgaar Oso</button>
      <button   className='mt-2' onClick={()=>clearBear()}>borrar osos</button>
      <pre>
      {
        JSON.stringify(osoData,null,2)
      }
      </pre>

   </WhiteCard>
  )
}

