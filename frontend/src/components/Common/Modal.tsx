import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button
} from '@heroui/react'
import { Accordion, AccordionItem } from '@heroui/react'
import axios from 'axios'
import { Company } from 'components/InvestorView'
import { useState } from 'react'

interface ModalViewProps {
  isOpen: boolean
  companyData: Company
  onClose: () => void
}

function ModalView({ isOpen, companyData, onClose }: ModalViewProps) {
  const { name, e, g, s, environment, esg, governance, price, sociaal } =
    companyData
  const [AIRespponse, setAIResponse] = useState(null)
  const [loading, setLoading] = useState(false)
  async function analyze() {
    setLoading(true)
    try {
      const res = await axios.get('api/company/analyze?name=' + name)
      setAIResponse(res.data)
      // setAIResponse('AI analysis not available')
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }
  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={() => {
          onClose()
          setAIResponse(null)
        }}
      >
        <ModalContent>
          <>
            <ModalHeader className="flex flex-col gap-1">{name}</ModalHeader>
            <ModalBody>
              <Accordion>
                <AccordionItem
                  key="1"
                  aria-label="Accordion 1"
                  subtitle="Press to expand"
                  title={'Environment: ' + environment}
                >
                  <div>
                    <p>
                      <strong>Emmission:</strong> {e.emissions}
                    </p>
                    <p>
                      <strong>Resource Use:</strong> {e.resourceUse}
                    </p>
                    <p>
                      <strong>Innovation:</strong> {e.innovation}
                    </p>
                  </div>
                </AccordionItem>
                <AccordionItem
                  key="2"
                  aria-label="Accordion 2"
                  subtitle={'click to expand'}
                  title={'Social: ' + sociaal}
                >
                  <div>
                    <p>
                      <strong>Community:</strong> {s.community}
                    </p>
                    <p>
                      <strong>Workforce:</strong> {s.workforce}
                    </p>
                    <p>
                      <strong>Human Rights:</strong> {s.humanRights}
                    </p>
                    <p>
                      <strong>Product Responsibility:</strong>{' '}
                      {s.productResponsibility}
                    </p>
                  </div>
                </AccordionItem>
                <AccordionItem
                  key="3"
                  aria-label="Accordion 3"
                  subtitle="Press to expand"
                  title={'Governance: ' + governance}
                >
                  <div>
                    <p>
                      <strong>Management:</strong> {g.management}
                    </p>
                    <p>
                      <strong>CSR Strategy:</strong> {g.csrStrategy}
                    </p>
                    <p>
                      <strong>Shareholder:</strong> {g.shareholders}
                    </p>
                  </div>
                </AccordionItem>
              </Accordion>
              {AIRespponse == null ? (
                <Button
                  color="primary"
                  variant="light"
                  onPress={() => analyze()}
                >
                  {loading ? 'Loading...' : 'Analyze using AI'}
                </Button>
              ) : (
                <p>{AIRespponse}</p>
              )}
            </ModalBody>
            <ModalFooter>
              <Button
                color="danger"
                variant="light"
                onPress={() => {
                  onClose()
                  setAIResponse(null)
                }}
              >
                Close
              </Button>
            </ModalFooter>
          </>
        </ModalContent>
      </Modal>
    </>
  )
}

export default ModalView
