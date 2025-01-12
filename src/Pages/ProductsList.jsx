import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2"; // Import Grid2
import { Card, Typography, Button } from "@mui/material";
import { styled } from "@mui/system";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";

// Styled Card
const StyledCard = styled(Card)(() => ({
  backgroundColor: "#eee",
  boxShadow: 3,
  borderRadius: "1rem",
  padding: "1rem",
  minHeight: "28vh",
}));

// Products Array
const products = [
  {
    title: "Green Iguana",
    price: "$25",
    description:
      "Lizards are a widespread group of squamate reptiles, with over 6,000 species.",
    image: "https://via.placeholder.com/300x140.png?text=Green+Iguana",
  },
  {
    title: "Tropical Bird",
    price: "$30",
    description:
      "Tropical birds are known for their vibrant feathers and melodious songs.",
    image: "https://via.placeholder.com/300x140.png?text=Tropical+Bird",
  },
  {
    title: "Cactus Plant",
    price: "$15",
    description:
      "Cacti are well-known for their ability to store water and thrive in arid climates.",
    image: "https://via.placeholder.com/300x140.png?text=Cactus+Plant",
  },
  {
    title: "Ocean Coral",
    price: "$50",
    description:
      "Corals are marine invertebrates that play a vital role in ocean ecosystems.",
    image: "https://via.placeholder.com/300x140.png?text=Ocean+Coral",
  },
];

export default function ProductList() {
  return (
    <Box>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {products.map((product, index) => (
          <Grid key={index} size={{ xs: 2, sm: 3, md: 3 }}>
            <StyledCard>
              <CardActionArea>
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
                    src={product.image}
                    alt={product.title}
                    sx={{
                      maxWidth: "100%",
                      maxHeight: "100%",
                      objectFit: "contain",
                    }}
                  />
                </Box>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {product.title}
                  </Typography>
                  <Typography variant="body1" color="text.primary">
                    {product.price}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "text.secondary", mt: 1 }}
                  >
                    {product.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
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
