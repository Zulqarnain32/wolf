import React from "react";

const Home = () => {
  return (
    <>
      <div className="team-reports">
        <div className="goals-count mt">
          <h2>Matched  Played</h2>
          <h2>14</h2>
        </div>
        <div className="goals-count mt">
          <h2>Wins </h2>
          <h2>5</h2>
        </div>
        <div className="goals-count mt">
          <h2>Lost</h2>
          <h2>9</h2>
        </div>
        <div className="goals-count mt">
          <h2>draw</h2>
          <h2>0</h2>
        </div>
        <div className="goals-count mt">
          <h2>Goal Scored</h2>
          <h2>34</h2>
        </div>
        <div className="goals-count mt">
          <h2>Goal Conceded</h2>
          <h2>37</h2>
        </div>
        <div className="goals-count mt">
          <h2>Goal Difference</h2>
          <h2>-3</h2>
        </div>
      </div>
    </>
  );
};

export default Home;
