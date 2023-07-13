// React
import { useState, useContext, useEffect } from "react";

// Context
import { StateControllerContext } from "../../../Context/stateControllerContext";
import { MapMetaDataContext } from "../../../Context/mapMetaDataContext";
import { BuildingsContext } from "../../../Context/buildingsContext";

//Function
import getUserLocation from "../../../functions/getUserLocation";
import route from "../../../functions/route";
import decodeGeoHash from "../../../Services/Firebase/decodeGeoHash";

// MUI Components
import Card from "@mui/material/Card";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";

// MUI Icons
import ClearIcon from "@mui/icons-material/Clear";
import PanoramaFishEyeIcon from "@mui/icons-material/PanoramaFishEye";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import MyLocationIcon from "@mui/icons-material/MyLocation";

export default function Directions() {
  const {
    userLocation,
    destinations,
    startPoint,
    routes,
    currentClickedLocation,
    setUserLocationState,
    setStartPointState,
    setDestinationsState,
  } = useContext(StateControllerContext);
  const { map } = useContext(MapMetaDataContext);
  const { buildingsData } = useContext(BuildingsContext);

  useEffect(() => {
    if (userLocation) {
      setDirection(userLocation);
    }
  }, [userLocation]);

  useEffect(() => {
    if (currentClickedLocation) {
      const { latitude, longitude } = decodeGeoHash(
        currentClickedLocation.geoHash
      );
      if (!startPoint) {
        setStartPointState([latitude, longitude]);
      } else if (!destinations) {
        setDestinationsState([latitude, longitude]);
      }
    }
  }, [currentClickedLocation]);

  function setDirection(usrLoc) {
    if (!startPoint) {
      setStartPointState([usrLoc.latitude, usrLoc.longitude]);
    } else if (!destinations) {
      setDestinationsState([usrLoc.latitude, usrLoc.longitude]);
    }
  }

  function resetStart() {
    setStartPointState("");
  }
  function resetDestination() {
    setDestinationsState("");
  }

  return (
    <Card
      sx={{
        position: "absolute",
        bottom: 0,
        py: 3,
        px: 3,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <FormControl sx={{ m: 0, width: "30ch" }} variant="outlined">
        <div style={{ display: "flex" }}>
          <PanoramaFishEyeIcon fontSize="1" sx={{ my: 1.5 }} />
          <OutlinedInput
            id="start point"
            type={"text"}
            placeholder="Choose a starting point or click on the map"
            value={startPoint}
            sx={{
              py: 0,
              m: 0,
              height: 35,
              marginBottom: 1,
              marginLeft: 1,
              width: "100%",
            }}
            endAdornment={
              <InputAdornment position="end">
                <IconButton aria-label="delete" edge="end" onClick={resetStart}>
                  <ClearIcon />
                </IconButton>
              </InputAdornment>
            }
          />
        </div>
      </FormControl>
      <FormControl sx={{ m: 0, width: "30ch" }} variant="outlined">
        <div style={{ display: "flex" }}>
          <FmdGoodIcon fontSize="1" sx={{ my: 1.5 }} />
          <OutlinedInput
            id="destination point"
            type={"text"}
            value={destinations}
            placeholder="Choose a starting point or click on the map"
            sx={{
              py: 0,
              m: 0,
              height: 35,
              marginBottom: 2,
              marginLeft: 1,
              width: "100%",
            }}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="delete"
                  edge="end"
                  onClick={resetDestination}
                >
                  <ClearIcon />
                </IconButton>
              </InputAdornment>
            }
          />
        </div>
      </FormControl>
      <Divider />
      <Button
        variant="text"
        startIcon={<MyLocationIcon />}
        sx={{ marginTop: 1 }}
        onClick={() => {
          getUserLocation(map, setUserLocationState);
        }}
      >
        Your location
      </Button>
    </Card>
  );
}
