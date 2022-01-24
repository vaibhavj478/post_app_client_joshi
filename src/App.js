import React, { useState, useEffect } from 'react';
// components
import Form from "./components/Form/Form";
import Posts from "./components/Posts/Posts";
// materail ui
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";

import useStyles from './styles';

import memories from './images/memories.png';
// redux hook dispatchaction 
import { useDispatch } from 'react-redux';


// action call
import { getPosts } from "./actions/posts";


function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts);
  }, [ dispatch]);


  const classes = useStyles();

  return (
    <Container maxWidth="lg">
      <AppBar position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">Memories</Typography>
        <img className={classes.image} src={memories} alt="icon" height="60" />
      </AppBar>

    <Grow in >
        <Container>
        <Grid container justify="space-between" alignItems="stretch" spacing={3}>
        <Grid item xs={12} sm={7}>
              {/* <Posts setCurrentId={setCurrentId} /> */}
              <Posts></Posts>
            </Grid>
            <Grid item xs={12} sm={4}>
              {/* <Form currentId={currentId} setCurrentId={setCurrentId} /> */}
              <Form></Form>
            </Grid>
        </Grid>
        </Container>
    </Grow>


    </Container>
  );
}

export default App;
