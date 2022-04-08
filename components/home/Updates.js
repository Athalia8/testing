import React, { Component } from "react";
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption } from "reactstrap";
import { collection, getDocs, query } from "firebase/firestore";
import { db } from "../../firebase/config";
import Link from "next/link";

class Updates extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0, items: [], ids: [] };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  // getChildContext() {
  //   return { name: "Jonas" };
  // }
  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === this.state.items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? this.state.items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  async fetch() {
    var temp = [];
    var tempid = [];
    const q = query(collection(db, "updates"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      temp.push(doc.data());
      tempid.push(doc.id);
    });
    this.setState({
      items: temp,
      ids: tempid,
    });
  }

  componentDidMount() {
    this.fetch();
  }
  render() {
    const { activeIndex, items, ids } = this.state;
    const slides = items.map((item, index) => {
      return (
        <CarouselItem
          className="custom-tag"
          tag="div"
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.game}
        >
          <Link href={"/updates/" + ids[index]}>
            <a>
              <img
                src={item.thumbnail}
                alt={item.game}
                style={{
                  height: 200,
                  width: 800,
                }}
              />
              <CarouselCaption captionText={item.game} captionHeader={item.game} />
            </a>
          </Link>
        </CarouselItem>
      );
    });

    return (
      <div>
        <style>
          {`.custom-tag {
                max-width: 100%;
                height: 200px;
                background: black;
                margin-bottom:5px;
              }`}
        </style>
        <h3>LAST UPDATES</h3>
        <Carousel activeIndex={activeIndex} next={this.next} previous={this.previous}>
          <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
          {slides}
          <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
          <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
        </Carousel>
      </div>
    );
  }
}

export default Updates;
