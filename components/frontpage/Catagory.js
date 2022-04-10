
// import { query, collection, getDocs } from "firebase/firestore";
// import { db } from "../../../firebase/config"

import { Card, Col, List, Row } from "reactstrap";

export default function Category() {
  //     const [orders, setOrders] = useState([]);

  //   useEffect(async () => {
  //     try {
  //       let array = [];
  //       const q = query(collection(db, "games"));
  //       const querySnapshot = await getDocs(q);
  //       querySnapshot.forEach((doc) => {
  //         array.push({ ...doc.data(), id: doc.id });
  //       });
  //       setOrders(array);
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   }, []);

  return (
    <>
      <hr />
      <Row>
        <Col>
          <Card body>
            <h6 className="text-center">Top Playing Game</h6>
          </Card>
          <List type="unstyled" className="text-center">
            <li>
              <button type="button" className="btn mx-2 my-2">
                <img src="https://i.pinimg.com/564x/9a/a7/20/9aa72093ca4f3c7c30f70a7d5a76dfa1.jpg" width={250} height={200} alt='' />
              </button>
            </li>
            <li>
              <button type="button" className="btn mx-2 my-2">
                <img src="https://i.pinimg.com/564x/3d/14/b8/3d14b8cc97008009051aee4dfe347d44.jpg" width={250} height={200} alt='' />
              </button>
            </li>
            <li>
              <button type="button" className="btn mx-2 my-2">
                <img src="https://i.pinimg.com/564x/97/f8/57/97f85705c1e422b46cf5c853f17e3b2c.jpg" width={250} height={200} alt='' />
              </button>
            </li>
          </List>
        </Col>
        <Col>
          <Card body>
            <h6 className="text-center">New Released</h6>
          </Card>
          <List type="unstyled" className="text-center">
            <li>
              <button type="button" className="btn mx-2 my-2">
                <img src="https://i.pinimg.com/564x/6a/0f/d2/6a0fd23b50239102b087936ac4f5bdaf.jpg" width={250} height={200} alt='' />
              </button>
            </li>
            <li>
              <button type="button" className="btn mx-2 my-2">
                <img src="https://i.pinimg.com/564x/09/79/5a/09795ab01d1646fe90c8dc70bdb7b4c2.jpg" width={250} height={200} alt='' />
              </button>
            </li>
            <li>
              <button type="button" className="btn mx-2 my-2">
                <img src="https://i.pinimg.com/564x/97/f8/57/97f85705c1e422b46cf5c853f17e3b2c.jpg" width={250} height={200} alt='' />
              </button>
            </li>
          </List>
        </Col>
        <Col>
          <Card body>
            <h6 className="text-center">Coming Soon</h6>
          </Card>
          <List type="unstyled" className="text-center">
            <li>
              <button type="button" className="btn mx-2 my-2">
                <img src="https://i.pinimg.com/564x/4c/ab/fa/4cabfaf5434bfc2fcd1e73898f9554bb.jpg" width={250} height={200} alt='' />
              </button>
            </li>
            <li>
              <button type="button" className="btn mx-2 my-2">
                <img src="https://i.pinimg.com/564x/5d/85/e9/5d85e9079e65380f6357fceaa0ef607a.jpg" width={250} height={200} alt='' />
              </button>
            </li>
            <li>
              <button type="button" className="btn mx-2 my-2">
                <img src="https://images.gog-statics.com/13fe1e99c0aad30ca4a3c3f5cfbcbe2e997e9b013ef517db35f26166021e82be.jpg" width={250} height={200} alt='' />
              </button>
            </li>
          </List>
        </Col>
      </Row>
    </>
  )
}