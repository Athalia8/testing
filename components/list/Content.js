import { useState, useEffect } from "react";
import { query, collection, getDocs } from "firebase/firestore";
import { Row, Col } from "reactstrap";
import Link from "next/link";
import { db } from "../../firebase/config";
import { CardBody, CardGroup, CardSubtitle, Button, Card, CardImg, CardTitle, CardText, Container } from "reactstrap";
import styles from "../../styles/Home.module.css";

const Content = () => {
  const [orders, setOrders] = useState([]);
  const [user, setUser] = useState(true); //false

  // const checkUser = () => {
  //   const token = localStorage.getItem("token");
  //   token ? setUser(true) : setUser(false);
  // };

  useEffect(() => {
    async function fetchData() {
      try {
        let array = [];
        const q = query(collection(db, "games"));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          array.push({ ...doc.data(), id: doc.id });
        });
        setOrders(array);
      } catch (e) {
        //console.log(e);
      }
    }
    // checkUser();
    fetchData();
  }, []);

  return (
    <Container className="pt-5">
      <CardGroup className={styles.listBgColor}>
        <Row className="pt-3">
          <Col xs="12" sm="6" md="6" className={styles.listCol}>
            {orders.map((order) => (
              <Card className={styles.listBorder} key={order.id}>
                <CardImg className={styles.listImgContent} alt="Card image cap" src={order.thumbnail} top width="50%" />
                <CardBody className={styles.listCenter}>
                  <CardTitle className={styles.listMyFont} tag="h5">
                    {order.name}
                  </CardTitle>
                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                    <i className="bi bi-star-fill text-danger"></i>
                    <i className="bi bi-star-fill text-danger"></i>
                    <i className="bi bi-star-fill text-danger"></i>
                    <i className="bi bi-star-fill text-danger"></i>
                    <i className="bi bi-star-half text-danger"></i>
                  </CardSubtitle>
                  <CardText className={styles.listDate}>{order.release_date}</CardText>
                  {user ? (
                    <Link href={"/gamedetail/game" + order.id}>
                      <Button color="warning" className={styles.listDate}>
                        Game Detail
                      </Button>
                    </Link>
                  ) : (
                    <Link href={"/login"}>
                      <Button color="warning" className={styles.listDate}>
                        Game Detail
                      </Button>
                    </Link>
                  )}
                </CardBody>
              </Card>
            ))}
          </Col>
          <Col xs="0" sm="6" md="6">
            {orders.map((order) => (
              <Card className={styles.listBorder} key={order.id}>
                <CardImg className={styles.listImgContent} alt="Card image cap" src={order.thumbnail} top width="50%" />
                <CardBody className={styles.listCenter}>
                  <CardTitle className={styles.listMyFont} tag="h5">
                    {order.name}
                  </CardTitle>
                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                    <i className="bi bi-star-fill text-danger"></i>
                    <i className="bi bi-star-fill text-danger"></i>
                    <i className="bi bi-star-fill text-danger"></i>
                    <i className="bi bi-star-fill text-danger"></i>
                    <i className="bi bi-star-half text-danger"></i>
                  </CardSubtitle>
                  <CardText className={styles.listDate}>{order.release_date}</CardText>
                  {user ? (
                    <Link href={"/detailgame/" + order.id}>
                      <Button color="warning" className={styles.listDate}>
                        Game Detail
                      </Button>
                    </Link>
                  ) : (
                    <Link href={"/login"}>
                      <Button color="warning" className={styles.listDate}>
                        Game Detail
                      </Button>
                    </Link>
                  )}
                </CardBody>
              </Card>
            ))}
          </Col>
        </Row>
      </CardGroup>
    </Container>
  );
};

export default Content;
