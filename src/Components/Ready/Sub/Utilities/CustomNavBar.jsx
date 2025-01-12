import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Divider from "@mui/material/Divider";
import MenuItem from "@mui/material/MenuItem";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import CustomSearchBar from "../Utilities/CustomSearchBar";
import { SitemarkIcon } from "../Registration/CustomIcons";
import { useTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";
import Select from "@mui/material/Select";
import { useState } from "react";
import { Container, Typography } from "@mui/material";
import { MenuItem as DropdownItem } from "@mui/material";

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flexShrink: 0,
  backdropFilter: "blur(24px)",
  border: "1px solid",
  borderColor: theme.palette.divider,
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
  padding: theme.spacing(1, 2, 1, 0), // Using `theme.spacing` for consistent padding
  borderRadius: "0  0 1rem 1rem",
}));

export default function CustomNavBar() {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme(); // Access the current theme
  const strokeColor = theme.palette.mode === "dark" ? "#fff" : "#000";

  const [filtersVisible, setFiltersVisible] = useState(false);
  const [filters, setFilters] = useState({
    year: "",
    type: "",
    faculty: "",
  });

  const handleToggleFilters = () => {
    setFiltersVisible((prev) => !prev);
  };

  const handleFilterChange = (filterType) => (event) => {
    setFilters((prev) => ({
      ...prev,
      [filterType]: event.target.value,
    }));
  };

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const filtersList = [
    { name: "Year", values: ["2020", "2021", "2022", "2023"] },
    { name: "Type", values: ["Academic", "Non-Academic"] },
    { name: "Faculty", values: ["Engineering", "Arts", "Business"] },
  ];

  return (
    <AppBar
      position="fixed"
      enableColorOnDark
      sx={{
        boxShadow: 0,
        bgcolor: "transparent",
        backgroundImage: "none",
      }}
    >
      <StyledToolbar variant="dense" disableGutters>
        <Container sx={{ display: "flex" }}>
          <Box
            sx={{
              display: "flex",
              flexGrow: "1",
              alignItems: "center",
              px: 0,
            }}
          >
            <SitemarkIcon strokeColor={strokeColor} />
            <CustomSearchBar />
          </Box>
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: 1,
              alignItems: "center",
            }}
          >
            <Link to="/signIn">
              <Button
                variant="text"
                size="small"
                sx={{
                  color: (theme) => theme.palette.text.primary,
                  backgroundColor: (theme) => theme.palette.background.paper,
                }}
              >
                Sign in
              </Button>
            </Link>
            <Link to="signUp">
              <Button
                variant="contained"
                size="small"
                sx={{
                  backgroundColor: (theme) => theme.palette.background.accent,
                  color: (theme) => theme.palette.text.accent,
                }}
              >
                Sign up
              </Button>
            </Link>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" }, gap: 1 }}>
            <IconButton aria-label="Menu button" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="top"
              open={open}
              onClose={toggleDrawer(false)}
              PaperProps={{
                sx: {
                  top: "var(--template-frame-height, 0px)",
                },
              }}
            >
              <Box sx={{ p: 2, backgroundColor: "background.default" }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                  }}
                >
                  <IconButton onClick={toggleDrawer(false)}>
                    <CloseRoundedIcon />
                  </IconButton>
                </Box>
                <MenuItem onClick={handleToggleFilters}>FILTER</MenuItem>
                <Divider sx={{ my: 3 }} />
                {filtersVisible && (
                  <Box sx={{ mt: 3 }}>
                    {filtersList.map((filter, index) => (
                      <Box
                        key={index}
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          mb: 2,
                        }}
                      >
                        <Typography>{filter.name}</Typography>
                        <Select
                          value={filters[filter.name.toLowerCase()]}
                          onChange={handleFilterChange(
                            filter.name.toLowerCase()
                          )}
                          sx={{ width: "50%" }}
                        >
                          {filter.values.map((value, idx) => (
                            <DropdownItem key={idx} value={value}>
                              {value}
                            </DropdownItem>
                          ))}
                        </Select>
                      </Box>
                    ))}
                  </Box>
                )}

                <MenuItem>
                  <Box sx={{ width: "100%" }}>
                    <Link to="signUp">
                      <Button
                        variant="contained"
                        fullWidth
                        sx={{
                          backgroundColor: (theme) =>
                            theme.palette.background.accent,
                          color: (theme) => theme.palette.text.accent,
                        }}
                      >
                        Sign up
                      </Button>
                    </Link>
                  </Box>
                </MenuItem>
                <MenuItem>
                  <Box sx={{ width: "100%" }}>
                    <Link to="/signIn">
                      <Button
                        variant="contained"
                        borderColor="theme.pallete.background.accent"
                        fullWidth
                        sx={{
                          color: (theme) => theme.palette.text.primary,
                          backgroundColor: (theme) =>
                            theme.palette.background.paper,
                        }}
                      >
                        Sign in
                      </Button>
                    </Link>
                  </Box>
                </MenuItem>
              </Box>
            </Drawer>
          </Box>
        </Container>
      </StyledToolbar>
    </AppBar>
  );
}
