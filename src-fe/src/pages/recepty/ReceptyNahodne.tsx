import { useState } from "react"
import { Container, Card, Button } from "react-bootstrap"

import { useFetch } from "../../hooks/UseFetch"
import ReceptyList from "../../components/ReceptyList"

import type { KategorieOutputType } from "../../types/KategorieOutputType"
import type { ReceptOutputType } from "../../types/ReceptOutputType"

const ReceptyNahodne = () => {
    const [idVybraneKategorie, setIdVybraneKategorie] = useState<number | null>(null)

    const {data: kategorie} = useFetch<KategorieOutputType[]>('http://localhost:8080/kategorie')
    const {data: recepty, refetch: refetchRecepty} = useFetch<ReceptOutputType[]>(`http://localhost:8080/recepty/nahodne?limit=${3}&idKategorie=${idVybraneKategorie}`)

    const zmakniVybraniKategorie = (id: number) => {
        setIdVybraneKategorie(id)
        refetchRecepty()
    }

    return (
        <Container>
            {!idVybraneKategorie &&
            <Card>
                <Card.Header>
                    <Card.Title>Seznam Kategorií</Card.Title>
                </Card.Header>
                <Card.Body>
                    {kategorie && kategorie.map((item) => (
                        <div>
                            <Button variant="light" className="mb-1 col-12" onClick={() => zmakniVybraniKategorie(item.id)}>{item.nazev}</Button>
                        </div>
                    ))}
                </Card.Body>
                <Card.Footer />
            </Card>}

        {idVybraneKategorie && 
            <Card>
                <Card.Header>
                    <Card.Title>Seznam Receptů</Card.Title>
                </Card.Header>
                <Card.Body>
                    {recepty && <ReceptyList recepty={recepty} />}
                </Card.Body>
                <Card.Footer />
            </Card>}
        </Container>
    )
}

export default ReceptyNahodne