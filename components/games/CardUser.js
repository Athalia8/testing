import { useEffect, useState } from "react";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";
import { db, auth } from "../../firebase/config";
import { doc, getDoc } from "firebase/firestore";
import { useRouter } from "next/router";

const CardUser = () => {
  const [game, setGame] = useState("");
  const [userID, setUserID] = useState("");
  const [user, setUser] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);

  const router = useRouter();
  const { gid } = router.query;

  const toDateTime = (secs) => {
    var t = new Date(1970, 0, 1); // Epoch
    t.setSeconds(secs);
    return t;
  };

  useEffect(() => {
    const getId = async () => {
      // auth.onAuthStateChanged((user) => {
      //   try {
      //     setUserID(user.uid);
      //     getUser();
      //   } catch (error) {
      //     //console.log(error.message);
      //   }
      // });
      // //return getId;
      getUser();
    };

    const getUser = async () => {
      try {
        const docRef = doc(db, "users", "zrr61FqsTRZk2H8UJuxdw9XUWlJ2");
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setUser(docSnap.data());
          getGame();
        } else {
          //console.log("No such document!");
        }
      } catch (error) {
        //console.log(error.message);
      }
      //return getUser;
    };

    const getGame = async () => {
      try {
        const docRef = doc(db, "rps_game_points", "zrr61FqsTRZk2H8UJuxdw9XUWlJ2");
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setGame(docSnap.data());
          setIsLoaded(true);
        } else {
          //console.log("No such document!");
        }
      } catch (error) {
        //console.log(error.message);
      }
      //return getGame;
    };

    getId();
  }, [db]);

  return (
    <div>
      <h3>Score</h3>
      <div
        style={{
          display: "block",
          width: 400,
          height: 180,
        }}
      >
        {isLoaded ? (
          <Card>
            <CardBody>
              <CardTitle tag="h5">
                <b>{user.username}</b>
              </CardTitle>
              <div className="scrollspy-example" data-bs-spy="scroll">
                <b>Game : {game.game} </b>
                <br></br>

                <b>Last Play : {game.updated_at.seconds}</b>
                <br></br>

                <b>Score : {game.total}</b>
              </div>
            </CardBody>
          </Card>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default CardUser;
