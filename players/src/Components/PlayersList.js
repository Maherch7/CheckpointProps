// Importing the Player component and the players’ data from Players.js

import React from 'react';
import Player from './Player';
import players from '../Players';

const PlayersList = () => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent:'space-around' }}>
      {players.map((el,i,t) => (
        <Player key={i} el={el} />
      ))}
    </div>
  );
};

export default PlayersList;
