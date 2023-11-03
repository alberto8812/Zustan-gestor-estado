import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { getUserData } from '../api/fireBers';




export const useGetUsers = () => {
  
  const {isError,isLoading,data:PersonState}=useQuery({
    queryKey:['User','data'],
    queryFn:()=>getUserData(),
  });
  
  
    return {
        isError,
        isLoading,
        PersonState
    }
}
