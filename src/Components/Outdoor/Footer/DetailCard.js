// React
import { useContext, useEffect, useState } from "react";

// Context
import { StateControllerContext } from "../../../Context/stateControllerContext";

// Flamer Motion
import { AnimatePresence, motion } from "framer-motion";

// MUI Components
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

// MUI Icon
import VrpanoIcon from "@mui/icons-material/Vrpano";

const cardVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.1, type: "spring", damping: 8, weight: 10 },
  },
  exit: { opacity: 0, transition: { duration: 0.5 } },
};

export default function DetailCard() {
  const { currentClickedLocation, showCard, setShowCardState } = useContext(
    StateControllerContext
  );
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

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCardState();
    }, 3500);

    return () => {
      clearInterval(timer);
    };
  });
  if (currentClickedLocation && showCard) {
    return (
      <AnimatePresence>
        <motion.div
          variants={cardVariant}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
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
                <Link
                  target="_blank"
                  href="https://yab1.github.io/WayFinderPlus-VR/"
                  underline="none"
                  sx={{ color: "white" }}
                >
                  Go To Street View
                </Link>
              </Button>
            </CardActions>
          </Card>
        </motion.div>
      </AnimatePresence>
    );
  }
}
