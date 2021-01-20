import React, { memo, useRef } from "react";

import { makeStyles } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import ContentEditable from "react-contenteditable";

import StyleManager from "../LeftPanel/StyleManager";

const useStyles = makeStyles({
  editable: {
    marginLeft: "10%",
    width: "75%",
    minHeight: "50p",
    border: "1px dashed #aaa",
    padding: "5px",
    resize: "none",
  },
});

function EditorPane() {
  const classes = useStyles();
  const text = useRef("");

  const handleChange = (evt) => {
    text.current = evt.target.value;
  };

  const handleBlur = () => {
    console.log(text.current);
  };

  return (
    <Grid container>
      <Grid item xs={3}>
        <StyleManager />

        <p>Optimise Text</p>
      </Grid>
      <Grid item xs={9}>
        <ContentEditable
          html={text.current}
          onBlur={handleBlur}
          onChange={handleChange}
          tagName="p"
          className={classes.editable}
          placeholder={"Here is the heading"}
        />

        <ContentEditable
          html={text.current}
          onBlur={handleBlur}
          onChange={handleChange}
          tagName="p"
          className={classes.editable}
          placeholder={"Here is the description"}
        />
      </Grid>
    </Grid>
  );
}

export default memo(EditorPane);
