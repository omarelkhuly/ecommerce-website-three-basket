import { Card, CardContent, Typography } from "@mui/material"

export default function TestimonialCard({ name, review }) {
  return (
    <Card className="shadow-md">
      <CardContent>
        <Typography variant="body1" gutterBottom>"{review}"</Typography>
        <Typography variant="subtitle2" color="textSecondary">
          - {name}
        </Typography>
      </CardContent>
    </Card>
  )
}
