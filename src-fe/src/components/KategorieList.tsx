import { Link } from "react-router-dom"
import type { KategorieOutputType } from "../types/KategorieOutputType"

type Props = {
    kategorie: KategorieOutputType[]
}

const KategorieList = ({ kategorie }: Props) => {
    return (
        <div>
            {kategorie.map((item) => (
                <div>
                    <Link className="btn btn-light mb-1 col-12" to={`/kategorie/${item.id}`}>{item.nazev}</Link>
                </div>
            ))}
        </div>
    )
}

export default KategorieList