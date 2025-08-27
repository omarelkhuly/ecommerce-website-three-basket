// Login code
import { useState } from "react"
import { TextField, Button, Typography } from "@mui/material"
import { useAuth } from "../context/AuthContext"
import { useNavigate } from "react-router-dom"

export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(null)
  const { login } = useAuth()
  const navigate = useNavigate()

  const handleLogin = async () => {
    try {
      await login(email, password)
      alert("Login successful ✅")
      navigate("/") // ✅ بعد تسجيل الدخول يرجع للصفحة الرئيسية
    } catch (err) {
      setError(err.message)
    }
  }

  return (
    <div className="p-4 max-w-md mx-auto">
      <Typography variant="h4">Login</Typography>
      <TextField fullWidth margin="normal" label="Email" value={email} onChange={(e)=>setEmail(e.target.value)} />
      <TextField fullWidth margin="normal" label="Password" type="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
      {error && <Typography color="error">{error}</Typography>}
      <Button variant="contained" color="primary" onClick={handleLogin}>Login</Button>
    </div>
  )
}