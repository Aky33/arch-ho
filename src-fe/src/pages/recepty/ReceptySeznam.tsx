import { Link } from "react-router-dom"
import { useFetch } from "../../hooks/UseFetch"
import type { ReceptOutputType } from "../../types/ReceptOutputType"

const ReceptSeznam = () => {
    const {data: recepty, refetch, error} = useFetch<ReceptOutputType[]>('http://localhost:8080/recepty')

    return (
        <div>
            {recepty?.map((item, index) => (
                <Link to={`/recepty/${item.id}`}>{item.nazev}</Link>
            ))}
        </div>
    )
}

export default ReceptSeznam