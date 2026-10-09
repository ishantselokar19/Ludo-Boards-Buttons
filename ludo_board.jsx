import { useState } from "react";

export default function LudoBoard(){
    let [moves,setmoves]= useState({blue:0,yellow:0,green:0,red:0});
    
    let blueUpdate = ()=>{
        console.log("moves =",moves.blue);
        setmoves((prevMoves)=>{
            return{...prevMoves ,blue: prevMoves.blue+1};

        });
    };


    return (
        <>
        <p>game begins </p>
        <div className="board">
            <p>Blue Moves = {moves.blue}</p>
            <button style={{backgroundColor:"blue"}} onClick={blueUpdate}>+1</button>
             <p>Yellow Moves = {moves.yellow}</p>
            <button style={{backgroundColor:"yellow"}}>+1</button>
             <p>Green Moves = {moves.green}</p>
            <button style={{backgroundColor:"green"}}>+1</button>
             <p>Red Moves = {moves.red}</p>
            <button style={{backgroundColor:"red"}}>+1</button>
        </div>
        </>
    )
}
