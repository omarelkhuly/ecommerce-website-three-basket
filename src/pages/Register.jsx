// Register code
import { useState } from "react"
import { TextField, Button, Typography } from "@mui/material"
import { useAuth } from "../context/AuthContext"
import { useNavigate } from "react-router-dom"

export default function Register() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(null)
  const { register } = useAuth()
  const navigate = useNavigate()

  const handleRegister = async () => {
    try {
      await register(email, password, name)
      alert("Registration successful 🎉 Please verify your email.")
      navigate("/login") // ✅ بعد التسجيل يروح لصفحة تسجيل الدخول
    } catch (err) {
      setError(err.message)
    }
  }

  return (
    <div className="p-4 max-w-md mx-auto">
      <Typography variant="h4">Register</Typography>
      <TextField fullWidth margin="normal" label="Name" value={name} onChange={(e)=>setName(e.target.value)} />
      <TextField fullWidth margin="normal" label="Email" value={email} onChange={(e)=>setEmail(e.target.value)} />
      <TextField fullWidth margin="normal" label="Password" type="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
      {error && <Typography color="error">{error}</Typography>}
      <Button variant="contained" color="primary" onClick={handleRegister}>Register</Button>
    </div>
  )
}