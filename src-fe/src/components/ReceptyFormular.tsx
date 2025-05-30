import React, { useState } from "react"
import type { FormEvent } from "react"
import { Form, Button } from "react-bootstrap"

import usePost from "../hooks/UsePost"
import { useFetch } from "../hooks/UseFetch"

import type { ReceptInputType } from "../types/ReceptInputType"
import type { KategorieOutputType } from "../types/KategorieOutputType"

type Props = {
    onVlozeni: () => void
}

const ReceptyFormular = ({ onVlozeni } : Props) => {
    const odesliData = usePost<ReceptInputType>("http://localhost:8080/recepty")
    const { data: kategorie } = useFetch<KategorieOutputType[]>("http://localhost:8080/kategorie")

    const [idKategorie, setIdKategorie] = useState<number | undefined>(undefined)
    const [nazev, setNazev] = useState('')
    const [postup, setPostup] = useState<string | undefined>(undefined)

    const zmakniOdeslani = async (e: FormEvent) => {
        e.preventDefault()

        if (idKategorie === undefined)
            throw new Error('IdKategorie musí být vyplně')

        const novyRecept: ReceptInputType = { idKategorie, nazev, postup }
        const res = await odesliData(novyRecept)

        if (res.ok) {
            setIdKategorie(undefined)
            setNazev('')
            setPostup(undefined)

            onVlozeni()
        } else {
            console.error("Data se neposlaly")
        }
    }

    return (
        <Form onSubmit={zmakniOdeslani}>
            <Form.Group className="mb-3">
                <Form.Label htmlFor="kategorie">Kategorie:</Form.Label>
                <Form.Select id="kategorie" value={idKategorie} onChange={(e) => setIdKategorie(Number(e.target.value))} required>
                    <option value="">-- Zvol Kategorii --</option>
                    {kategorie && kategorie.map((item: KategorieOutputType) => (
                        <option key={item.id} value={item.id}>{item.nazev}</option>
                    ))}
                </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label htmlFor="nazev">Název:</Form.Label>
                <Form.Control id="nazev" type="text" placeholder="Název receptu" value={nazev} onChange={(e) => setNazev(e.target.value)} required />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label htmlFor="postup">Postup:</Form.Label>
                <Form.Control id="postup" as="textarea" rows={5} placeholder="Postup" value={postup} onChange={(e) => setPostup(e.target.value)} />
            </Form.Group>

            <div className="d-flex justify-content-end">
                <Button variant="primary" type="submit">Vlož</Button>
            </div>
        </Form>
    )
}

export default ReceptyFormular