import Kategorie from "../../components/Kategorie"
import { useFetch } from "../../hooks/UseFetch"
import type { KategorieType } from "../../types/KategorieType"

const KategorieSeznam = () => {
    const {data: kategorie, loading, error} = useFetch<KategorieType[]>('http://localhost:8080/kategorie')
    console.log("data: " + kategorie)
    console.log("error: " + error)

    return (
        <div>
            {kategorie!.map((item, index) => (
                <Kategorie id={item.id} nazev={item.nazev} />
            ))}
        </div>
    )
}

export default KategorieSeznam