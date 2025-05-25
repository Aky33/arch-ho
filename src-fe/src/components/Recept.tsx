type ReceptProps = {
    id: number
    idKategorie: number
    nazev: string
    postup?: string
}

const Recept = ({id, idKategorie, nazev, postup}: ReceptProps) => {
    return (
        <div>
            <div>Id: {id}</div>
            <div>IdKategorie: {idKategorie}</div>
            <div>Nazev: {nazev}</div>
            <div>Postup: {postup}</div>
        </div>
    )
}

export default Recept