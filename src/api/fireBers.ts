
interface PersonState{
    firstName:string,
    lastName:string,
    

}

const urlFirebase=`https://zustan-storages-default-rtdb.firebaseio.com/Zutand`;

export const getUserData =async():Promise<PersonState | undefined >=>{

    try {
        const res=  await fetch(`${urlFirebase}`).then(res=>res.json())
        return res;
    } catch (error) {
        console.log(error)
    }

}

export const putUserData =async():Promise<PersonState | undefined >=>{

    try {
        const res=  await fetch(`${urlFirebase}`).then(res=>res.json())
        return res;
    } catch (error) {
        console.log(error)
    }

}