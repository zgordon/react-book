import React, { useState } from "react";

const Practice2 = () => {
  /*
   * 1. Create homePoints and awayPoints in state using hooks
   * 2. Display the points for the home and away teams
   * 3. Add a button for each team to add one point
   * 4. Add a reset button that sets both points to zero
   *
   */

  const [homePoints, setHomePoints] = useState(0);
  const [awayPoints, setAwayPoints] = useState(0);

  return (
    <>
      <h1>Scoreboard</h1>
      <div
        style={{
          display: `flex`,
          maxWidth: `300px`,
          justifyContent: `space-between`,
        }}
      >
        <h2>
          Home: {homePoints}
          {` `}
          <button onClick={() => setHomePoints(homePoints + 1)}>+1</button>
        </h2>
        <h2>
          Away: {awayPoints}
          {` `}
          <button onClick={() => setAwayPoints(awayPoints + 1)}>+1</button>
        </h2>
      </div>
      <p>
        <button
          onClick={() => {
            setAwayPoints(0);
            setHomePoints(0);
          }}
        >
          Reset Points
        </button>
      </p>
    </>
  );
};

export default Practice2;
