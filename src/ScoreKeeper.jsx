import { useState } from "react";


export default function ScoreKeeper({numPlayers=4, target=5}){
   
    const [scores, setScores] = useState(new Array(numPlayers).fill(0));
    
    const incrementScore = (idx) => {
       setScores((prevSocre) => {
        return prevSocre.map((score, i) => {
            if(idx===i) return score+1;
            return score;
        })
       })
    }
 
    function reset(){
        setScores(new Array(numPlayers).fill(0));
    }
    return(
        <div>
            <h4>Score Keeper</h4>
            <ul>
                {
                    scores.map((score, idx) => {
                       return <li key={idx}>Player{idx+1}: {score} <button onClick={()=> incrementScore(idx)}>+1</button>{score>=target && "WINNER!!!"}</li>
                    })                  

                }
            </ul>
            
            <button onClick={reset}>Reset</button>
        </div>
    );
}