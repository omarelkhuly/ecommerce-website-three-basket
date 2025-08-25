import { Typography } from "@mui/material"

export default function PurchaseOrder() {
  return (
    <div className="p-4">
      <Typography variant="h4">Purchase Orders</Typography>
      <Typography variant="body1">
        هنا هيظهر تاريخ الطلبات السابقة (ممكن ربطها بالـ API لاحقاً).
      </Typography>
    </div>
  )
}
