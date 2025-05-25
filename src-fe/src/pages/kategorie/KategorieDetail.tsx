import Kategorie from "../../components/Kategorie"
import { useParams } from "react-router-dom"
import { useFetch } from "../../hooks/UseFetch"
import type { KategorieType } from "../../types/KategorieType"

const KategorieDetail = () => {
    const params = useParams<{id: string}>()
    const {data: kategorie, loading, error} = useFetch<KategorieType>('http://localhost:8080/kategorie/' + params.id)

    return (
        <div>
            <Kategorie id={kategorie?.id ?? 0} nazev={kategorie?.nazev ?? ""} />
        </div>
    )
}

export default KategorieDetail