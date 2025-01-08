// import React from "react";

// const Matches = () => {
//   return (
//     <>
//       <div className="match-container">
        
//         <div className="teams">
//           <div className="our-team">WOLF FC</div>
//           <div className="opponent-team">OLD RAVI</div>
//         </div>
//        <div className="match-info">
//        <div className="players">
//           <h2>Starting XI</h2>
//           <div>
//             <p>Zeeshan</p>
//             <p>Sanaullah</p>
//             <p>Zuraiz</p>
//             <p>Danish</p>
//             <p>Arslan</p>
//             <p>Daniyal</p>
//             <p>Bilal (K) </p>
//             <p>Amanullah</p>
//             <p>Atique</p>
//             <p>Javaid</p>
//             <p>Basit</p>
//           </div>
//         </div>
//         <div className="players">
//           <h2>Substitutions </h2>
//           <div>
//             <p>Zeeshan</p>
//             <p>Umair</p>
//             <p>Amanullah</p>
//             <p>Hamza</p>
//             <p>Daniyal jr</p>
//             <p>Haider</p>
//             <p>Hamza</p>
//             <p>Abu Bakr</p>
           
//           </div>
//           <div className="goal-scorers box">
//             Goal Scorers
//           </div>
//         </div>
//        </div>
//        <div className="match-res">
//         7 - 3
//        </div>
//       </div>
//     </>
//   );
// };

// export default Matches;

import React, { useEffect } from 'react'
import HistoryData from '../historyApi/HistoryData'
const Matches = () => {
  useEffect(() => {
    // Scroll to the bottom of the page with a smooth transition when the component mounts
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth'
    });
  }, []);
  return (
    <>
      <div>
        {
          HistoryData.map((players, i) => (
            <div key={i} className={`match-post ${i % 2 === 0 ? "red" : "blue"}`}>
               <h5 className='match-num'>{i + 1}</h5>
              <p className='date'>Date & Day :  {players.timeStamp.day} {players.timeStamp.date}</p>
              <div className='complete-match'>
                <div className='team team1'>
                  <h2>{players.captains.captain1}</h2>
                  {Object.keys(players.team1).map((key, index) => (
                    <p key={index}>{players.team1[key]}</p>
                  ))}
                </div>
                <div className='team team2'>
                  <h2>{players.captains.captain2}</h2>
                  {Object.keys(players.team2).map((key, index) => (
                    <p key={index}>{players.team2[key]}</p>
                  ))}
                </div>
              </div>



              <div className='final-score goalscorers'>{players.finalScore} </div>
              <div className='goalscorers'>Goal Scorers</div>
              <div className="team-scorers">
                <div className="scorers1 ">
                  <div>

                    {
                      players.goalScorers.team1Scorers.map((scorer, i) => (
                        <div key={i}>
                          <h4>{scorer}</h4>
                        </div>
                      ))
                    }
                
                  </div>
                </div>
                <div className="scorers1 ">
                  <div>
                    {
                      players.goalScorers.team2Scorers.map((scorer, i) => (
                        <div key={i}>
                          <h4>{scorer}</h4>
                        </div>
                      ))
                    }
                
                  </div>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default Matches
