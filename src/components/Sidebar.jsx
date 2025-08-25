import { Drawer, List, ListItem, ListItemText } from "@mui/material"
import { Link } from "react-router-dom"

export default function Sidebar({ open, onClose }) {
  return (
    <Drawer anchor="left" open={open} onClose={onClose}>
      <List className="w-60">
        {[
          { text: "Home", path: "/" },
          { text: "Shop", path: "/shop" },
          { text: "Services", path: "/services" },
          { text: "Portfolio", path: "/portfolio" },
          { text: "Blog", path: "/blog" },
          { text: "About", path: "/about" },
          { text: "Contact", path: "/contact" },
        ].map((item) => (
          <ListItem button component={Link} to={item.path} key={item.text}>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  )
}
