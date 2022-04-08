import { useEffect, useState } from "react";
import { Card, CardBody, CardTitle, CardText, Button } from "reactstrap";
import { db } from "../../firebase/config";
import { doc, getDoc } from "firebase/firestore";
import { useRouter } from "next/router";
import swal from "sweetalert";
import Link from "next/link";

const CardInfo = ({ data }) => {
  const [name, setName] = useState("");
  const [dev, setDev] = useState("");
  const [genre, setGenre] = useState("");
  const [date, setDate] = useState("");
  const router = useRouter();
  const { gid } = router.query;

  const fetchMyAPI = async () => {
    const docRef = doc(db, "games", gid);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      setName(docSnap.data().name);
      setGenre(docSnap.data().genre);
      setDate(docSnap.data().release_date);
      setDev(docSnap.data().developer);
    } else {
    }
  };

  useEffect(() => {
    if (gid?.length > 0) {
      fetchMyAPI();
    }
  }, [gid]);

  return (
    <div>
      <h3>Detail Game</h3>
      <div
        style={{
          display: "block",
          width: 400,
          height: 220,
        }}
      >
        <Card>
          <CardBody>
            <CardTitle tag="h5">
              <b>{name}</b>
              <br></br>
            </CardTitle>
            <div className="scrollspy-example" data-bs-spy="scroll">
              <b>Developer : {dev}</b>
              <br></br>

              <b>Genre : {genre}</b>
              <br></br>

              <b>Release Date : {date}</b>
              <br></br>
              <br></br>

              <Button
                color="primary"
                onClick={() => {
                  if (gid === "l9Ay2BQwtsJc7kfgfOp7") {
                    router.push("/games/rps");
                  } else {
                    swal("Error", "Mohon maaf saat ini game sedang maintenance", "error");
                  }
                }}
              >
                Play Now
              </Button>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export async function getServerSideProps() {
  // Fetch data from external API
  const docRef = doc(db, "games", id);
  const res = await getDoc(docRef);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}

export default CardInfo;
