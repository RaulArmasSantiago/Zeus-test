import { useContext } from 'react'

export function useCustomContext(context) {
  const customContext = useContext(context)

  if (!customContext){
    throw new Error('useContext() called outside of a Provider?')
  }
  
  return customContext
}