// React
import { useContext } from "react";

// Context
import { StateControllerContext } from "../../../Context/stateControllerContext";
import { BuildingsContext } from "../../../Context/buildingsContext";
import { MapMetaDataContext } from "../../../Context/mapMetaDataContext";

// utils
import categories from "../../../utils/categories";

// function
import checkAvailability from "../../../functions/checkAvailability";

// MUI Components
import Button from "@mui/material/Button";
import { grey } from "@mui/material/colors";

const SideBarLeft = () => {
  const { selectedCategory, setSelectedCategoryState } = useContext(
    StateControllerContext
  );
  const { resetView } = useContext(MapMetaDataContext);
  const { buildingsData } = useContext(BuildingsContext);
  return (
    <section className="SideBarLeft">
      {categories.map((category) => {
        const available = checkAvailability(buildingsData, category);
        if (!available) return null;
        return (
          <Button
            key={category.key}
            id={category.key}
            sx={{
              color:
                selectedCategory && selectedCategory.key == category.key
                  ? "#fb3262"
                  : grey[900],
              fontWeight:
                selectedCategory && selectedCategory.key == category.key
                  ? "bold"
                  : "",
              fontSize:
                selectedCategory && selectedCategory.key == category.key
                  ? "1.2em"
                  : "0.7em",
              "&:hover": {
                color: "#fb3262",
                fontSize: "1.2em",
                fontWeight: "bold",
              },
            }}
            onClick={() => {
              setSelectedCategoryState(category);
              resetView();
            }}
          >
            {category.value}
          </Button>
        );
      })}
    </section>
  );
};

export default SideBarLeft;
