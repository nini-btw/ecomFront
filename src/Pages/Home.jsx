import { Box, Drawer, Button, Container } from "@mui/material";
import CustomNavBar from "../Components/Ready/Sub/Utilities/CustomNavBar";
import CustomDrawer from "../Components/CustomDrawer";
import { useState } from "react";
import ProductList from "./ProductsList";

function Home() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <CustomNavBar />
      <Box sx={{ mt: 10 }}>
        <Drawer open={open} onClose={() => setOpen(false)}>
          <CustomDrawer toggleDrawer={() => setOpen(false)} />
        </Drawer>
        <Container>
          <Button onClick={() => setOpen(true)}>Open Drawer</Button>
          <ProductList />
        </Container>
      </Box>
    </>
  );
}

export default Home;
