import Layout from "../../components/layouts/Layout";
import { Container, Row, Col } from "reactstrap";
import ImgDetail from "../../components/games/ImgDetail";
import Card from "../../components/games/Cardinfo";
import CardUser from "../../components/games/CardUser";
import { db } from "../../firebase/config";
import { doc, getDoc } from "firebase/firestore";

export async function getServerSideProps(context) {
  const { gid } = context.query;

  let detailGame;
  let detailGame2 = [];
  let detailGame3 = [];
  let detailGame4 = [];

  //ImgDetail
  const docRef = doc(db, "games", gid);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    detailGame = docSnap.data();
  }

  //Card Info
  const docRef2 = doc(db, "games", gid);
  const docSnap2 = await getDoc(docRef2);
  if (docSnap2.exists()) {
    detailGame2.push(docSnap2.data());
  }

  //CardUser

  const docRef3 = doc(db, "users", "zrr61FqsTRZk2H8UJuxdw9XUWlJ2");
  const docSnap3 = await getDoc(docRef3);
  if (docSnap3.exists()) {
    detailGame3.push(docSnap3.data());

    const docRef4 = doc(db, "rps_game_points", "zrr61FqsTRZk2H8UJuxdw9XUWlJ2");
    const docSnap4 = await getDoc(docRef4);
    if (docSnap4.exists()) {
      console.log(docSnap4.data());
      detailGame4.push(docSnap4.data());
    }
  }
  return {
    props: {
      detailGame,
      detailGame2,
      detailGame3,
      detailGame4,
    },
  };
}

export default function GameDetail({ detailGame, detailGame2, detailGame3, detailGame4 }) {
  return (
    <div>
      <Layout title="Game detail">
        <Container>
          <Row>
            <Col sm={8} style={{ height: "220px" }}>
              <ImgDetail detailGame={detailGame} />
            </Col>
            <Col sm={4}>
              <CardUser detailGame3={detailGame3} detailGame4={detailGame4} />
              <Card detailGame2={detailGame2} />
            </Col>
          </Row>
        </Container>
      </Layout>
    </div>
  );
}
