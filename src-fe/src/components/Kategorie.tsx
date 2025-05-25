type KategorieProps = {
    id: number
    nazev: string
}

const Kategorie = ({id, nazev}: KategorieProps) => {
    return (
        <div>
            <div>Id: {id}</div>
            <div>Nazev: {nazev}</div>
        </div>
    )
}

export default Kategorie