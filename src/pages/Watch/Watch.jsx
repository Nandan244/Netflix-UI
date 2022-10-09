import { ArrowBackOutlined } from "@material-ui/icons";
import "./Watch.scss";
import movieSample from "../../Video/movieSample.mp4"
import { Link } from "react-router-dom";

export default function Watch() {
  return (
    <div className="watch">
    <Link style={{"color":"white","textDecoration":"none","alignItems":"center"}} to={'/'}>
      <div className="back">
        <ArrowBackOutlined className="backArrow" />
        Home
      </div>
      </Link>
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