import { useParams } from "react-router-dom"
import { Container, Card } from "react-bootstrap"

import { useFetch } from "../../hooks/UseFetch"

import type { ReceptOutputType } from "../../types/ReceptOutputType"

const ReceptyDetail = () => {
    const params = useParams<{id: string}>()
    const {data: recept} = useFetch<ReceptOutputType>('http://localhost:8080/recepty/' + params.id)

    return (
        <Container>
            <Card>
                <Card.Header>
                    <Card.Title>Detail Receptu</Card.Title>
                </Card.Header>
                <Card.Body>
                    <Card.Text><strong>Id:</strong> {recept?.id}</Card.Text>
                    <Card.Text><strong>IdKategorie:</strong> {recept?.idKategorie}</Card.Text>
                    <Card.Text><strong>Název:</strong> {recept?.nazev}</Card.Text>
                    <Card.Text>
                        <strong>Postup:</strong> <p style={{ whiteSpace: "pre-line" }}>{recept?.postup}</p>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>
    )
}

export default ReceptyDetail