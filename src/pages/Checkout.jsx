import { useCart } from "../context/CartContext"
import { Typography, Button, List, ListItem, ListItemText } from "@mui/material"

export default function Checkout() {
  const { cart, removeFromCart, clearCart } = useCart()

  return (
    <div className="p-4">
      <Typography variant="h4" gutterBottom>Checkout</Typography>
      {cart.length === 0 ? (
        <Typography variant="body1">سلة التسوق فارغة 🛒</Typography>
      ) : (
        <>
          <List>
            {cart.map((item) => (
              <ListItem key={item.id}>
                <ListItemText primary={item.name} secondary={`$${item.price}`} />
                <Button variant="outlined" onClick={() => removeFromCart(item.id)}>
                  Remove
                </Button>
              </ListItem>
            ))}
          </List>
          <Button variant="contained" color="primary" onClick={clearCart}>
            إتمام الشراء
          </Button>
        </>
      )}
    </div>
  )
}
