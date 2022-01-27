import React, {Fragment} from 'react';
import Delete from './DeleteMovie';

import classes from './Movie.module.css';

const Movie = (props) => {
  return (
    <Fragment>
      <li className={classes.movie}>
        <h2>{props.title}</h2>
        <h3>{props.releaseDate}</h3>
        <p>{props.openingText}</p>
      </li>
      <Delete name={props.data}/>
    </Fragment>
  );
};

export default Movie;
