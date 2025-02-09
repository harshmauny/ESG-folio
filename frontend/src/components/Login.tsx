import {
  Form,
  Input,
  Select,
  SelectItem,
  Checkbox,
  Button
} from '@heroui/react'

function Login() {
  return (
    <Form className="w-full justify-center items-center space-y-4">
      <div className="flex flex-col gap-4 max-w-md">
        <Input
          isRequired
          label="Name"
          labelPlacement="outside"
          name="name"
          placeholder="Enter your name"
        />

        <Input
          isRequired
          label="Email"
          labelPlacement="outside"
          name="email"
          placeholder="Enter your email"
          type="email"
        />

        <Input
          isRequired
          label="Password"
          labelPlacement="outside"
          name="password"
          placeholder="Enter your password"
          type="password"
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
          name="terms"
          validationBehavior="aria"
          value="true"
        >
          I agree to the terms and conditions
        </Checkbox>

        <div className="flex gap-4">
          <Button className="w-full" color="primary" type="submit">
            Submit
          </Button>
          <Button type="reset" variant="bordered">
            Reset
          </Button>
        </div>
      </div>
    </Form>
  )
}

export default Login
