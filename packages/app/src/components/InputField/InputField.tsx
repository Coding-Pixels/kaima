import React from 'react'

type Props = {
  type: string
  name: string
  placeholder?: string
}
function InputField({ type, name, placeholder }: Props) {
  return <input type={type} name={name} placeholder={placeholder || ''} />
}

export default InputField
