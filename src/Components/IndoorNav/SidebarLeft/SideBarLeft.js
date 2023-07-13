// utils
import categories from "../../../utils/categories";

// MUI Components
import Menu from "@mui/material/Menu";
import Button from "@mui/material/Button";
import { grey, deepOrange } from "@mui/material/colors";

const SideBarLeft = () => {
  return (
    <section className="SideBarLeft">
      {categories.map((category) => (
        <Button
          key={category.key}
          sx={{
            color: grey[900],
            fontSize: "0.7em",
            "&:hover": {
              color: "#ff3d00",
              fontSize: "1.2em",
              fontWeight: "bold",
            },
          }}
        >
          {category.value}
        </Button>
      ))}
    </section>
  );
};

export default SideBarLeft;
