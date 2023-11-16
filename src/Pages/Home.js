import Intro from "../Components/UI/Home/Introduction/Intro";
import Form from "../Components/UI/Home/Form/Form";
import classes from "../Components/UI/PageStyles/Home.module.css";
import { Fade } from "react-awesome-reveal";

const Home = () => {
  return (

      <div className={classes.home}>
        <Fade direction="up" duration={1000}>
          <Intro />
        </Fade>
        <Form />
      </div>
  );
};

export default Home;
