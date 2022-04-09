import { Row, Col } from "reactstrap";

export default function Gameselection () {
    return (

       <div className='Gameslider'>
          <h1>Choose your Game Gender</h1>
          <div>
              <Row>
                  <Col  sm="2">
              <button type="button" className="btn btn-outline-dark">Fantasy</button>      
                  </Col>
                  <Col sm="2">
                  <button type="button" className="btn btn-outline-dark">action</button>
                  </Col>
                  <Col sm="2">
                  <button type="button" className="btn btn-outline-dark">action</button>
                  </Col>
                  <Col sm="2">
                  <button type="button" className="btn btn-outline-dark">RGP</button>
                  </Col>
                  <Col sm="2">
                  <button type="button" className="btn btn-outline-dark">Thriller</button>
                  </Col>
              </Row>
          </div>
          <div className='container'>
              <img src="https://cdn.pixabay.com/photo/2019/09/23/16/06/war-4499000_960_720.jpg"  className='pilihan' alt='action game' /> 
              <img src="https://i.pinimg.com/564x/09/8e/6b/098e6bbe79d3bac42fdda10d7f18c275.jpg" className='pilihan' alt='Thriller' />
              <img src="https://i.pinimg.com/564x/09/8e/6b/098e6bbe79d3bac42fdda10d7f18c275.jpg" className='pilihan' alt='Thriller' />
          </div>
          <button type="button" className="btn btn-outline-dark btn-sm">View All</button>    
      </div>
   
    )
}