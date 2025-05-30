import { Link } from "react-router-dom"
import type { ReceptOutputType } from "../types/ReceptOutputType"

type Props = {
    recepty: ReceptOutputType[]
}

const ReceptyList = ({ recepty }: Props) => {
    return (
        <div>
            {recepty.map((item, index) => (
                <div>
                    <Link className="btn btn-light mb-1 col-12" to={`/recepty/${item.id}`}>{item.nazev}</Link>
                </div>
            ))}
        </div>
    )
}

export default ReceptyList