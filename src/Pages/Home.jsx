import { Box, Drawer, Container } from "@mui/material";
import CustomNavBar from "../Components/Ready/Sub/Utilities/CustomNavBar";
import CustomDrawer from "../Components/CustomDrawer";
import ProductList from "./ProductsList";
import { useSelector } from "react-redux";
import { displayDrawer } from "../redux/slices/drawerSlice";
import { useDispatch } from "react-redux";
import { clearFilter } from "../redux/slices/filterSlice";

function Home() {
  const isDrawerOpen = useSelector((state) => state.drawer);
  const dispatch = useDispatch();
  return (
    <>
      <CustomNavBar />
      <Box sx={{ mt: 10 }}>
        <Drawer
          anchor="left"
          open={isDrawerOpen}
          onClose={() => {
            dispatch(displayDrawer());
            dispatch(clearFilter());
          }}
        >
          <CustomDrawer />
        </Drawer>
        <Container>
          <ProductList />
        </Container>
      </Box>
    </>
  );
}

export default Home;
