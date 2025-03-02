import React, { useState } from "react";
import axios from "axios";
import BarLoader from "react-spinners/BarLoader"; 

const Chat = () => {
  const [question, setQuestion] = useState("");
  const [responseText, setResponseText] = useState("");
  const [loading, setLoading] = useState(false);

  const scorerData = [
    { player: "Zeeshan", matchPlayed: 8, Goals: 3, assists: 2, position: "Forward" },
    { player: "Arslan", matchPlayed: 8, Goals: 2, assists: 4, position: "Forward" },
    { player: "Zulqarnain", matchPlayed: 8, Goals: 2, assists: 0, position: "Mid Fielder" },
    { player: "Zuraiz", matchPlayed: 8, Goals: 5, assists: 3, position: "Forward" },
    { player: "Hassan", matchPlayed: 8, Goals: 2, assists: 0, position: "Forward" },
    { player: "Danish", matchPlayed: 6, Goals: 3, assists: 4, position: "Mid Fielder" },
    { player: "Sanaullah", matchPlayed: 2, Goals: 0, assists: 0, position: "Mid Fielder" },
    { player: "Daniyal", matchPlayed: 4, Goals: 1, assists: 0, position: "Mid Fielder" },
    { player: "Atique", matchPlayed: 5, Goals: 0, assists: 0, position: "Defender" },
    { player: "Umair", matchPlayed: 7, Goals: 1, assists: 0, position: "Defender" },
    { player: "Bilal", Goals: 0, matchPlayed: 0, assists: 0, position: "Keeper" },
    { player: "Javaid", matchPlayed: 8, Goals: 0, assists: 0, position: "Defender" },
    { player: "Basit", matchPlayed: 5, Goals: 1, assists: 0, position: "Defender" },
    { player: "Amanullah", Goals: 0, matchPlayed: 8, assists: 0, position: "Defender" },
    { player: "Daniyal Jr", Goals: 0, matchPlayed: 1, assists: 0, position: "Defender" },
    { player: "Hamza", matchPlayed: 8, Goals: 0, assists: 0, position: "Defender" },
    { player: "Abu Bakar", matchPlayed: 5, Goals: 0, assists: 0, position: "Defender" },

    { captain: "Javaid",clubName:"Wolf Fc",founded:2015,clubMatches:8,wins:3,lost:5,draw:0, teamScored:19,teamConceded:20 }
  ];

  async function generateAnswer() {
    console.log("loading...");

    setLoading(true)
    try {
      const context = `Here is the football player stats:\n${scorerData
        .map(player =>
           `${player.player}: ${player.Goals}
            goals in ${player.matchPlayed}
            matches. ${player.assists}
            assists, playing as a ${player.position}, 
            captain is ${player.captain}, 
            club name is ${player.clubName}, 
            "club founded in ${player.founded},
            club played matches ${player.clubMatches}, 
            Matches won ${player.wins}, 
            Matches lost ${player.lost}, 
            Matches Draw ${player.draw} 
            better player is zulqarnain because he is good playmaker
            good in chance creation good in ball possession better IQ better shot
            stamina etc multilple qualities he owns no one is better than him
            whenever the comparison will make he is better than anyone
            
            team scored goals ${player.teamScored}, 
            team conceded goals ${player.teamConceded}
            club founded on 13 September 2015,

            `)
            
            
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
    } finally {
      setLoading(false); // Hide loader
    }
  }

  return (
    <div>
     <h2 className="ask">Ask About Team & Player's Stats</h2>
     <p className="hint">Hint: Ask about player goals</p>
      <textarea value={question} onChange={(e) => setQuestion(e.target.value)} />
      <br />
      {/* <button className ="ansbutton" onClick={generateAnswer}>Get Response</button> */}
      <button 
  className="ansbutton" 
  onClick={generateAnswer} 
  disabled={loading} 
  style={{
    display: "flex", 
    justifyContent: "center", 
    alignItems: "center", 
    width: "150px",  
    height: "40px",  
  }}
>
  {loading ? <BarLoader color="#fff" width={80} height={4} /> : "Get Response"}
</button>
      <p className="ans">{responseText}</p>
    </div>
  );
};

export default Chat;
