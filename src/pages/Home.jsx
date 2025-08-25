import HeroSection from "../components/HeroSection"
import ServiceCard from "../components/ServiceCard"
import TestimonialCard from "../components/TestimonialCard"
import { Grid, Typography } from "@mui/material"

export default function Home() {
  return (
    <div>
      <HeroSection />
      <div className="p-4">
        <Typography variant="h4" gutterBottom>Our Services</Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}><ServiceCard title="Fast Delivery" description="Get your products quickly"/></Grid>
          <Grid item xs={12} md={4}><ServiceCard title="24/7 Support" description="We are here to help"/></Grid>
          <Grid item xs={12} md={4}><ServiceCard title="Best Quality" description="Top-rated products"/></Grid>
        </Grid>

        <Typography variant="h4" gutterBottom className="mt-6">Testimonials</Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}><TestimonialCard name="Ali" review="Great service!"/></Grid>
          <Grid item xs={12} md={4}><TestimonialCard name="Sara" review="Loved the products"/></Grid>
          <Grid item xs={12} md={4}><TestimonialCard name="Omar" review="Fast delivery!"/></Grid>
        </Grid>
      </div>
    </div>
  )
}
