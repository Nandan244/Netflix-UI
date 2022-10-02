import { ArrowBackOutlined } from "@material-ui/icons";
import "./Watch.scss";
import movieSample from "../../Video/movieSample.mp4"

export default function Watch() {
  return (
    <div className="watch">
      <div className="back">
        <ArrowBackOutlined className="backArrow" />
        Home
      </div>
      <video
        className="video"
        autoPlay="true"
        progress
        controls
        src={movieSample}
      />
    </div>
  );
}