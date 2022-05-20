// import React, { useEffect } from "react";
// import { Cloudinary } from "cloudinary-core";

// const cld = new Cloudinary({ cloud_name: "dypazz6y2", secure: true });

// const VideoPlayers = () => {
// return (
//     <div
//       style={{
//         display: "flex",
//         flexDirection: "column",
//         width: "800px",
//         margin: "auto",
//         justifyContent: "center",
//         alignItems: "center"
//       }}
//       className="container"
//     >

//       <div style={{ width: "600px", height: "400", margin: "20px" }}>
//         <video
//           id="player"
//           controls
//           muted
//           className="cld-video-player cld-fluid cld-video-player-skin-dark"
//         ></video>
//       </div>

//     </div>
//   );


// export default ImgDetail;

import React, { Component } from "react";
import "cloudinary-video-player/dist/cld-video-player.light.min";
import "cloudinary-video-player/dist/cld-video-player.light.min.css";

class VideoDetail extends Component {
  videoPlayerInit = () => {
    cloudinary.videoPlayer("trailer", {
      cloud_name: this.props.options.cloudName,
      publicId: this.props.options.publicId,
      fluid: true,
      controls: true,
      preload: "auto",
      mute: true,
      autoplay: false
    });
  };
  componentDidMount() {
    this.videoPlayerInit();
  }
  render() {
    return (
      <>
          <video id="trailer" />
      </>
    );
  }
}
export default VideoDetail;