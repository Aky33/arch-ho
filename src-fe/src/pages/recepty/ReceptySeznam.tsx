import { useState } from "react"
import { Container, Card, Alert, Button, Modal } from "react-bootstrap"
import { FaPlus } from "react-icons/fa"

import { useFetch } from "../../hooks/UseFetch"
import ReceptyFormular from "../../components/ReceptyFormular"
import ReceptyList from "../../components/ReceptyList"

import type { ReceptOutputType } from "../../types/ReceptOutputType"

const ReceptySeznam = () => {
    const {data: recepty, refetch, error} = useFetch<ReceptOutputType[]>('http://localhost:8080/recepty')
    const [showModal, setShowModal] = useState(false)

    //Musí být specificky napsáno jinak se perou typy
    const zmakniOtevreniModalu = () => setShowModal(true)
    const zmakniZavreniModalu = () => setShowModal(false)

    return (
        <Container>
            <Card>
                <Card.Header>
                    <Card.Title>Seznam Receptů</Card.Title>
                </Card.Header>
                <Card.Body>
                    {error && <Alert variant="danger">{error}</Alert>}
                    {recepty && recepty.length == 0 && <div>Nic tu není.</div>}
                    {recepty && <ReceptyList recepty={recepty} />}
                </Card.Body>
                <Card.Footer>
                    <div className="d-flex justify-content-end">
                        <Button onClick={zmakniOtevreniModalu}>
                            <FaPlus />
                        </Button>
                    </div>

                    <Modal show={showModal} onHide={zmakniZavreniModalu}>
                        <Modal.Header closeButton>
                            <Modal.Title>Vložení nového Receptu</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <ReceptyFormular 
                                onVlozeni={() => {
                                    refetch()
                                    zmakniZavreniModalu()
                                }} 
                            />
                        </Modal.Body>
                    </Modal>
                </Card.Footer>
            </Card>
        </Container>
    )
}

export default ReceptySeznam