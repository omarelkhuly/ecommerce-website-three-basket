import { Button, Typography, Container } from "@mui/material"

export default function HeroSection() {
  return (
    <div className="bg-blue-600 text-white py-20">
      <Container>
        <Typography variant="h3" gutterBottom>
          Welcome to ThreeBasket
        </Typography>
        <Typography variant="h6" gutterBottom>
          Shop smarter, shop faster!
        </Typography>
        <Button variant="contained" color="secondary">
          Explore Shop
        </Button>
      </Container>
    </div>
  )
}
