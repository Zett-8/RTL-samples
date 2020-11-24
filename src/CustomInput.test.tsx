import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import CustomInput from './CustomInput'

jest.mock('./get-user')

describe('when everything is ok', () => {
  test('should call the onChange callback handler with fireEvent', () => {
    const onChange = jest.fn()
    render(<CustomInput value={''} onChange={onChange}>Input: </CustomInput>)

    fireEvent.change(screen.getByRole('textbox'), { target: { value: 'David' }})
    expect(onChange).toHaveBeenCalledTimes(1)
  })

  test('should call the onChange callback handler with userEvent', async () => {
    const onChange = jest.fn()
    render(<CustomInput value={''} onChange={onChange}>Input: </CustomInput>)

    await userEvent.type(screen.getByRole('textbox'), 'David')
    expect(onChange).toHaveBeenCalledTimes(5)
  })
})
