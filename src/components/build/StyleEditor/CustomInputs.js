import React from "react";
import * as styles from "./StyleEditor.module.scss";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { useDispatch, useSelector } from "react-redux";
import * as buildActions from "../../../redux/actions/buildActions";

const CustomInputs = () => {
  const view = useSelector((state) => state.build.styleEditorUI.view);
  const custom = useSelector((state) => state.custom[view]);
  const customClass = useSelector(
    (state) => state.build.components.componentsByIds[view].customClass
  );

  const dispatch = useDispatch();

  const handleClassChange = (customClass) => {
    dispatch(
      buildActions.updateComponentCustomClass({
        id: view,
        customClass: customClass,
      })
    );
  };

  return (
    <Stack spacing={2} className={styles.inputContainer}>
      <Box className={styles.paddingLeft}>
        <Typography variant="h6">{view}</Typography>
        <Typography variant="subtitle2">{custom.preset}</Typography>
        <TextField
          style={{ backgroundColor: "#ffffff" }}
          id="customClass"
          key="customClass"
          label="Custom CSS class"
          type="text"
          value={customClass}
          size="small"
          variant="standard"
          onChange={(event) => {
            handleClassChange(event.target.value);
          }}
        />
      </Box>
    </Stack>
  );
};

export default CustomInputs;
