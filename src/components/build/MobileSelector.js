import React from "react";
import Typography from "@mui/material/Typography";
import Carousel from "./Carousel";
import Box from "@mui/material/Box";
import styles from "./Build.module.scss";
import * as buildActions from "../../redux/actions/buildActions";
import { mobile } from "./TemplateTypes";
import { useDispatch } from "react-redux";

const MobileSelector = () => {
  const dispatch = useDispatch();
  const carouselSettings = {
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Select Mobile Layout Type
      </Typography>
      <Carousel settings={carouselSettings}>
        {mobile.types.map((type) => (
          <div
            key={type.name}
            className={styles.slide}
            onClick={() =>
              dispatch(buildActions.updateBuildView(mobile.redirect))
            }
          >
            {type.image}
            <Typography textAlign="center">{type.name}</Typography>
          </div>
        ))}
      </Carousel>
    </Box>
  );
};

export default MobileSelector;
