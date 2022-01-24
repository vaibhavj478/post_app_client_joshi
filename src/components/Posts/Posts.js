import React from "react";
import { Grid, CircularProgress} from "@material-ui/core";

// use selector
import { useSelector } from 'react-redux';

import Post from "./Post/Post";
import useStyles from "./styles";

const Posts = () => {
  const postsGet = useSelector((state) => state.posts); 
  const classes = useStyles();
  
  console.log(`  Posts get  ${postsGet}`);
  return (
    !postsGet.length ? <CircularProgress /> : (
        
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {postsGet.map((post) => (
            
          <Grid key={post._id} item xs={12} sm={6} md={6}>
            <Post post={post}  />
            {/* <Post post={post} setCurrentId={setCurrentId} /> */}
          </Grid>
        ))}
      </Grid>
    )
  );
};

export default Posts;
