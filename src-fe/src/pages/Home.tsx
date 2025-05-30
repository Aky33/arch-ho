import { Container } from "react-bootstrap"
import { Link } from "react-router-dom"

const Home = () => {
    return (
        <Container>
            <Link className="btn btn-light mb-1 pt-4 pb-4 col-12" to={"/kategorie"}>Kategorie</Link>
            <Link className="btn btn-light mb-1 pt-4 pb-4 col-12" to={"/recepty"}>Recepty</Link>
            <Link className="btn btn-light mb-1 pt-4 pb-4 col-12" to={"/recepty/nahodne"}>Náhodný výběr</Link>
        </Container>
    )
}

export default Home