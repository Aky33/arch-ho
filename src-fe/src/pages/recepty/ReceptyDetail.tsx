import { useParams } from "react-router-dom"
import { Container, Card } from "react-bootstrap"

import { useFetch } from "../../hooks/UseFetch"

import type { ReceptOutputType } from "../../types/ReceptOutputType"
import type { KategorieOutputType } from "../../types/KategorieOutputType"

const ReceptyDetail = () => {
    const params = useParams<{id: string}>()
    const {data: recept} = useFetch<ReceptOutputType>('http://localhost:8080/recepty/' + params.id)
    const {data: kategorie} = useFetch<KategorieOutputType>('http://localhost:8080/kategorie/' + recept?.idKategorie)

    return (
        <Container>
            <Card>
                <Card.Header>
                    <Card.Title>Detail Receptu</Card.Title>
                </Card.Header>
                <Card.Body>
                    <Card.Text><strong>Id:</strong> {recept?.id}</Card.Text>
                    <Card.Text><strong>Kategorie:</strong> {kategorie?.nazev}</Card.Text>
                    <Card.Text><strong>Název:</strong> {recept?.nazev}</Card.Text>
                    <Card.Text style={{ whiteSpace: "pre-line" }}><strong>Postup:</strong> {recept?.postup}</Card.Text>
                </Card.Body>
            </Card>
        </Container>
    )
}

export default ReceptyDetail