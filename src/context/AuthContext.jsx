// context/AuthContext.jsx
import { createContext, useContext, useState, useEffect } from "react"
import { supabase } from "../supabase"

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    // check user session
    const getUser = async () => {
      const { data } = await supabase.auth.getUser()
      setUser(data?.user || null)
    }
    getUser()

    // listen to login/logout changes
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user || null)
    })

    return () => {
      listener.subscription.unsubscribe()
    }
  }, [])

  // ✅ Login
  const login = async (email, password) => {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) throw error
    return data
  }

  // ✅ Register (مع إضافة name في جدول users)
  const register = async (email, password, name) => {
    const { data, error } = await supabase.auth.signUp({ email, password })
    if (error) throw error

    if (data?.user) {
      // إضافة للبروفايل
      const { error: insertError } = await supabase.from("users").insert([
        {
          id: data.user.id,   // نفس id بتاع Supabase Auth
          name,
        },
      ])
      if (insertError) throw insertError
    }

    return data
  }

  // ✅ Logout
  const logout = async () => {
    await supabase.auth.signOut()
  }

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
