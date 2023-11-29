// creating a react-bootstrap card

import React from 'react';
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types'

const Player = ({ el }) => {
  return (
    <Card style={{ width: '15rem', margin: '10px' }}>
      <Card.Img style={{ height:'400px'}} variant="top" src={el.imageUrl} alt={`${el.name} Image`} />
      <Card.Body>
        <Card.Title>{el.name}</Card.Title>
        <Card.Text>
          Team: {el.team}<br /><br/>
          Nationality: {el.nationality}<br />
          Jersey Number: {el.jerseyNumber}<br />
          Age: {el.age}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

Player.defaultProps={
  el :       {
    name: "Lionel Messi",
    team: "Inter Miami",
    nationality: "Argentine",
    jerseyNumber: 10,
    age : 36,
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/b/b4/Lionel-Messi-Argentina-2022-FIFA-World-Cup_%28cropped%29.jpg"
}
}

Player.propTypes = {
   el: PropTypes.object
}

export default Player;
