import { React} from "react";
import classes from "./Navbar.module.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../../../../Pages/Layout";
import Home from "../../../../Pages/Home";
import Articles from "../../../../Pages/Articles"
import Broadcasts from "../../../../Pages/Broadcasts";
import Cinefam from "../../../../Pages/Cinefam";
import Design from "../../../../Pages/Design";
import Photo from "../../../../Pages/Photo";
import NoPage from "../../../../Pages/NoPage";


const Navbar = () => {
  return (
    <div className={classes.nav}>
      <BrowserRouter>
        <Routes>
          {/* The nested <Route>s inherit and add to the parent route.  */}
          <Route path="/" element={<Layout />}>
            {/* index attribute. That specifies this route as the default route for the parent route, which is /. */}
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />

            {/* Drop-down Menu for Portfolio */}
            <Route path="articles" element={<Articles />} />
            <Route path="broadcasts" element={<Broadcasts />} />
            <Route path="cinefam" element={<Cinefam/>} />
            <Route path="design" element={<Design />} />
            <Route path="photo" element={<Photo />} />
            {/* Setting the path to * will act as a catch-all for any undefined URLs. */}
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Navbar;
