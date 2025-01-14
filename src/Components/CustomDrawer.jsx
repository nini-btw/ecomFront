import {
  Box,
  List,
  Divider,
  ListItem,
  Slider,
  Typography,
  FormControlLabel,
  Checkbox,
  Button,
} from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  updateRange,
  updateCategories,
  clearFilter,
} from "../redux/slices/filterSlice";

/* global*/
const boxStyle = {
  width: "100%",
};

function valuetext(value) {
  return `${value}$`;
}
const categories = ["Electronics", "Clothing", "Furniture", "Sports", "Books"];

const CustomDrawer = () => {
  const [sliderValue, setSliderValue] = useState([20, 37]);

  // Redux variables
  const dispatch = useDispatch();

  // Handle slider change
  const handleSliderChange = (event, newValue) => {
    setSliderValue(newValue);
    dispatch(updateRange(newValue)); // Dispatch the action to update the store
  };

  const handleCheckboxChange = (event) => {
    const category = event.target.name;
    dispatch(updateCategories(category));
    console.log(`Clicked checkbox: ${category}`);
  };

  return (
    <Box
      sx={{
        width: 300,
        backgroundColor: "#eee",
        padding: "1.5rem",
        display: "flex",
        alignItems: "start",
        justifyContent: "space-between",
        flexDirection: "column",
        height: "100%",
      }}
      role="presentation"
    >
      {/* Slider Section */}
      <Box sx={{ ...boxStyle }}>
        <Typography variant="h6" sx={{ mb: "1rem", textAlign: "center" }}>
          Price Range
        </Typography>
        <List>
          <ListItem
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            {/* Display slider values */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                ${sliderValue[0]}
              </Typography>
              <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                ${sliderValue[1]}
              </Typography>
            </Box>
            <Slider
              getAriaLabel={() => "Price range"}
              value={sliderValue}
              onChange={handleSliderChange}
              valueLabelDisplay="auto"
              getAriaValueText={valuetext}
              min={0}
              max={1000}
              step={10}
              sx={{
                color: "#310b9f",
                height: 6,
                "& .MuiSlider-thumb": {
                  backgroundColor: "#F6DA51",
                  border: "2px solid #310b9f",
                  width: 16,
                  height: 16,
                },
                "& .MuiSlider-track": {
                  backgroundColor: "#310b9f",
                },
                "& .MuiSlider-rail": {
                  backgroundColor: "#ddd",
                },
              }}
            />
          </ListItem>
        </List>
      </Box>
      <Divider sx={{ mt: "1rem" }} />
      {/* Categories Section */}
      <Box sx={{ ...boxStyle }}>
        <Typography variant="h6" sx={{ mb: "1rem", textAlign: "center" }}>
          Categories
        </Typography>
        <List>
          {categories.map((category) => (
            <ListItem key={category} sx={{ padding: 0 }}>
              <FormControlLabel
                control={
                  <Checkbox
                    onChange={handleCheckboxChange}
                    name={category}
                    sx={{
                      color: "#310b9f",
                      "&.Mui-checked": { color: "#310b9f" },
                    }}
                  />
                }
                label={category}
              />
            </ListItem>
          ))}
        </List>
      </Box>
      <Divider sx={{ mt: "1rem" }} />
      {/* Button section */}
      <Box
        sx={{
          ...boxStyle,
          display: "flex",
          justifyContent: "space-between",
          mt: "1rem",
        }}
      >
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#310b9f",
            color: "#fff",
            "&:hover": { backgroundColor: "#240b7a" },
          }}
        >
          Confirm
        </Button>
        <Button
          variant="outlined"
          onClick={() => {
            dispatch(clearFilter());
          }}
          sx={{
            color: "#310b9f",
            borderColor: "#310b9f",
            "&:hover": {
              backgroundColor: "#310b9f10",
              borderColor: "#310b9f",
            },
          }}
        >
          Clear
        </Button>
      </Box>
    </Box>
  );
};

export default CustomDrawer;
