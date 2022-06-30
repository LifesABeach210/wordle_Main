import React,{useEffect} from 'react'
import useWordle from '../hooks/useWordle'
import Grid from './Grid';
import Keypad from './Keypad';
export default function Wordle({solution}) {
const {currentGuess,keyUpEvent,guesses,isCorrect,turn,usedKeys} = useWordle(solution);
useEffect(() => {
window.addEventListener('keyup',keyUpEvent)

  return () => {window.removeEventListener('keyup',keyUpEvent)
    
  }
}, [keyUpEvent])

useEffect(()=>{
    console.log(guesses,turn,isCorrect)
},[guesses,turn,isCorrect])

    return (
        <div>
    
        <div>solution = {solution}
        <div>current guess - {currentGuess}</div></div>
    <Grid currentGuess = {currentGuess} guesses = {guesses} turn = {turn} / > 
    
    <Keypad usedKeys={usedKeys}/>
    </div>

 
 
 )
};
