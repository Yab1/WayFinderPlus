// MUI Components
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";

// MUI Icons
import AddBoxIcon from "@mui/icons-material/AddBox";
import IndeterminateCheckBoxIcon from "@mui/icons-material/IndeterminateCheckBox";
import GpsNotFixedIcon from "@mui/icons-material/GpsNotFixed";
import AltRouteIcon from "@mui/icons-material/AltRoute";
import CircleRoundedIcon from "@mui/icons-material/CircleRounded";

//MUI Others
import { orange } from "@mui/material/colors";

const SideBarRight = () => {
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
          <AltRouteIcon sx={{ bgcolor: "primary" }} />
        </IconButton>
        <IconButton aria-label="circle icon" disabled size="small">
          <CircleRoundedIcon fontSize="inherit" sx={{ bgcolor: "primary" }} />
        </IconButton>
        <IconButton aria-label="circle icon" disabled size="small">
          <CircleRoundedIcon fontSize="inherit" sx={{ bgcolor: "primary" }} />
        </IconButton>
      </Stack>

      <Stack direction="column" spacing={2}>
        <IconButton aria-label="Location" size="large">
          <GpsNotFixedIcon
            fontSize="inherit"
            sx={{ bgcolor: "primary", color: orange[900] }}
          />
        </IconButton>
        <IconButton aria-label="add icon" size="large">
          <AddBoxIcon fontSize="inherit" />
        </IconButton>
        <IconButton aria-label="minus icon" size="large">
          <IndeterminateCheckBoxIcon fontSize="inherit" />
        </IconButton>
      </Stack>
    </div>
  );
};

export default SideBarRight;
