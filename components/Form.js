import React from 'react';
import classes from './Form.module.css';
const Form = props => {
    const displayHandler = (event) => {
        event.preventDefault();
        console.log(event.target.title.value);
        console.log(event.target.text.value);
        console.log(event.target.date.value);
    }
    
    return (
      <section>
        <form onSubmit={displayHandler}>
          <label className={classes.label}>Title</label>
          <input
            type="text"
            name='title'
            className={classes.input}
            
          />
          <lable className={classes.label}>Opening Text</lable>
          <input
            type="text"
            name='text'
            className={classes.input}
            
          />
          <lable className={classes.label}>Release Date</lable>
          <input
            type="text"
            name='date'
            className={classes.input}
            
          />
          <button type='submit'>Add Movie</button>
        </form>
      </section>
    );
}

export default Form;