import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2"; // Import Grid2
import { Card, Typography, Button } from "@mui/material";
import { styled } from "@mui/system";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import { useEffect, useState } from "react";

// Styled Card
const StyledCard = styled(Card)(() => ({
  backgroundColor: "#eee",
  boxShadow: 3,
  borderRadius: "1rem",
  padding: "1rem",
  minHeight: "28vh",
}));

// Products Array

export default function ProductList() {
  const [products, setProducts] = useState([]);

  const getAllProducts = () => {
    fetch("http://localhost:3000/api/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.data.products);
      });
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  console.log(products);
  return (
    <Box sx={{ mt: "7rem" }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {products.map((product, index) => (
          <Grid key={index} size={{ xs: 2, sm: 3, md: 3 }}>
            <StyledCard>
              <>
                <Box
                  sx={{
                    width: 100,
                    height: 100,
                    overflow: "hidden",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    margin: "0 auto",
                  }}
                >
                  <CardMedia
                    component="img"
                    src={product.picture}
                    alt={product.name}
                    sx={{
                      maxWidth: "100%",
                      maxHeight: "100%",
                      objectFit: "contain",
                    }}
                  />
                </Box>
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    {product.name}
                  </Typography>
                  <Typography variant="h5" color="text.primary">
                    {product.price}
                  </Typography>
                </CardContent>
              </>
              <CardActions>
                <Button size="small" color="primary">
                  View
                </Button>
              </CardActions>
            </StyledCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
