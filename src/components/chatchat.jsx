// import React, { useState } from "react";
// import axios from "axios";

// const Chat = () => {
//   const [question, setQuestion] = useState("");
//   const [responseText, setResponseText] = useState("");

//   async function generateAnswer() {
//     console.log("loading...");
//     try {
//       const context = [
//         {
//           club: { name: "Wolf FC", captain: "Javaid", founded: "2021", matchPlayed: 8, wins: 3, lost: 5, draw: 0, goalScored: 19, goalConceded: 20 },
//           players: [
//               { player: "Zeeshan", matchPlayed: 7, Goals: 2, assists: 2, position: "Forward" },
//               { player: "Arslan", matchPlayed: 7, Goals: 2, assists: 3, position: "Forward" },
//               { player: "Zulqarnain", matchPlayed: 7, Goals: 2, assists: 0, position: "Mid Fielder" },
//               { player: "Zuraiz", matchPlayed: 7, Goals: 4, assists: 2, position: "Forward" },
//               { player: "Hassan", matchPlayed: 8, Goals: 2, assists: 0, position: "Forward" },
//               { player: "Danish", matchPlayed: 5, Goals: 3, assists: 4, position: "Mid Fielder" },
//               { player: "Sanaullah", matchPlayed: 1, Goals: 0, assists: 0, position: "Mid Fielder" },
//               { player: "Daniyal", matchPlayed: 3, Goals: 1, assists: 0, position: "Mid Fielder" },
//               { player: "Atique", matchPlayed: 4, Goals: 0, assists: 0, position: "Defender" },
//               { player: "Umair", matchPlayed: 6, Goals: 0, assists: 0, position: "Menu v ni pta" },
//               { player: "Bilal", Goals: 0, matchPlayed: 0, assists: 0, position: "Keeper" },
//               { player: "Javaid", matchPlayed: 7, Goals: 0, assists: 0, position: "Defender" },
//               { player: "Basit", matchPlayed: 5, Goals: 1, assists: 0, position: "Defender" },
//               { player: "Amanullah", Goals: 0, matchPlayed: 7, assists: 0, position: "Defender" },
//               { player: "Daniyal Jr", Goals: 0, matchPlayed: 1, assists: 0, position: "Defender" },
//               { player: "Hamza", matchPlayed: 7, Goals: 0, assists: 0, position: "Defender" },
//           ]
//       }


//       ];


//       const response = await axios({
//         url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyCKYhX_a-LBNPNrydxpF5mEE92Ej-pKyEM",
//         method: "POST",
//         data: {
//           contents: [
//             {
//               parts: [{ text: `${context}\n\nUser Question: ${question}` }],
//             },
//           ],
//         },
//       });

//       const answer = response.data.candidates[0].content.parts[0].text;
//       console.log(answer);

//       setResponseText(answer);
//     } catch (error) {
//       console.error("Error fetching answer:", error);
//       setResponseText("Failed to generate an answer.");
//     }
//   }

//   return (
//     <div>
//      <h2 className="ask">Ask any Question</h2>
//       <textarea value={question} onChange={(e) => setQuestion(e.target.value)} />
//       <br />
//       <button className ="ansbutton" onClick={generateAnswer}>Get Response</button>
//       <h2 ></h2>
//       <p className="ans">{responseText}</p>
//     </div>
//   );
// };

// export default Chat;

import React, { useState } from "react";
import axios from "axios";

const Chat = () => {
  const [question, setQuestion] = useState("");
  const [responseText, setResponseText] = useState("");

  const scorerData = [
    {
      club: { name: "Wolf FC", captain: "Javaid", founded: "2021", matchPlayed: 8, wins: 3, lost: 5, draw: 0, goalScored: 19, goalConceded: 20 },
      players: [
          { player: "Zeeshan", matchPlayed: 7, Goals: 2, assists: 2, position: "Forward" },
          { player: "Arslan", matchPlayed: 7, Goals: 2, assists: 3, position: "Forward" }
      ]
  }
  
    // { player: "Zeeshan", matchPlayed: 7, Goals: 2, assists: 2, position: "Forward" },
    // { player: "Arslan", matchPlayed: 7, Goals: 2, assists: 3, position: "Forward" },
    // { player: "Zulqarnain", matchPlayed: 7, Goals: 2, assists: 0, position: "Mid Fielder" },
    // { player: "Zuraiz", matchPlayed: 7, Goals: 4, assists: 2, position: "Forward" },
    // { player: "Hassan", matchPlayed: 8, Goals: 2, assists: 0, position: "Forward" },
    // { player: "Danish", matchPlayed: 5, Goals: 3, assists: 4, position: "Mid Fielder" },
    // { player: "Sanaullah", matchPlayed: 1, Goals: 0, assists: 0, position: "Mid Fielder" },
    // { player: "Daniyal", matchPlayed: 3, Goals: 1, assists: 0, position: "Mid Fielder" },
    // { player: "Atique", matchPlayed: 4, Goals: 0, assists: 0, position: "Defender" },
    // { player: "Umair", matchPlayed: 6, Goals: 0, assists: 0, position: "Menu v ni pta" },
    // { player: "Bilal", Goals: 0, matchPlayed: 0, assists: 0, position: "Keeper" },
    // { player: "Javaid", matchPlayed: 7, Goals: 0, assists: 0, position: "Defender" },
    // { player: "Basit", matchPlayed: 5, Goals: 1, assists: 0, position: "Defender" },
    // { player: "Amanullah", Goals: 0, matchPlayed: 7, assists: 0, position: "Defender" },
    // { player: "Daniyal Jr", Goals: 0, matchPlayed: 1, assists: 0, position: "Defender" },
    // { player: "Hamza", matchPlayed: 7, Goals: 0, assists: 0, position: "Defender" }
  ];

  async function generateAnswer() {
    console.log("loading...");
    try {
      // const context = `Here is the football player stats:\n${scorerData
      //   .map(player => `${player.player}: ${player.Goals} goals in ${player.matchPlayed} matches. ${player.assists} player assists  ${player.position} position on field` )
      //   .join("\n")}`;
      const context = `Club Information:
Name: ${scorerData.club.name}
Captain: ${scorerData.club.captain}
Founded: ${scorerData.club.founded}
Matches Played: ${scorerData.club.matchPlayed}
Wins: ${scorerData.club.wins}, Losses: ${scorerData.club.lost}, Draws: ${scorerData.club.draw}
Goals Scored: ${scorerData.club.goalScored}, Goals Conceded: ${scorerData.club.goalConceded}

Here are the football player stats:
${scorerData.players
          .map(player => `${player.player}: ${player.Goals} goals in ${player.matchPlayed} matches. ${player.assists} assists, playing as a ${player.position}.`)
          .join("\n")}`;



      const response = await axios({
        url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyCKYhX_a-LBNPNrydxpF5mEE92Ej-pKyEM",
        method: "POST",
        data: {
          contents: [
            {
              parts: [{ text: `${context}\n\nUser Question: ${question}` }],
            },
          ],
        },
      });

      const answer = response.data.candidates[0].content.parts[0].text;
      console.log(answer);

      setResponseText(answer);
    } catch (error) {
      console.error("Error fetching answer:", error);
      setResponseText("Failed to generate an answer.");
    }
  }

  return (
    <div>
      <h2 className="ask">Ask any Question</h2>
      <textarea value={question} onChange={(e) => setQuestion(e.target.value)} />
      <br />
      <button className="ansbutton" onClick={generateAnswer}>Get Response</button>
      <h2 ></h2>
      <p className="ans">{responseText}</p>
    </div>
  );
};

export default Chat;