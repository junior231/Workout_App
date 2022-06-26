import React from "react";
import { Box, Typography, Stack } from "@mui/material";
import HorizontalCarousel from "./HorizontalCarousel";
import Loader from "./Loader";

const SimilarExercises = ({ targetMuscle, equipment }) => {
  return (
    <Box sx={{ mt: { lg: "100px", xs: "0" } }}>
      <Typography sx={{ fontSize: { lg: '44px', xs: '25px' }, ml: '20px' }} fontWeight={700} color="#000" mb="33px">
        Checkout Similar <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>Target Muscle</span>  
      </Typography>
      <Stack direction="row" sx={{ p: "2", position: "relative" }}>
        {targetMuscle.length ? (
          <HorizontalCarousel data={targetMuscle} />
        ) : (
          <Loader />
        )}
      </Stack>
      <Typography  sx={{ fontSize: { lg: '44px', xs: '25px' }, ml: '20px', mt: { lg: '100px', xs: '60px' } }} fontWeight={700} color="#000" mb="33px">
      Similar <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>Equipment</span> exercises
      </Typography>
      <Stack direction="row" sx={{ p: "2", position: "relative" }}>
        {equipment.length ? (
          <HorizontalCarousel data={equipment} />
        ) : (
          <Loader />
        )}
      </Stack>
    </Box>
  );
};

export default SimilarExercises;
