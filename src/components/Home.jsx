import React from "react";

const Home = () => {
  return (
    <>
      <div className="team-reports">
        <div className="goals-count mt">
          <h2>Matched  Played</h2>
          <h2>24</h2>
        </div>
        <div className="goals-count mt">
          <h2>Wins </h2>
          <h2>12</h2>
        </div>
        <div className="goals-count mt">
          <h2>Losses</h2>
          <h2>9</h2>
        </div>
        <div className="goals-count mt">
          <h2>Draws</h2>
          <h2>3</h2>
        </div>
        <div className="goals-count mt">
          <h2>Goal Scored</h2>
          <h2>60</h2>
        </div>
        <div className="goals-count mt">
          <h2>Goal Conceded</h2>
          <h2>50</h2>
        </div>
        <div className="goals-count mt">
          <h2>Goal Difference</h2>
          <h2>+10</h2>
        </div>
      </div>
    </>
  );
};

export default Home;
