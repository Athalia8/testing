import Layout from "../Layout"
// import Link from 'next/link'

export default function Slidevent () {
    return (
        <Layout>
            <div className="container-fluid">
        <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
        >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={0}
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={1}
            aria-label="Slide 2"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={2}
            aria-label="Slide 3"
          />
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active btn" type="button" >  
            <img src="https://images.pexels.com/photos/735911/pexels-photo-735911.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className="d-block w-100" alt="event 1" /> 
            <div className="carousel-caption d-none d-md-block ">
              <h5>Be the first to Play</h5>
              <p>Everything you dream of come true</p>
            </div>
          </div>
          <div className="carousel-item btn" type="button">
            <img src="https://images.pexels.com/photos/8762800/pexels-photo-8762800.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" className="d-block w-100" alt="event 2" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Tournament Battle Ground</h5>
              <p>Play with your friend and win the prize.</p>
            </div>
          </div>
          <div className="carousel-item btn" type="button">
            <img src="https://images.pexels.com/photos/7046723/pexels-photo-7046723.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className="d-block w-100" alt="event 3" />
            <div className="carousel-caption d-none d-md-block">
              <h5>A SELECTION OF THE BEST JUST FOR YOU</h5>
              <p>Play and enjoy the game we prepare just for you.</p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      </div>
      </Layout>
    )
}