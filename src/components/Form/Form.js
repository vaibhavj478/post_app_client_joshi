import React, { useState } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";

import FileBase from "react-file-base64";

import useStyles from "./styles";

import { useDispatch } from "react-redux";
import { createPost } from "../../actions/posts";

const Form = () => {
  const dispatch = useDispatch();

  const classes = useStyles();

  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(createPost(postData));
  };

  const clear = () => {};

  return (
    <>
      <p>Form</p>
      <h1>Create Post</h1>
      <Paper className={classes.paper}>
        <form
          autoComplete="off"
          noValidate
          className={`${classes.root} ${classes.form}`}
          onSubmit={handleSubmit}
        >
          <Typography variant="h6">Add Post</Typography>
          <TextField
            name="creator"
            variant="outlined"
            label="Creator"
            fullWidth
            value={postData.creator}
            onChange={(e) =>
              setPostData({ ...postData, creator: e.target.value })
            }
          ></TextField>
          <TextField
            name="title"
            variant="outlined"
            label="Title"
            fullWidth
            value={postData.title}
            onChange={(e) =>
              setPostData({ ...postData, title: e.target.value })
            }
          />
          <TextField
            name="message"
            variant="outlined"
            label="Message"
            fullWidth
            multiline
            rows={4}
            value={postData.message}
            onChange={(e) =>
              setPostData({ ...postData, message: e.target.value })
            }
          />
          <TextField
            name="tags"
            variant="outlined"
            label="Tags (coma separated)"
            fullWidth
            value={postData.tags}
            onChange={(e) =>
              setPostData({
                ...postData,
                tags: e.target.value.toUpperCase().split(","),
              })
            }
          />

          <div className={classes.fileInput}>
            <FileBase
              type="file"
              multiple={false}
              onDone={({ base64 }) =>
                setPostData({ ...postData, selectedFile: base64 })
              }
            ></FileBase>
            <Button
              className={classes.buttonSubmit}
              variant="container"
              color="primary"
              size="large"
              type="submit"
              fullWidth
            >
              Submit
            </Button>
            <Button
              className={classes.buttonSubmit}
              variant="contained"
              color="secondary"
              size="small"
              onClick={clear}
            >
              Clear
            </Button>
          </div>
        </form>
      </Paper>
    </>
  );
};

export default Form;
