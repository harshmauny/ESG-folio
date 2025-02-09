import React from 'react'
import { Card, CardBody, CardFooter, Image } from '@heroui/react'
import ModalView from './Common/Modal'

export interface Company {
  name: string
  esg: number
  environment: number
  sociaal: number
  governance: number
  e: {
    emmission: number
    resourceUse: number
    innovation: number
  }
  s: {
    community: number
    workforce: number
    humanRights: number
    productResponsibility: number
  }
  g: {
    management: number
    csrStrategy: number
    shareholder: number
  }
  price: string
}

const defaultCompany: Company = {
  name: '',
  esg: 0,
  environment: 0,
  sociaal: 0,
  governance: 0,
  e: {
    emmission: 0,
    resourceUse: 0,
    innovation: 0
  },
  s: {
    community: 0,
    workforce: 0,
    humanRights: 0,
    productResponsibility: 0
  },
  g: {
    management: 0,
    csrStrategy: 0,
    shareholder: 0
  },
  price: ''
}

function InvestorView() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [selectedCompany, setSelectedCompany] =
    React.useState<Company>(defaultCompany)
  const onClose = () => {
    setIsOpen(false)
    setSelectedCompany(defaultCompany)
  }
  const onOpen = (data: Company) => {
    setIsOpen(true)
    setSelectedCompany(data)
  }

  const list: Company[] = [
    {
      name: 'Metal X',
      esg: 28,
      environment: 20,
      sociaal: 27,
      governance: 41,
      e: {
        emmission: 13,
        resourceUse: 32,
        innovation: 0
      },
      s: {
        community: 21,
        workforce: 37,
        humanRights: 28,
        productResponsibility: 0
      },
      g: {
        management: 40,
        csrStrategy: 51,
        shareholder: 37
      },
      price: '72'
    }
  ]
  return (
    <>
      <div className="container mx-auto p-4">
        <div className="gap-2 grid grid-cols-2 sm:grid-cols-3">
          {list.map((item, index) => (
            /* eslint-disable no-console */
            <Card
              key={index}
              isPressable
              shadow="sm"
              onPress={() => {
                onOpen(item)
              }}
            >
              <CardBody className="overflow-visible p-0">
                {/* display e, g, s data in item */}
                <div className="flex flex-col gap-1 p-3">
                  <p>{`Environment: ${item.environment}`}</p>

                  <p>{`Social: ${item.sociaal}`}</p>
                  <p>{`Governance: ${item.governance}`}</p>
                </div>
              </CardBody>
              <CardFooter className="text-small justify-between">
                <b>{item.name}</b>
                <p className="text-default-500">ESG: {item.esg}</p>
                <p className="text-default-500">Stock price: {item.price}</p>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
      <ModalView
        companyData={selectedCompany}
        isOpen={isOpen}
        onClose={onClose}
      />
    </>
  )
}

export default InvestorView
