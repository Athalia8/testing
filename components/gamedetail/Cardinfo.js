import React from "react";
import { Card, Row, CardTitle, CardText, Col } from "reactstrap";

const Cardinfo = () => {
  return (
    <div className="card_info">
    <Row
      style={{
        display: "block",
        width: 400,
        height: 220,
      }}
    >
      <h1>Game Detail</h1>
      <Col>
        <Card body>
          <CardTitle>
            <h4> Tutorial memainkan Rock Paper Scissors</h4>
          </CardTitle>
          <CardText>
            <h4
              style={{
                textAlign: "left",
              }}
            >
              <p>Step 1: Pilih Rock Paper Scissors</p>
              <p>Setp 2: Comp akan melakukan pemilihan acak</p>
              <p>Step 3: Pilihan Comp akan dibandingkan dengan pilihan Player</p>
              <p> Step 4: Hasil pertandingan akan keluar</p>
            </h4>
          </CardText>
        </Card>
      </Col>
    </Row>
  </div>
  );
};

export default Cardinfo;
