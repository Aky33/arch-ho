import { useParams } from "react-router-dom"
import { useFetch } from "../../hooks/UseFetch"
import type { ReceptOutputType } from "../../types/ReceptOutputType"

const ReceptyDetail = () => {
    const params = useParams<{id: string}>()
    const {data: recept} = useFetch<ReceptOutputType>('http://localhost:8080/recepty/' + params.id)

    return (
        <div className="recept">
            <div>Id: {recept?.id}</div>
            <div>IdKategorie: {recept?.idKategorie}</div>
            <div>Nazev: {recept?.nazev}</div>
            <div>Postup: {recept?.postup}</div>
        </div>
    )
}

export default ReceptyDetail