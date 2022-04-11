import { useEffect, useState } from "react";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";

const CardUser = ({ detailGame3, detailGame4 }) => {
  const [game, setGame] = useState("");
  const [user, setUser] = useState("");

  let cardGame;
  let cardUser;
  // const toDateTime = (secs) => {
  //   var t = new Date(1970, 0, 1); // Epoch
  //   t.setSeconds(secs);
  //   return t;
  // };

  useEffect(() => {
    setGame(detailGame4);
    setUser(detailGame3);
  }, []);

  if (user.length && game.length) {
    cardUser = user.map((u) => {
      return (
        <CardTitle tag="h5">
          <b>{u.username}</b>
        </CardTitle>
      );
    });

    cardGame = game.map((g) => {
      return (
        <div className="scrollspy-example" data-bs-spy="scroll">
          <b>Game : {g.game} </b>
          <br></br>

          <b>Last Play : {g.total}</b>
          <br></br>

          <b>Score : {g.total}</b>
        </div>
      );
    });
  }

  return (
    <div className="mt-2">
      <h3>Score</h3>
      <div
        style={{
          display: "block",
        }}
      >
        <Card>
          <CardBody>
            {cardUser}
            {cardGame}
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default CardUser;
