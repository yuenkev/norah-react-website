import Intro from "../Components/UI/Home/Introduction/Intro";
import Form from "../Components/UI/Home/Form/Form";
import classes from "../Components/UI/PageStyles/Home.module.css";

const Home = () => {
    return ( 
      <div className={classes.home}>
        <Intro/>
        <Form />
      </div>
    );
  };
  
  export default Home;