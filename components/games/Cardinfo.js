import { useEffect, useState } from "react";
import { Card, CardBody, CardTitle, CardText, Button } from "reactstrap";
import swal from "sweetalert";

const CardInfo = ({ detailGame2 }) => {
  const [data, setData] = useState([]);
  let cardInfo;

  useEffect(() => {
    setData(detailGame2);
  }, [data]);

  if (data.length) {
    cardInfo = data.map((d) => {
      return (
        <Card>
          <CardBody>
            <CardTitle tag="h5">
              <b>{d.name}</b>
              <br></br>
            </CardTitle>
            <div className="scrollspy-example" data-bs-spy="scroll">
              <b>Developer : {d.developer}</b>
              <br></br>

              <b>Genre : {d.genre}</b>
              <br></br>

              <b>Release Date : {d.release_date}</b>
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
      );
    });
  }

  return (
    <>
      <h3>Detail Game</h3>
      <div
        style={{
          display: "block",
          width: 400,
          height: 220,
        }}
      >
        {cardInfo}
      </div>
    </>
  );
};

export default CardInfo;
