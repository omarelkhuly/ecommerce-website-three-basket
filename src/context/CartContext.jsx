import { createContext, useContext, useState } from "react"
import { useAuth } from "./AuthContext"

const CartContext = createContext()

export function CartProvider({ children }) {
  const { user } = useAuth()
  const [cart, setCart] = useState([])

  const addToCart = (product) => {
    if (!user) {
      alert("يجب تسجيل الدخول أولاً 🛑")
      return
    }
    setCart((prev) => [...prev, product])
  }

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id))
  }

  const clearCart = () => setCart([])

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  return useContext(CartContext)
}
