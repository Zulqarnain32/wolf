import React, { useState } from "react";
import axios from "axios";

const Chat = () => {
  const [question, setQuestion] = useState("");
  const [responseText, setResponseText] = useState("");

  const scorerData = [
    { id: 1, player: "Zeeshan", matchPlayed: 7, Goals: 2, assists: 2, position: "Forward" },
    { id: 2, player: "Arslan", matchPlayed: 7, Goals: 2, assists: 3, position: "Forward" },
    { id: 3, player: "Zulqarnain", matchPlayed: 7, Goals: 2, assists: 0, position: "Mid Fielder" },
    { id: 4, player: "Zuraiz", matchPlayed: 7, Goals: 4, assists: 2, position: "Forward" },
  ];

  async function generateAnswer() {
    console.log("loading...");
    try {
      const context = `Here is the football player stats:\n${scorerData
        .map(player => `${player.player}: ${player.Goals} goals in ${player.matchPlayed} matches.`)
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
      <button className ="ansbutton" onClick={generateAnswer}>Get Response</button>
      <h2 ></h2>
      <p className="ans">{responseText}</p>
    </div>
  );
};

export default Chat;
