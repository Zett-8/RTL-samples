import React, { useEffect, useState } from 'react'
import CustomInput from './CustomInput'
import { getUser, User } from './get-user'
import './App.css'

const App = () => {
  const [text, setText] = useState('')
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    const fetchUser = async () => {
      const user = await getUser()
      setUser(user)
    }

    fetchUser()
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }

  return (
    <div>
      {user ? <p>Username: {user.name}</p> : null}
      <CustomInput value={text} onChange={handleChange}>input:</CustomInput>
      <p>you typed: { text ? text : '...' }</p>
      <p>multiple element</p>
      <p>multiple element</p>
    </div>
  )
}

export default App;
