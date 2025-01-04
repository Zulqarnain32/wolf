import React from "react";

const Matches = () => {
  return (
    <>
      <div className="match-container">
        <div className="header logo">
          <div>
            <img src="/assets/logo.png" className="logo-img" />
          </div>
          <h4>WOLF FOOTBALL CLUB</h4>
        </div>
        <div className="teams">
          <div className="our-team">WOLF FC</div>
          <div className="opponent-team">OLD RAVI</div>
        </div>
        <div className="players">
          <h2>Starting XI</h2>
          <div>
            <p>Zeeshan</p>
            <p>Sanaullah</p>
            <p>Zuraiz</p>
            <p>Danish</p>
            <p>Arslan</p>
            <p>Daniyal</p>
            <p>Bilal (K) </p>
            <p>Amanullah</p>
            <p>Atique</p>
            <p>Javaid</p>
            <p>Basit</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Matches;