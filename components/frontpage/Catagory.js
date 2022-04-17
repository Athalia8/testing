
import { db } from "../../firebase/config";
import { doc, Firestore, getDoc, collection, onSnapshot } from "firebase/firestore";
import { Card, Col, List, Row, Button, CardImg } from "reactstrap";
import Link from "next/link";
import { useEffect, useState, slice } from "react";

export default function Catagory() {
  const [gamess, setGamess] = useState([{ name: "Loading...", id: "initial" }]);

  // var gamesd = this.props.data.slice(0, 5).map((item) => {
  //   return <gamesdItem key={item.id} gamesd={item} />
  // });

  // console.log(gamess);
  useEffect(
    () =>
      onSnapshot(collection(db, "games"), (snapshot) =>
        setGamess(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      ),
    []
  );

  return (
    <>
      <hr />
      <Row>
        <Col>
          <Card body>
            <h6 className="text-center">Top Playing Game</h6>
          </Card>
          <List type="unstyled" className="text-center">
            {gamess.map((games) => (
              <li key={games.id}>
                <Link href={"/games/" + games.id}>
                  <Button color="warning" outline className="btn mx-2 my-2" >
                    <CardImg
                      alt="image 1"
                      src={games.thumbnail}
                      width="250px"
                      height="200px"
                    />
                  </Button>
                </Link>
              </li>
            ))}
          </List>
        </Col>
        <Col>
          <Card body>
            <h6 className="text-center">New Released</h6>
          </Card>
          <List type="unstyled" className="text-center">
            {gamess.map((games) => (
              <li key={games.id}>
                <Link href={"/games/" + games.id}>
                  <Button color="warning" outline className="btn mx-2 my-2" >
                    <CardImg
                      alt="image 1"
                      src={games.thumbnail}
                      width="250px"
                      height="200px"
                    />
                  </Button>
                </Link>
              </li>
            ))}
          </List>
        </Col>
        <Col>
          <Card body>
            <h6 className="text-center">Coming Soon</h6>
          </Card>
          <List type="unstyled" className="text-center">
            {gamess.map((games) => (
              <li key={games.id}>
                <Link href={"/games/" + games.id}>
                  <Button color="warning" outline className="btn mx-2 my-2" >
                    <CardImg
                      alt="image 1"
                      src={games.thumbnail}
                      width="250px"
                      height="200px"
                    />
                  </Button>
                </Link>
              </li>
            ))}
          </List>
        </Col>
      </Row>
    </>
  )
}

