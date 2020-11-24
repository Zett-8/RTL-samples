import React, { useEffect, useState } from 'react'
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
    </div>
  )
}

interface CustomInputProps {
  children: React.ReactNode,
  value: string,
  onChange(event: React.ChangeEvent<HTMLInputElement>): void
}

const CustomInput = ({ children, value, onChange }: CustomInputProps) => {
  return (
    <div>
      <label htmlFor={'search'}>{children}</label>
      <input id={'search'} type={'text'} value={value} onChange={onChange} />
    </div>
  )
}

export default App;
