import React from "react";

const Home = () => {
  return (
    <>
      <div className="team-reports">
        <div className="goals-count mt">
          <h2>Matched  Played</h2>
          <h2>4</h2>
        </div>
        <div className="goals-count mt">
          <h2>Wins </h2>
          <h2>2</h2>
        </div>
        <div className="goals-count mt">
          <h2>Lost</h2>
          <h2>2</h2>
        </div>
        <div className="goals-count mt">
          <h2>draw</h2>
          <h2>0</h2>
        </div>
        <div className="goals-count mt">
          <h2>Goal Scored</h2>
          <h2>15</h2>
        </div>
        <div className="goals-count mt">
          <h2>Goal Conceded</h2>
          <h2>13</h2>
        </div>
        <div className="goals-count mt">
          <h2>Goal Difference</h2>
          <h2>+2</h2>
        </div>
      </div>
    </>
  );
};

export default Home;
