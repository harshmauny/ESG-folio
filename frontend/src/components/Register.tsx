import { Formik } from 'formik'
import { Link } from 'react-router-dom'

function Register() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-700">
          Sign In
        </h2>
        <Formik
          initialValues={{
            email: '',
            password: '',
            userType: '',
            name: '',
            retypePassword: ''
          }}
          validate={(values) => {
            const errors: {
              name?: string

              email?: string
              password?: string
              retypePassword?: string
              userType?: string
            } = {}
            if (!values.email) {
              errors.email = 'Required'
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = 'Invalid email address'
            }
            if (!values.password) {
              errors.password = 'Required'
            } else if (values.password.length < 8) {
              errors.password = 'Must be 8 characters or more'
            }
            if (!values.userType) {
              errors.userType = 'Required'
            }

            return errors
          }}
          onSubmit={async (values, { setSubmitting }) => {
            setSubmitting(false)
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting
          }) => (
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="userType"
                  className="block text-sm font-medium text-gray-700"
                >
                  User Type<span className="text-red-500"> *</span>
                </label>
                <select
                  name="userType"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.userType}
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-gray-200 border border-gray-300 rounded-lg focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                >
                  <option value="" label="Select user type" />
                  <option value="company" label="Company" />
                  <option value="investor" label="Investor" />
                </select>
                {errors.userType && touched.userType && (
                  <div className="text-red-500 text-xs mt-1">
                    {errors.userType}
                  </div>
                )}
              </div>
              <div>
                <label htmlFor="name" className="block text-sm text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-gray-200 border border-gray-300 rounded-lg focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
                {errors.name && touched.name && (
                  <div className="text-red-500 text-xs mt-1">{errors.name}</div>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-gray-200 border border-gray-300 rounded-lg focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
                {errors.email && touched.email && (
                  <div className="text-red-500 text-xs mt-1">
                    {errors.email}
                  </div>
                )}
              </div>

              <div className="mt-4">
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm text-gray-700"
                  >
                    Password
                  </label>
                </div>

                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-gray-200 border border-gray-300 rounded-lg focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
                {errors.password && touched.password && (
                  <div className="text-red-500 text-xs mt-1">
                    {errors.password}
                  </div>
                )}
              </div>

              <div className="mt-4">
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="retypePassword"
                    className="block text-sm text-gray-700"
                  >
                    Retype Password
                  </label>
                </div>

                <input
                  type="password"
                  name="retypePassword"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.retypePassword}
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-gray-200 border border-gray-300 rounded-lg focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
                {errors.retypePassword && touched.retypePassword && (
                  <div className="text-red-500 text-xs mt-1">
                    {errors.retypePassword}
                  </div>
                )}
              </div>

              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50"
                >
                  Sign Up
                </button>
              </div>
            </form>
          )}
        </Formik>

        <p className="mt-4 text-xs text-center text-gray-500">
          Already have an account?{' '}
          <Link
            to="/register"
            className="font-medium text-blue-600 hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Register
