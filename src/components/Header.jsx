import { AppBar, Toolbar, Typography, Button, IconButton } from "@mui/material"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import { Link } from "react-router-dom"
import { useAuth } from "../context/AuthContext"

export default function Header() {
  const { user, login, logout } = useAuth()

  return (
    <AppBar position="static">
      <Toolbar className="flex justify-between">
        <Typography variant="h6" component="div">
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            ThreeBasket
          </Link>
        </Typography>

        <div className="flex gap-3">
          <Button color="inherit" component={Link} to="/">Home</Button>
          <Button color="inherit" component={Link} to="/shop">Shop</Button>
          <Button color="inherit" component={Link} to="/checkout">Checkout</Button>
          <Button color="inherit" component={Link} to="/purchase-order">Orders</Button>
          <IconButton color="inherit" component={Link} to="/checkout">
            <ShoppingCartIcon />
          </IconButton>

          {user ? (
            <>
              <Typography variant="body1" className="mt-1">
                مرحباً {user.username}
              </Typography>
              <Button color="inherit" onClick={logout}>Logout</Button>
            </>
          ) : (
            <Button color="inherit" onClick={() => login("Ahmed")}>Login</Button>
          )}
        </div>
      </Toolbar>
    </AppBar>
  )
}