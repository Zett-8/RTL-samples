import React from 'react'

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

export default CustomInput
