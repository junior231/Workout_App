import React from "react";
import { Link } from "react-router-dom";
import { Typography, Stack, Button } from "@mui/material";

const ExerciseCard = ({ workout }) => {
  return (
    <Link className="exercise-card" to={`/exercise/${workout.id}`}>
      <img src={workout.gifUrl} alt={workout.name} loading="lazy" />
      <Stack direction="row">
        <Button
          sx={{
            ml: "21px",
            color: "#fff",
            background: "#ffa9a9",
            fontSize: "14px",
            borderRadius: "20px",
            textTransform: "capitalize",
          }}
        >
          {workout.bodyPart}
        </Button>
        <Button
          sx={{
            ml: "21px",
            color: "#fff",
            background: "#ffcc757",
            fontSize: "14px",
            borderRadius: "20px",
            textTransform: "capitalize",
          }}
        >
          {workout.target}
        </Button>
      </Stack>
      <Typography
        ml="21px"
        color="#000"
        fontWeight="bold"
        fontSize="22px"
        mt="11px"
        pb="10px"
        textTransform="capitalize"
      >
        {workout.name}
      </Typography>
    </Link>
  );
};

export default ExerciseCard;
