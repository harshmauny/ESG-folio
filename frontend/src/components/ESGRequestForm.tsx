import {
  Form,
  Input,
  Select,
  SelectItem,
  Checkbox,
  Button
} from '@heroui/react'
import { useState } from 'react'

function ESGRequestForm() {
  const [password, setPassword] = useState('')
  const [submitted, setSubmitted] = useState<FormData | null>(null)
  const [errors, setErrors] = useState<Errors>({
    password: '',
    name: '',
    terms: ''
  })

  // Real-time password validation
  interface Errors {
    [key: string]: string
    password: string
    name: string
    terms: string
  }

  interface FormData {
    name: string
    email: string
    password: string
    country: string
    terms: string
  }

  const getPasswordError = (value: string): string | null => {
    if (value.length < 4) {
      return 'Password must be 4 characters or more'
    }
    if ((value.match(/[A-Z]/g) || []).length < 1) {
      return 'Password needs at least 1 uppercase letter'
    }
    if ((value.match(/[^a-z]/gi) || []).length < 1) {
      return 'Password needs at least 1 symbol'
    }

    return null
  }

  interface FormData {
    name: string
    email: string
    password: string
    country: string
    terms: string
  }

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = Object.fromEntries(
      new FormData(e.currentTarget)
    ) as unknown as FormData

    // Custom validation checks
    const newErrors: Errors = { password: '', name: '', terms: '' }

    // Password validation
    const passwordError = getPasswordError(data.password)

    if (passwordError) {
      const newErrors: Errors = { password: '', name: '', terms: '' }
    }

    // Username validation
    if (data.name === 'admin') {
      newErrors.name = 'Nice try! Choose a different username'
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)

      return
    }

    if (data.terms !== 'true') {
      setErrors((prev) => ({ ...prev, terms: 'Please accept the terms' }))

      return
    }

    // Clear errors and submit
    setErrors({ password: '', name: '', terms: '' })
    setSubmitted(data)
  }
  return (
    <Form
      className="w-full justify-center items-center space-y-4"
      validationBehavior="native"
      validationErrors={errors}
      onReset={() => setSubmitted(null)}
      onSubmit={onSubmit}
    >
      <div className="flex flex-col gap-4 max-w-md">
        <Input
          isRequired
          errorMessage={({ validationDetails }) => {
            if (validationDetails.valueMissing) {
              return 'Please enter your name'
            }

            return errors.name
          }}
          label="Name"
          labelPlacement="outside"
          name="name"
          placeholder="Enter your name"
        />

        <Input
          isRequired
          errorMessage={({ validationDetails }) => {
            if (validationDetails.valueMissing) {
              return 'Please enter your email'
            }
            if (validationDetails.typeMismatch) {
              return 'Please enter a valid email address'
            }
          }}
          label="Email"
          labelPlacement="outside"
          name="email"
          placeholder="Enter your email"
          type="email"
        />

        <Input
          isRequired
          errorMessage={getPasswordError(password)}
          isInvalid={getPasswordError(password) !== null}
          label="Password"
          labelPlacement="outside"
          name="password"
          placeholder="Enter your password"
          type="password"
          value={password}
          onValueChange={setPassword}
        />

        <Select
          isRequired
          label="Country"
          labelPlacement="outside"
          name="country"
          placeholder="Select country"
        >
          <SelectItem key="ar" value="ar">
            Argentina
          </SelectItem>
          <SelectItem key="us" value="us">
            United States
          </SelectItem>
          <SelectItem key="ca" value="ca">
            Canada
          </SelectItem>
          <SelectItem key="uk" value="uk">
            United Kingdom
          </SelectItem>
          <SelectItem key="au" value="au">
            Australia
          </SelectItem>
        </Select>

        <Checkbox
          isRequired
          classNames={{
            label: 'text-small'
          }}
          isInvalid={!!errors.terms}
          name="terms"
          validationBehavior="aria"
          value="true"
          onValueChange={() => setErrors((prev) => ({ ...prev, terms: '' }))}
        >
          I agree to the terms and conditions
        </Checkbox>

        {errors.terms && (
          <span className="text-danger text-small">{errors.terms}</span>
        )}

        <div className="flex gap-4">
          <Button className="w-full" color="primary" type="submit">
            Submit
          </Button>
          <Button type="reset" variant="bordered">
            Reset
          </Button>
        </div>
      </div>

      {submitted && (
        <div className="text-small text-default-500 mt-4">
          Submitted data: <pre>{JSON.stringify(submitted, null, 2)}</pre>
        </div>
      )}
    </Form>
  )
}

export default ESGRequestForm
