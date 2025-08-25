import { Typography, Container } from "@mui/material"

export default function Footer() {
  return (
    <div className="bg-gray-800 text-white py-4 mt-10">
      <Container>
        <Typography variant="body2" align="center">
          © {new Date().getFullYear()} ThreeBasket. All rights reserved.
        </Typography>
      </Container>
    </div>
  )
}
