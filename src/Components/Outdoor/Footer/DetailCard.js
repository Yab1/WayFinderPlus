// React
import { useContext, useEffect, useState } from "react";

// Context
import { StateControllerContext } from "../../../Context/stateControllerContext";

// MUI Components
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

// MUI Icon
import VrpanoIcon from "@mui/icons-material/Vrpano";

export default function DetailCard() {
  const { currentClickedLocation } = useContext(StateControllerContext);
  function truncateSentence(sentence, maxWords) {
    const words = sentence.split(" ");
    if (words.length > maxWords) {
      const truncatedWords = words.slice(0, maxWords);
      return truncatedWords.join(" ") + "...";
    }
    return sentence;
  }
  let truncatedSentence;
  if (currentClickedLocation) {
    truncatedSentence = truncateSentence(
      currentClickedLocation.buildingDescription,
      26
    );
  }

  if (currentClickedLocation) {
    return (
      <Card
        sx={{
          width: 345,
          position: "absolute",
          bottom: 0,
          right: "7em",
        }}
      >
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {currentClickedLocation.buildingName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {truncatedSentence}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            endIcon={<VrpanoIcon />}
            sx={{ mx: "auto" }}
          >
            Go To Street View
          </Button>
        </CardActions>
      </Card>
    );
  }
}
