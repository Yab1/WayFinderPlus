// React
import { useContext } from "react";

// Context
import { MapMetaDataContext } from "../../../Context/mapMetaDataContext";

// MUI Components
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";

// MUI Icons
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import GpsNotFixedIcon from "@mui/icons-material/GpsNotFixed";
import AltRouteIcon from "@mui/icons-material/AltRoute";
import CircleRoundedIcon from "@mui/icons-material/CircleRounded";

//MUI Others
import { orange } from "@mui/material/colors";

const SideBarRight = () => {
  const { getUserLocation, zoomIn, zoomOut } = useContext(MapMetaDataContext);
  return (
    <div className="SideBarRight">
      <Stack direction="column" spacing={2}>
        <IconButton aria-label="circle icon" disabled size="small">
          <CircleRoundedIcon fontSize="inherit" sx={{ bgcolor: "primary" }} />
        </IconButton>
        <IconButton aria-label="circle icon" disabled size="small">
          <CircleRoundedIcon fontSize="inherit" sx={{ bgcolor: "primary" }} />
        </IconButton>
        <IconButton aria-label="route icon" size="large">
          <Avatar>
            <AltRouteIcon />
          </Avatar>
        </IconButton>
        <IconButton aria-label="circle icon" disabled size="small">
          <CircleRoundedIcon fontSize="inherit" sx={{ bgcolor: "primary" }} />
        </IconButton>
        <IconButton aria-label="circle icon" disabled size="small">
          <CircleRoundedIcon fontSize="inherit" sx={{ bgcolor: "primary" }} />
        </IconButton>
      </Stack>

      <Stack direction="column" spacing={0}>
        <IconButton
          aria-label="Location"
          size="large"
          sx={{ marginBottom: 2 }}
          onClick={getUserLocation}
        >
          <Avatar sx={{ bgcolor: orange[900] }} variant="rounded">
            <GpsNotFixedIcon fontSize="inherit" />
          </Avatar>
        </IconButton>
        <IconButton aria-label="zoomIn icon" size="large" onClick={zoomIn}>
          <Avatar variant="rounded">
            <AddIcon fontSize="inherit" />
          </Avatar>
        </IconButton>
        <IconButton aria-label="minus icon" size="large" onClick={zoomOut}>
          <Avatar variant="rounded">
            <RemoveIcon fontSize="inherit" />
          </Avatar>
        </IconButton>
      </Stack>
    </div>
  );
};

export default SideBarRight;
