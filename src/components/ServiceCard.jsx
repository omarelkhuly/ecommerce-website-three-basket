import { Card, CardContent, Typography } from "@mui/material"

export default function ServiceCard({ title, description }) {
  return (
    <Card className="shadow-lg">
      <CardContent>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="body2" color="textSecondary">{description}</Typography>
      </CardContent>
    </Card>
  )
}
