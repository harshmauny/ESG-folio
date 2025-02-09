import { Button } from '@heroui/react'
import React from 'react'
import CompanyModal from './Common/CompanyModal'

function CompanyView() {
  const [isOpen, setIsOpen] = React.useState(false)

  const handleOpen = () => {
    setIsOpen(true)
  }
  const handleClose = () => {
    setIsOpen(false)
  }
  return (
    <>
      <div className="flex justify-end mx-auto p-4">
        <Button color="primary" onPress={handleOpen}>
          Add request
        </Button>
      </div>
      <CompanyModal isOpen={isOpen} onClose={handleClose} />
    </>
  )
}

export default CompanyView
