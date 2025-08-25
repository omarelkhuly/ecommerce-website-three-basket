import { useState } from "react"
import { supabase } from "../api"
import { TextField, Button, Typography } from "@mui/material"

export default function Register() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(null)

  const handleRegister = async () => {
    const { error } = await supabase.auth.signUp({ email, password })
    if (error) setError(error.message)
    else alert("Registration successful 🎉 Please verify your email.")
  }

  return (
    <div className="p-4 max-w-md mx-auto">
      <Typography variant="h4">Register</Typography>
      <TextField fullWidth margin="normal" label="Email" value={email} onChange={(e)=>setEmail(e.target.value)} />
      <TextField fullWidth margin="normal" label="Password" type="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
      {error && <Typography color="error">{error}</Typography>}
      <Button variant="contained" color="primary" onClick={handleRegister}>Register</Button>
    </div>
  )
}
