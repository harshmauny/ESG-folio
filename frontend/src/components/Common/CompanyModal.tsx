import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input
} from '@heroui/react'
import { Formik } from 'formik'
import { em } from 'framer-motion/client'

interface CompanyModalProps {
  isOpen: boolean
  onClose: () => void
}

function CompanyModal({ isOpen, onClose }: CompanyModalProps) {
  return (
    <>
      <Modal isOpen={isOpen} size="3xl" onClose={onClose}>
        <ModalContent>
          <>
            <Formik
              initialValues={{
                emmision: '',
                resourceUse: '',
                innovation: '',
                community: '',
                workforce: '',
                humanRights: '',
                productResponsibility: '',
                management: '',
                csrStrategy: '',
                shareholder: ''
              }}
              validate={(values) => {
                const errors: {
                  email?: string
                  password?: string
                } = {}

                return errors
              }}
              onSubmit={async (values, { setSubmitting }) => {
                setSubmitting(false)
                console.log(values)
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
                <>
                  <ModalHeader className="flex flex-col gap-1">
                    {'Add Audit Request'}
                  </ModalHeader>
                  <ModalBody>
                    <form
                      className="grid grid-cols-3 gap-4"
                      onSubmit={handleSubmit}
                    >
                      <div>
                        <h3 className="font-semibold">Environment</h3>
                        <div className="flex flex-col gap-4">
                          <Input
                            name="emmision"
                            className="max-w-[220px]"
                            variant="flat"
                            label="Emission"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.emmision}
                            type="number"
                          />
                          <Input
                            name="resourceUse"
                            className="max-w-[220px]"
                            variant="flat"
                            label="Resource Use"
                            type="number"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.resourceUse}
                          />
                          <Input
                            name="innovation"
                            className="max-w-[220px]"
                            variant="flat"
                            label="Innovation"
                            type="number"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.innovation}
                          />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold">Social</h3>
                        <div className="flex flex-col gap-4">
                          <Input
                            name="community"
                            className="max-w-[220px]"
                            variant="flat"
                            label="Community"
                            type="number"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.community}
                          />
                          <Input
                            name="workforce"
                            className="max-w-[220px]"
                            variant="flat"
                            label="Workforce"
                            type="number"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.workforce}
                          />
                          <Input
                            name="humanRights"
                            className="max-w-[220px]"
                            variant="flat"
                            label="Human Rights"
                            type="number"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.humanRights}
                          />
                          <Input
                            name="productResponsibility"
                            className="max-w-[220px]"
                            variant="flat"
                            label="Product Responsibility"
                            type="number"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.productResponsibility}
                          />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold">Governance</h3>
                        <div className="flex flex-col gap-4">
                          <Input
                            name="management"
                            className="max-w-[220px]"
                            variant="flat"
                            label="Management"
                            type="number"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.management}
                          />
                          <Input
                            name="csrStrategy"
                            className="max-w/[220px]"
                            variant="flat"
                            label="CSR Strategy"
                            type="number"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.csrStrategy}
                          />
                          <Input
                            name="shareholder"
                            className="max-w/[220px]"
                            variant="flat"
                            label="Shareholder"
                            type="number"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.shareholder}
                          />
                        </div>
                      </div>
                    </form>
                  </ModalBody>
                  <ModalFooter>
                    <Button color="danger" variant="light" onPress={onClose}>
                      Close
                    </Button>
                    <Button
                      color="primary"
                      onClick={() => {
                        handleSubmit()
                        onClose()
                      }}
                    >
                      Submit
                    </Button>
                  </ModalFooter>
                </>
              )}
            </Formik>
          </>
        </ModalContent>
      </Modal>
    </>
  )
}

export default CompanyModal
