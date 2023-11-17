import Broad from "../Components/UI/Broadcasts/Broad";
import { Fade } from "react-awesome-reveal";

const Broadcasts = () => {
  return (
    <div>
      <Fade direction="up" duration={1000} triggerOnce="true">
        <h3>Broadcasts & Videography Work</h3>
      </Fade>
      <Broad />
    </div>
  );
};

export default Broadcasts;
