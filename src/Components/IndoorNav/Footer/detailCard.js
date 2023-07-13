// React
import { useContext, useEffect, useState } from "react";

// assets
// import Thumbnail from "../../../assets/Thumbnail image.jpeg";
import Thumbnail from "../../../assets/IMG_1803.jpeg";

// MUI Components
import Typography from "@mui/material/Typography";
import { grey } from "@mui/material/colors";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import IconButton from "@mui/material/IconButton";

export default function DetailCard() {
  return (
    <List sx={{ width: "100%", maxWidth: 360, p: 0 }}>
      <ListItem sx={{ p: 0, width: "fit-content" }}>
        <ListItemAvatar
          sx={{
            mx: 1,
            p: 0.2,
            border: 1,
            borderRadius: "50%",
            borderColor: "secondary.main",
          }}
        >
          <IconButton sx={{ padding: 0 }}>
            <Avatar
              alt="Travis Howard"
              src={Thumbnail}
              sx={{ width: 56, height: 56 }}
            />
          </IconButton>
        </ListItemAvatar>
        <ListItemText primary="Building Name" secondary="455" />
      </ListItem>
    </List>
  );
}
