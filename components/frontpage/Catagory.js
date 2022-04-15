
import { db } from "../../firebase/config";
import { doc, getDoc } from "firebase/firestore";
import { Card, Col, List, Row, Button, CardImg } from "reactstrap";

export async function getServerSideProps()  {

let frontgame;
let frontgame1 = [];
let frontgame2 = [];
let frontgame3 = [];
let frontgame4 = [];
let frontgame5 = [];
let frontgame6 = [];
let frontgame7 = [];
let frontgame8 = [];

//top games

  const docRef = doc(db, "games", "wrQJNGNXWktCtardZVCx");
  const docSnap = await getDoc(docRef);
  
  if (docSnap.exists()) {
    frontgame.push(docSnap.data());
    console.log("Document data:", docSnap.data());
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
  }

  const docRef1 = doc(db, "games", "G4AiI2Uk8gnl3lXinAjr");
  const docSnap1 = await getDoc(docRef1);
  
  if (docSnap1.exists()) {
    frontgame1.push(docSnap1.data());
    console.log("Document data:", docSnap1.data());
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
  }

  const docRef2 = doc(db, "games", "kdsuaTjkL1sUHaRUpqI0");
  const docSnap2 = await getDoc(docRef2);
  
  if (docSnap2.exists()) {
    frontgame2.push(docSnap2.data());
    console.log("Document data:", docSnap2.data());
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
  }

  //new released
  const docRef3 = doc(db, "games", "UBW5LUJ2xTrTNnByOfdj");
  const docSnap3 = await getDoc(docRef3);
  
  if (docSnap3.exists()) {
    frontgame3.push(docSnap3.data());
    console.log("Document data:", docSnap3.data());
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
  }

  const docRef4 = doc(db, "games", "6ZmN7Oe2To9N7BXrClHC");
  const docSnap4 = await getDoc(docRef4);
  
  if (docSnap4.exists()) {
    frontgame4.push(docSnap4.data());
    console.log("Document data:", docSnap4.data());
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
  }

  const docRef5 = doc(db, "games", "GaT0psHVdNpaxaQJS5k5");
  const docSnap5 = await getDoc(docRef5);
  
  if (docSnap5.exists()) {
    frontgame5.push(docSnap5.data());
    console.log("Document data:", docSnap5.data());
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
  }

  //coming soon

  const docRef6 = doc(db, "games", "2l5fel538XX01q9WHxAW");
  const docSnap6 = await getDoc(docRef6);
  
  if (docSnap6.exists()) {
    frontgame6.push(docSnap6.data());
    console.log("Document data:", docSnap6.data());
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
  }

  const docRef7 = doc(db, "games", "vguUyLpjf1eL3XoAY4Ih");
  const docSnap7 = await getDoc(docRef7);
  
  if (docSnap7.exists()) {
    frontgame7.push(docSnap7.data());
    console.log("Document data:", docSnap7.data());
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
  }

  const docRef8 = doc(db, "games", "kdM59gkjyx3BjzatMj4b");
  const docSnap8 = await getDoc(docRef8);
  
  if (docSnap8.exists()) {
    frontgame8.push(docSnap8.data());
    console.log("Document data:", docSnap8.data());
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
  }

return {
  props: {
    frontgame,
    frontgame1,
    frontgame3,
    frontgame4,
    frontgame5,
    frontgame6,
    frontgame7,
    frontgame8,
  },
};
}

export default function Catagory({ frontgame,frontgame1,frontgame2,frontgame3,frontgame4,frontgame5,frontgame6,frontgame7,frontgame8}) {
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
              <Button color="warning"outline className="btn mx-2 my-2">
                <CardImg 
                alt="image 1"
                src= {frontgame} 
                width="250px" 
                height="200px"
                />
              </Button>  
            </li>
            {/* <li>
              <button type="button" className="btn mx-2 my-2">
                <image src="https://i.pinimg.com/564x/9a/a7/20/9aa72093ca4f3c7c30f70a7d5a76dfa1.jpg" width={250} height={200} alt='' />
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
            </li> */}
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