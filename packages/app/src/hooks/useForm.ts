import { useState, ChangeEvent } from 'react'

const initialState = {
  name: '',
  email: '',
  password: '',
}
const initialErrorState = {
  name: null,
  email: null,
  password: null,
}
type ValidateFieldProps = {
  isRequired: boolean
  validationExpression: string
  errorMessage: string
  value: string
  name: string
}
const useForm = () => {
  const [data, setData] = useState(initialState)
  const [errors, setErrors] = useState(initialErrorState)
  const [isFormValid, setIsFormValid] = useState(false)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const validateField = ({
    isRequired,
    validationExpression,
    errorMessage,
    value,
    name,
  }: ValidateFieldProps) => {
    let valid = true
    let errorText = null
    if (isRequired && value === '') {
      valid = false
      errorText = 'This is a required field'
    }

    if (value !== '' && !RegExp(validationExpression).test(value)) {
      valid = false
      errorText = errorMessage
    }
    if (!valid) {
      setErrors({ ...errors, [name]: errorText })
    } else {
      setErrors({ ...errors, [name]: null })
    }
  }

  const validateForm = () => {
    console.log('This is where we validate if the form can be submitted or not')
    let hasErrors = false
    let containsEmptyFields = false
    Object.keys(errors).forEach((e) => {
      if (errors[e as keyof typeof initialErrorState] !== null) {
        hasErrors = true
      }
    })
    Object.keys(data).forEach((e) => {
      if (data[e as keyof typeof initialState] === '') {
        containsEmptyFields = true
      }
    })

    if (!hasErrors && !containsEmptyFields) {
      setIsFormValid(true)
    }
  }

  const submitForm = () => {
    console.log('This function is where you can submit the form')
    validateForm()
  }

  return { data, errors, handleChange, validateField, isFormValid, submitForm }
}

export default useForm
