import {React} from "react";
import { Link } from "react-router-dom";
import classes from './List.module.css';

const List = (props) => {
  return (
    <div className={classes.list}>
      <ul>
        <li>
          <Link to="/articles" >articles & editorial</Link>
        </li>
        <li>
          <Link to="/broadcasts">broadcasts & videography</Link>
        </li>
        <li>
          <Link to="/cinefam">cinefam woc database</Link>
        </li>
        <li>
          <Link to="/design">design & layout</Link>
        </li>
        <li>
          <Link to="/photo">photojournalism</Link>
        </li>
      </ul>
    </div>
  );
};

export default List;
