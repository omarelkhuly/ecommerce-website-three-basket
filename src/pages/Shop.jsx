import { Card, CardContent, CardMedia, Typography, Button, Grid } from "@mui/material"
import { useCart } from "../context/CartContext"

const products = [
  { id: 1, name: "Laptop", price: 500, img: "https://via.placeholder.com/150" },
  { id: 2, name: "Phone", price: 300, img: "https://via.placeholder.com/150" },
  { id: 3, name: "Headphones", price: 100, img: "https://via.placeholder.com/150" },
]

export default function Shop() {
  const { addToCart } = useCart()

  return (
    <div className="p-4">
      <Typography variant="h4" gutterBottom>Shop</Typography>
      <Grid container spacing={2}>
        {products.map((p) => (
          <Grid item xs={12} sm={6} md={4} key={p.id}>
            <Card>
              <CardMedia component="img" height="140" image={p.img} alt={p.name} />
              <CardContent>
                <Typography gutterBottom variant="h6">{p.name}</Typography>
                <Typography variant="body2">Price: ${p.price}</Typography>
                <Button variant="contained" onClick={() => addToCart(p)}>Add to Cart</Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}
